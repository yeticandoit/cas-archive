document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-toggle").forEach(btn => {
    btn.addEventListener("click", () => document.querySelector("nav").classList.toggle("open"));
  });

  document.querySelectorAll(".reveal").forEach(el => {
    const io = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), {threshold:.12});
    io.observe(el);
  });

  const grid = document.getElementById("featuredGrid");
  if (grid) {
    CAS_RELEASES.filter(r => r.type === "album").forEach(r => grid.appendChild(albumCard(r)));
  }

  const random = document.getElementById("randomBtn");
  if (random) random.addEventListener("click", () => {
    const t = ALL_TRACKS[Math.floor(Math.random() * ALL_TRACKS.length)];
    location.href = `music.html#${encodeURIComponent(t.title)}`;
  });
});

function albumCard(r) {
  const el = document.createElement("a");
  el.className = "album-card";
  el.href = `music.html#${encodeURIComponent(r.title)}`;
  el.innerHTML = `<div class="cover ${r.color}"><span>CAS</span><b>${r.title}</b></div><div class="album-meta"><strong>${r.title}</strong><span>${r.year} / ${r.type.toUpperCase()}</span></div>`;
  return el;
}
