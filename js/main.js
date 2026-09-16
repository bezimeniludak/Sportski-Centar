(function () {
  "use strict";

  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var hero = document.querySelector(".hero");

  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 24);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        document.body.classList.remove("nav-open");
      });
    });
  }

  if (hero) {
    var ticking = false;
    hero.addEventListener("mousemove", function (e) {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var r = hero.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width;
        var y = (e.clientY - r.top) / r.height;
        hero.style.setProperty("--mx", x.toFixed(4));
        hero.style.setProperty("--my", y.toFixed(4));
        ticking = false;
      });
    });
    hero.addEventListener("mouseleave", function () {
      hero.style.setProperty("--mx", "0.5");
      hero.style.setProperty("--my", "0.42");
    });
  }

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  var lb = document.querySelector(".lightbox");
  var lbImg = lb ? lb.querySelector("img") : null;
  document.querySelectorAll("[data-lightbox]").forEach(function (el) {
    el.addEventListener("click", function () {
      if (!lb || !lbImg) return;
      var src = el.getAttribute("data-lightbox") || (el.querySelector("img") && el.querySelector("img").src);
      if (!src) return;
      lbImg.src = src;
      lb.classList.add("open");
    });
  });
  if (lb) {
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.closest("button")) lb.classList.remove("open");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") lb.classList.remove("open");
    });
  }

  var form = document.querySelector("form.form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = form.querySelector(".form-ok");
      form.reset();
      if (ok) {
        ok.style.display = "block";
        setTimeout(function () { ok.style.display = "none"; }, 4200);
      }
    });
  }

  if (!window.SCB) return;

  function fillToday() {
    var box = document.querySelector("#today-list");
    if (!box) return;
    var now = new Date();
    var day = now.getDay();
    var dayMeta = SCB.DAYS[day];
    var dateEl = document.querySelector("#today-label");
    if (dateEl) {
      var fmt = now.toLocaleDateString("sr-Latn-RS", {
        weekday: "long",
        day: "numeric",
        month: "long"
      });
      dateEl.textContent = fmt;
    }
    var nameEl = document.querySelector("#today-name");
    if (nameEl) nameEl.textContent = dayMeta.name;
    var events = SCB.eventsForDay(day);
    if (!events.length) {
      box.innerHTML = '<p class="empty-note">Danas nema zakazanih javnih termina.</p>';
      return;
    }
    box.innerHTML = events.map(function (ev, i) {
      return SCB.renderEventRow(ev, false).replace(
        "style=\"--c:",
        "style=\"animation-delay:" + (i * 0.06) + "s;--c:"
      );
    }).join("");
  }

  function fillWeek() {
    var root = document.querySelector("#week-schedule");
    if (!root) return;
    var tabs = root.querySelector(".week-tabs");
    var panels = root.querySelector(".week-panels");
    var today = new Date().getDay();
    var order = [1, 2, 3, 4, 5, 6, 0];
    var activeFilter = "all";

    tabs.innerHTML = order.map(function (id) {
      var d = SCB.DAYS[id];
      var isToday = id === today;
      return '<button type="button" data-day="' + id + '" class="' + (isToday ? "active" : "") + '">' +
        d.short + (isToday ? " · danas" : "") + "</button>";
    }).join("");

    function drawPanels() {
      panels.innerHTML = order.map(function (id) {
        var list = SCB.eventsForDay(id).filter(function (ev) {
          return activeFilter === "all" || ev.sport === activeFilter;
        });
        var body = list.length
          ? list.map(function (ev) { return SCB.renderEventRow(ev, true); }).join("")
          : '<p class="empty-note">Nema termina za izabrani sport ovog dana.</p>';
        return '<div class="week-panel' + (id === today ? " active" : "") + '" data-day="' + id + '">' +
          '<div class="schedule-list">' + body + "</div></div>";
      }).join("");
    }

    drawPanels();

    tabs.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      tabs.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var id = btn.getAttribute("data-day");
      panels.querySelectorAll(".week-panel").forEach(function (p) {
        p.classList.toggle("active", p.getAttribute("data-day") === id);
      });
    });

    var filters = document.querySelector("#sport-filters");
    if (filters) {
      var used = {};
      SCB.EVENTS.forEach(function (e) { used[e.sport] = true; });
      var buttons = '<button type="button" data-sport="all" class="active">Sve</button>';
      Object.keys(SCB.SPORTS).forEach(function (key) {
        if (!used[key]) return;
        buttons += '<button type="button" data-sport="' + key + '">' + SCB.SPORTS[key].label + "</button>";
      });
      filters.innerHTML = buttons;
      filters.addEventListener("click", function (e) {
        var btn = e.target.closest("button");
        if (!btn) return;
        filters.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        activeFilter = btn.getAttribute("data-sport");
        var current = tabs.querySelector("button.active");
        var currentDay = current ? current.getAttribute("data-day") : String(today);
        drawPanels();
        panels.querySelectorAll(".week-panel").forEach(function (p) {
          p.classList.toggle("active", p.getAttribute("data-day") === currentDay);
        });
      });
    }
  }

  fillToday();
  fillWeek();
})();
