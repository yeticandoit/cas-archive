const releaseList = document.getElementById("releaseList");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const audio = document.getElementById("audio");
const player = document.getElementById("player");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const playerTitle = document.getElementById("playerTitle");
const playerRelease = document.getElementById("playerRelease");
const playerArt = document.getElementById("playerArt");
let queue = [], queueIndex = -1, objectUrls = [];

function renderMusic() {
  const q = (searchInput.value || "").toLowerCase().trim();
  const filter = filterSelect.value;
  releaseList.innerHTML = "";
  CAS_RELEASES.filter(r => (filter === "all" || r.type === filter) && (!q || r.title.toLowerCase().includes(q) || r.tracks.some(t => t.toLowerCase().includes(q))))
    .forEach(r => {
      const section = document.createElement("article");
      section.className = "release";
      section.id = r.title;
      section.innerHTML = `<div class="release-cover cover ${r.color}"><span>CAS</span><b>${r.title}</b></div>
        <div class="release-body"><div class="release-top"><div><p class="eyebrow">${r.year} / ${r.type}</p><h2>${r.title}</h2></div><a href="${r.official}" target="_blank" rel="noopener">OFFICIAL ↗</a></div>
        <ol class="tracklist">${r.tracks.map((t,i)=>`<li><button class="track-play" data-release="${escapeAttr(r.title)}" data-track="${escapeAttr(t)}" data-index="${i}"><span>${String(i+1).padStart(2,"0")}</span><strong>${t}</strong><em>PLAY</em></button></li>`).join("")}</ol></div>`;
      releaseList.appendChild(section);
    });
  document.querySelectorAll(".track-play").forEach(b => b.addEventListener("click", () => {
    const release = b.dataset.release, title = b.dataset.track;
    const tracks = CAS_RELEASES.find(x => x.title === release).tracks;
    queue = tracks.map(t => ({title:t, release, color:CAS_RELEASES.find(x=>x.title===release).color}));
    queueIndex = tracks.indexOf(title);
    loadQueueItem();
  }));
}
function escapeAttr(s){return s.replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;").replaceAll(">","&gt;");}
function loadQueueItem() {
  const item = queue[queueIndex]; if (!item) return;
  player.classList.remove("hidden"); playerTitle.textContent=item.title; playerRelease.textContent=item.release;
  playerArt.className=`player-art cover ${item.color}`; playerArt.textContent="CAS";
  const local = window.CAS_LOCAL_AUDIO?.[item.title];
  if (local) { audio.src=local; audio.play().catch(()=>{}); playBtn.textContent="❚❚"; } else { audio.removeAttribute("src"); playBtn.textContent="▶"; }
}
playBtn.addEventListener("click",()=>{ if(!audio.src){alert("Add your own licensed/local audio files with the ＋ Audio button first.");return;} if(audio.paused){audio.play();playBtn.textContent="❚❚"}else{audio.pause();playBtn.textContent="▶"}});
document.getElementById("prevBtn").addEventListener("click",()=>{if(queue.length){queueIndex=(queueIndex-1+queue.length)%queue.length;loadQueueItem()}});
document.getElementById("nextBtn").addEventListener("click",()=>{if(queue.length){queueIndex=(queueIndex+1)%queue.length;loadQueueItem()}});
audio.addEventListener("timeupdate",()=>{progress.value=audio.duration?(audio.currentTime/audio.duration*100):0;currentTime.textContent=fmt(audio.currentTime)});
audio.addEventListener("loadedmetadata",()=>duration.textContent=fmt(audio.duration));
audio.addEventListener("ended",()=>{if(queue.length){queueIndex=(queueIndex+1)%queue.length;loadQueueItem()}});
progress.addEventListener("input",()=>{if(audio.duration)audio.currentTime=progress.value/100*audio.duration});
function fmt(s){if(!Number.isFinite(s))return"0:00";return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`}

document.getElementById("audioInput").addEventListener("change", e => {
  window.CAS_LOCAL_AUDIO = {};
  objectUrls.forEach(URL.revokeObjectURL); objectUrls=[];
  [...e.target.files].forEach(file=>{
    const key=file.name.replace(/\.[^.]+$/,"").trim().toLowerCase();
    const match=ALL_TRACKS.find(t=>t.title.toLowerCase()===key);
    const url=URL.createObjectURL(file); objectUrls.push(url);
    if(match) window.CAS_LOCAL_AUDIO[match.title]=url;
  });
  alert("Local audio library loaded. File names should match song titles, e.g. “Apocalypse.mp3”.");
});
searchInput.addEventListener("input",renderMusic); filterSelect.addEventListener("change",renderMusic);
renderMusic();
const hash=decodeURIComponent(location.hash.slice(1)); if(hash){setTimeout(()=>document.getElementById(hash)?.scrollIntoView({behavior:"smooth",block:"start"}),150)}
