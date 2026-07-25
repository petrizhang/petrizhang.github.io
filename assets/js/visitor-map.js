(function () {
  "use strict";

  var shareSlug = "wIjmb5kUGxXUCMbf";
  var websiteId = "88d2f638-ba2e-4e4d-a84a-6c41bd6c4752";
  var apiRoot = "https://cloud.umami.is/analytics/us/api";

  function getVisitorGroupCode(code) {
    return ["HK", "MO", "TW"].indexOf(code) !== -1 ? "CN" : code;
  }

  function getCountryName(code) {
    code = getVisitorGroupCode(code);

    if (typeof Intl.DisplayNames === "function") {
      return new Intl.DisplayNames(["en"], { type: "region" }).of(code) || code;
    }

    return code;
  }

  function formatVisitors(count) {
    return count.toLocaleString("en-US") + (count === 1 ? " visitor" : " visitors");
  }

  function fetchVisitorCounts() {
    return fetch(apiRoot + "/share/" + shareSlug)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Unable to load the public analytics token.");
        }

        return response.json();
      })
      .then(function (share) {
        var parameters = new URLSearchParams({
          startAt: "0",
          endAt: String(Date.now()),
          type: "country"
        });

        return fetch(
          apiRoot + "/websites/" + websiteId + "/metrics?" + parameters.toString(),
          {
            headers: {
              "x-umami-share-token": share.token,
              "x-umami-share-context": "1"
            }
          }
        );
      })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Unable to load visitor geography.");
        }

        return response.json();
      })
      .then(function (metrics) {
        return metrics.reduce(function (counts, metric) {
          if (metric.x && metric.x !== "Unknown") {
            var code = getVisitorGroupCode(metric.x.toUpperCase());
            counts[code] = (counts[code] || 0) + (Number(metric.y) || 0);
          }

          return counts;
        }, {});
      });
  }

  function mixHexColors(from, to, ratio) {
    function channel(hex, offset) {
      return parseInt(hex.slice(offset, offset + 2), 16);
    }

    function hexChannel(value) {
      return Math.round(value).toString(16).padStart(2, "0");
    }

    var red = channel(from, 1) + (channel(to, 1) - channel(from, 1)) * ratio;
    var green = channel(from, 3) + (channel(to, 3) - channel(from, 3)) * ratio;
    var blue = channel(from, 5) + (channel(to, 5) - channel(from, 5)) * ratio;

    return "#" + hexChannel(red) + hexChannel(green) + hexChannel(blue);
  }

  function getRegionColors(visitorCounts) {
    var codes = Object.keys(visitorCounts);
    var values = codes.map(function (code) {
      return visitorCounts[code];
    });
    var minimum = Math.min.apply(null, values);
    var maximum = Math.max.apply(null, values);
    var colors = {};

    codes.forEach(function (code) {
      var ratio =
        minimum === maximum
          ? 1
          : (visitorCounts[code] - minimum) / (maximum - minimum);
      var color = mixHexColors("#cbddeb", "#315b7d", 0.25 + ratio * 0.75);

      colors[code] = color;

      if (code === "CN") {
        ["HK", "MO", "TW"].forEach(function (territoryCode) {
          colors[territoryCode] = color;
        });
      }
    });

    return colors;
  }

  function updateVisitorStats(visitorCounts) {
    var totalElement = document.getElementById("visitor-total");
    var countryTotalElement = document.getElementById("visitor-country-total");
    var topCountriesElement = document.getElementById("visitor-top-countries");
    var countries = Object.keys(visitorCounts)
      .map(function (code) {
        return {
          code: code,
          name: getCountryName(code),
          visitors: visitorCounts[code]
        };
      })
      .sort(function (left, right) {
        return right.visitors - left.visitors;
      });
    var totalVisitors = countries.reduce(function (total, country) {
      return total + country.visitors;
    }, 0);

    if (totalElement) {
      totalElement.textContent = totalVisitors.toLocaleString("en-US");
    }

    if (countryTotalElement) {
      countryTotalElement.textContent = countries.length.toLocaleString("en-US");
    }

    if (!topCountriesElement) {
      return;
    }

    topCountriesElement.textContent = "";

    if (countries.length === 0) {
      var emptyItem = document.createElement("li");
      emptyItem.className = "visitor-map-stats__empty";
      emptyItem.textContent = "No visitor data yet";
      topCountriesElement.appendChild(emptyItem);
      return;
    }

    countries.slice(0, 5).forEach(function (country) {
      var item = document.createElement("li");
      var name = document.createElement("span");
      var visitors = document.createElement("strong");

      name.textContent = country.name;
      visitors.textContent = country.visitors.toLocaleString("en-US");
      item.appendChild(name);
      item.appendChild(visitors);
      topCountriesElement.appendChild(item);
    });
  }

  function renderVisitorMap(visitorCounts) {
    var container = document.getElementById("visitor-world-map");
    var selection = document.getElementById("visitor-map-selection");

    if (!container || typeof window.jsVectorMap === "undefined") {
      return;
    }

    var options = {
      selector: "#visitor-world-map",
      map: "world",
      backgroundColor: "transparent",
      draggable: false,
      zoomButtons: false,
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: "#eaf1f8",
          fillOpacity: 1,
          stroke: "#ffffff",
          strokeWidth: 0.7
        },
        hover: {
          fill: "#6f93b1",
          cursor: "pointer"
        },
        selected: {
          fill: "#315b7d"
        }
      },
      onRegionTooltipShow: function (event, tooltip, code) {
        var groupCode = getVisitorGroupCode(code);

        tooltip.text(
          getCountryName(groupCode) +
            " · " +
            formatVisitors(visitorCounts[groupCode] || 0)
        );
      },
      onRegionClick: function (event, code) {
        var groupCode = getVisitorGroupCode(code);

        if (!selection) {
          return;
        }

        selection.textContent =
          getCountryName(groupCode) +
          " · " +
          formatVisitors(visitorCounts[groupCode] || 0);
        selection.classList.add("is-visible");
      }
    };

    updateVisitorStats(visitorCounts);
    var map = new window.jsVectorMap(options);
    var regionColors = getRegionColors(visitorCounts);

    Object.keys(regionColors).forEach(function (code) {
      if (map.regions[code]) {
        map.regions[code].element.setStyle("fill", regionColors[code]);
      }
    });
  }

  function initVisitorMap() {
    fetchVisitorCounts()
      .then(renderVisitorMap)
      .catch(function () {
        renderVisitorMap({});
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVisitorMap);
  } else {
    initVisitorMap();
  }
})();
