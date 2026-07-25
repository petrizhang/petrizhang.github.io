(function () {
  "use strict";

  var shareSlug = "wIjmb5kUGxXUCMbf";
  var websiteId = "88d2f638-ba2e-4e4d-a84a-6c41bd6c4752";
  var apiRoot = "https://cloud.umami.is/analytics/us/api";

  function getCountryName(code) {
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
            counts[metric.x] = Number(metric.y) || 0;
          }

          return counts;
        }, {});
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
          fill: "#e3ebf2",
          fillOpacity: 1,
          stroke: "#ffffff",
          strokeWidth: 0.7
        },
        hover: {
          fill: "#87a8c3",
          cursor: "pointer"
        },
        selected: {
          fill: "#416f98"
        }
      },
      onRegionTooltipShow: function (event, tooltip, code) {
        tooltip.text(
          tooltip.text() + " · " + formatVisitors(visitorCounts[code] || 0)
        );
      },
      onRegionClick: function (event, code) {
        if (!selection) {
          return;
        }

        selection.textContent =
          getCountryName(code) + " · " + formatVisitors(visitorCounts[code] || 0);
        selection.classList.add("is-visible");
      }
    };

    if (Object.keys(visitorCounts).length > 0) {
      options.visualizeData = {
        scale: ["#dce9f3", "#416f98"],
        values: visitorCounts
      };
    }

    new window.jsVectorMap(options);
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
