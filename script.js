const shorts = [
  "mubZlAu9b8k","7AVt40ReBDA","lKZrVAuk85w","Bvv_XImMRDk","n1sOptthrRE",
  "h7uLAu6cVpo","gyFxrgD7z-c","kXIzPDkVkvE","NtiZNDfdIJY","SJbS450AtSo"
];

const shortsCarousel = document.querySelector("#shortsCarousel");
const shortsDots = document.querySelector("#shortsDots");

shorts.forEach((id, i) => {
  const card = document.createElement("article");
  card.className = "video-card";
  card.innerHTML = `
    <div class="video-shell">
      <iframe
        src="https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1"
        title="Vídeo ${i + 1}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="video-meta"><strong>Vídeo ${i + 1}</strong><span>${i + 1} / 10</span></div>
  `;
  shortsCarousel.appendChild(card);

  const dot = document.createElement("button");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.setAttribute("aria-label", `Ir para vídeo ${i + 1}`);
  dot.addEventListener("click", () => card.scrollIntoView({behavior:"smooth", inline:"center", block:"nearest"}));
  shortsDots.appendChild(dot);
});

const cards = [...shortsCarousel.children];
const dots = [...shortsDots.children];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = cards.indexOf(entry.target);
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
    }
  });
}, {root: shortsCarousel, threshold: .65});

cards.forEach(c => observer.observe(c));

/* Uploaded slides: assets/images/slide-01.jpeg ... slide-09.jpeg */
const imageCarousel = document.querySelector("#imageCarousel");
const imgCounter = document.querySelector("#imgCounter");
const imagePaths = Array.from({length:9}, (_, i) => `assets/images/slide-${String(i+1).padStart(2,"0")}.jpeg`);

imagePaths.forEach((src, i) => {
  const slide = document.createElement("div");
  slide.className = "image-slide placeholder";
  slide.innerHTML = `
    <img src="${src}" alt="Conteúdo do programa — slide ${i+1}" loading="${i === 0 ? "eager" : "lazy"}"
      onload="this.parentElement.classList.remove('placeholder')"
      onerror="this.remove()">
    <div>
      <strong>SLIDE ${i+1}</strong><br>
      <small>Imagem será adicionada aqui.</small>
    </div>
  `;
  imageCarousel.appendChild(slide);
});

const updateCounter = () => {
  const width = imageCarousel.clientWidth + 14;
  const index = Math.round(imageCarousel.scrollLeft / width);
  imgCounter.textContent = `${Math.min(9, Math.max(1,index+1))} / 9`;
};
imageCarousel.addEventListener("scroll", updateCounter, {passive:true});
document.querySelector("#imgPrev").addEventListener("click", () => imageCarousel.scrollBy({left: -(imageCarousel.clientWidth + 14), behavior:"smooth"}));
document.querySelector("#imgNext").addEventListener("click", () => imageCarousel.scrollBy({left: imageCarousel.clientWidth + 14, behavior:"smooth"}));

