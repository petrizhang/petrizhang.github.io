(function () {
  "use strict";

  var badges = document.querySelectorAll("[data-github-stars]");

  Array.prototype.forEach.call(badges, function (badge) {
    var repository = badge.getAttribute("data-github-stars");
    var count = badge.querySelector("[data-github-stars-count]");

    if (!repository || !count || typeof window.fetch !== "function") {
      return;
    }

    window
      .fetch("https://api.github.com/repos/" + repository, {
        headers: { Accept: "application/vnd.github+json" }
      })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Unable to load GitHub stars.");
        }

        return response.json();
      })
      .then(function (data) {
        if (typeof data.stargazers_count !== "number") {
          return;
        }

        var stars = data.stargazers_count.toLocaleString("en-US");
        count.textContent = stars;
        badge.setAttribute(
          "aria-label",
          stars + " GitHub stars for ParqDB (opens in a new tab)"
        );
      })
      .catch(function () {
        // Keep the server-rendered count if GitHub is temporarily unavailable.
      });
  });
})();
