/* =========================================================
   DEINE WEBSITE — Interaktionen & Motion
   ========================================================= */

(() => {
  "use strict";


  // Jahr im Footer automatisch aktuell halten
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();


  // Header erhält beim Scrollen eine kompaktere, transparente Fläche
  const header = document.querySelector(".site-header");
  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });


  // Menü öffnen/schließen; Escape und Navigation schließen das Overlay
  const menuButton = document.querySelector(".menu-toggle");
  const menuOverlay = document.querySelector(".menu-overlay");
  const menuLinks = menuOverlay?.querySelectorAll("a") ?? [];

  const setMenu = (open) => {
    if (!menuButton || !menuOverlay) return;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    menuOverlay.classList.toggle("is-open", open);
    menuOverlay.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("menu-open", open);
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });

  menuLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });


  // Scroll-Reveal mit IntersectionObserver statt dauernder Scroll-Berechnung
  const revealElements = document.querySelectorAll(".reveal, .hero-title");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (revealElements.length && "IntersectionObserver" in window && !reduceMotion) {
    document.documentElement.classList.add("js-ready");

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px"
    });

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }


  // Kleine Parallax-Bewegung des Hero-Hintergrunds auf Desktop
  const heroMedia = document.querySelector(".hero-media");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (heroMedia && canHover && !reduceMotion) {
    let pointerX = 0;
    let pointerY = 0;
    let scheduled = false;

    const moveHero = (event) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 10;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 10;
      if (scheduled) return;
      scheduled = true;

      window.requestAnimationFrame(() => {
        heroMedia.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) scale(1.025)`;
        scheduled = false;
      });
    };

    window.addEventListener("pointermove", moveHero, { passive: true });
    window.addEventListener("pointerleave", () => {
      heroMedia.style.transform = "translate3d(0, 0, 0) scale(1)";
    });
  }
})();
