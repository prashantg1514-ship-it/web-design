// Single small, deliberate motion moment: the hero settles in on load.
// Everything else on the page is static — no scroll-triggered effects.
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-inner");
  if (!hero) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  hero.style.opacity = "0";
  hero.style.transform = "translateY(8px)";
  hero.style.transition = "opacity 0.6s ease, transform 0.6s ease";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    });
  });
});
