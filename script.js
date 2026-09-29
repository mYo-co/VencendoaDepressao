const shortIds=[
"mubZlAu9b8k","7AVt40ReBDA","lKZrVAuk85w","Bvv_XImMRDk","n1sOptthrRE",
"h7uLAu6cVpo","gyFxrgD7z-c","kXIzPDkVkvE","NtiZNDfdIJY","SJbS450AtSo"
];

const feed=document.querySelector("#reelsFeed");
shortIds.forEach((id,i)=>{
  const article=document.createElement("article");
  article.className="reel";
  article.innerHTML=`
    <span class="reel-number">REEL ${String(i+1).padStart(2,"0")} / 10</span>
    <iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1"
      title="YouTube Short ${i+1}" loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>`;
  feed.appendChild(article);
});

// VSL: click poster -> full-screen player
const modal=document.querySelector("#videoModal");
const modalVideo=document.querySelector("#modalVideo");
const closeModal=()=>{
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  modalVideo.innerHTML="";
  document.body.style.overflow="";
};
document.querySelector(".video-poster").addEventListener("click",()=>{
  modalVideo.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/yY4QmsDhJ50?autoplay=1&rel=0&modestbranding=1&playsinline=1" title="VSL" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
});
document.querySelector(".modal-close").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

// Automatic story carousel
const track=document.querySelector("#storyTrack");
const count=document.querySelector("#storyCount");
const progress=document.querySelector("#storyProgress");
for(let i=1;i<=9;i++){
  const slide=document.createElement("div");
  slide.className="story-slide";
  slide.innerHTML=`<img src="assets/images/slide-${String(i).padStart(2,"0")}.jpeg" alt="Conteúdo do programa — ${i}" loading="${i===1?"eager":"lazy"}">`;
  track.appendChild(slide);
}
let current=0;
function goStory(i){
  current=i%9;
  track.style.transform=`translateX(-${current*100}%)`;
  count.textContent=`${String(current+1).padStart(2,"0")} / 09`;
  progress.style.width=`${((current+1)/9)*100}%`;
}
setInterval(()=>goStory(current+1),4200);
