const shorts = [
  "mubZlAu9b8k","7AVt40ReBDA","lKZrVAuk85w","Bvv_XImMRDk","n1sOptthrRE",
  "h7uLAu6cVpo","gyFxrgD7z-c","kXIzPDkVkvE","NtiZNDfdIJY","SJbS450AtSo"
];

const shortsCarousel=document.querySelector("#shortsCarousel");
const shortsDots=document.querySelector("#shortsDots");

shorts.forEach((id,i)=>{
  const card=document.createElement("article");
  card.className="video-card";
  card.innerHTML=`
    <div class="video-shell">
      <iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1"
        title="Vídeo ${i+1}" loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="video-meta"><strong>VÍDEO ${i+1}</strong><span>${i+1} / 10</span></div>`;
  shortsCarousel.appendChild(card);
  const dot=document.createElement("button");
  dot.className="dot"+(i===0?" active":"");
  dot.setAttribute("aria-label",`Ir para vídeo ${i+1}`);
  dot.onclick=()=>card.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"});
  shortsDots.appendChild(dot);
});
const cards=[...shortsCarousel.children], dots=[...shortsDots.children];
new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const i=cards.indexOf(e.target);
      dots.forEach((d,n)=>d.classList.toggle("active",n===i));
    }
  });
},{root:shortsCarousel,threshold:.65}).observe(cards[0]);
cards.slice(1).forEach(c=>new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const i=cards.indexOf(e.target);
      dots.forEach((d,n)=>d.classList.toggle("active",n===i));
    }
  });
},{root:shortsCarousel,threshold:.65}).observe(c));

const imageCarousel=document.querySelector("#imageCarousel");
const imgCounter=document.querySelector("#imgCounter");
const imagePaths=Array.from({length:9},(_,i)=>`assets/images/slide-${String(i+1).padStart(2,"0")}.jpeg`);

imagePaths.forEach((src,i)=>{
  const slide=document.createElement("div");
  slide.className="image-slide";
  slide.innerHTML=`<img src="${src}" alt="Conteúdo do programa — slide ${i+1}" loading="${i===0?"eager":"lazy"}">`;
  imageCarousel.appendChild(slide);
});
function updateCounter(){
  const gap=15, width=imageCarousel.clientWidth+gap;
  const i=Math.round(imageCarousel.scrollLeft/width);
  imgCounter.textContent=`${Math.min(9,Math.max(1,i+1))} / 9`;
}
imageCarousel.addEventListener("scroll",updateCounter,{passive:true});
document.querySelector("#imgPrev").onclick=()=>imageCarousel.scrollBy({left:-(imageCarousel.clientWidth+15),behavior:"smooth"});
document.querySelector("#imgNext").onclick=()=>imageCarousel.scrollBy({left:imageCarousel.clientWidth+15,behavior:"smooth"});
