(() => {
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  if (!nav || !toggle) return;

  const setOpen = (open) => {
    nav.dataset.open = open ? "true" : "false";
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  setOpen(false);

  toggle.addEventListener("click", () => {
    const open = nav.dataset.open === "true";
    setOpen(!open);
  });

  window.addEventListener("click", (e) => {
    if (e.target === toggle || toggle.contains(e.target)) return;
    if (e.target === nav || nav.contains(e.target)) return;
    setOpen(false);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
})();

