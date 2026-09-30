(() => {
  const slides = [...document.querySelectorAll('.story-slide')];
  const progress = document.getElementById('storyProgress');
  let index = 0;
  const showSlide = (i) => {
    slides.forEach((s, n) => s.classList.toggle('active', n === i));
    if (progress) progress.style.width = `${((i + 1) / slides.length) * 100}%`;
  };
  if (slides.length) {
    showSlide(0);
    setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 4300);
  }

  // Allow touchpad/mouse-wheel users to move through the vertical Reels slider horizontally.
  const track = document.getElementById('reelsTrack');
  if (track) {
    track.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        track.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }, {passive:false});
  }
})();
