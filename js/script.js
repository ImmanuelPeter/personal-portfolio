/* ==========================================================================
   Immanuel Gondwe — Portfolio interactions
   Vanilla JavaScript: navigation, typing effect, scroll reveals,
   animated skill bars, back-to-top.
   ========================================================================== */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var header = document.querySelector(".site-header");
  var nav = document.getElementById("site-nav");
  var navToggle = document.querySelector(".nav-toggle");
  var toTop = document.querySelector(".to-top");

  /* ---------- 1. Sticky header state ---------- */
  function onScroll() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    }
    if (toTop) {
      toTop.classList.toggle("is-visible", window.scrollY > 520);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 2. Mobile navigation ---------- */
  function closeNav() {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (nav && navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || navToggle.contains(event.target)) return;
      closeNav();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) closeNav();
    });
  }

  /* ---------- 3. Typing effect ---------- */
  function sleep(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  async function typePhrases(element) {
    var phrases = (element.dataset.phrases || "")
      .split("|")
      .map(function (phrase) {
        return phrase.trim();
      })
      .filter(Boolean);

    if (!phrases.length) return;

    element.textContent = phrases[0];

    if (reduceMotion) return;

    var index = 0;

    while (true) {
      var phrase = phrases[index];

      for (var i = 1; i <= phrase.length; i++) {
        element.textContent = phrase.slice(0, i);
        await sleep(58);
      }

      await sleep(1600);

      for (var j = phrase.length; j >= 0; j--) {
        element.textContent = phrase.slice(0, j);
        await sleep(26);
      }

      await sleep(320);
      index = (index + 1) % phrases.length;
    }
  }

  document.querySelectorAll("[data-phrases]").forEach(function (element) {
    typePhrases(element);
  });

  /* ---------- 4. Scroll reveal ---------- */
  var revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    revealItems.forEach(function (item) {
      if (item.dataset.delay) {
        item.style.setProperty("--delay", item.dataset.delay + "ms");
      }
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  /* ---------- 5. Animated skill bars ---------- */
  var skillGroups = document.querySelectorAll(".skill-bars");

  skillGroups.forEach(function (group) {
    group.querySelectorAll(".skill-row").forEach(function (row) {
      var fill = row.querySelector(".skill-fill");
      var level = row.dataset.level || "0";
      if (fill) fill.style.setProperty("--level", level + "%");
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      group.classList.add("is-filled");
      return;
    }

    var skillObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          group.classList.add("is-filled");
          skillObserver.unobserve(group);
        });
      },
      { threshold: 0.3 }
    );

    skillObserver.observe(group);
  });

  /* ---------- 6. Back to top ---------- */
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- 7. Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });
})();
