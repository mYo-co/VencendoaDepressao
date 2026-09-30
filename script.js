(() => {
  const slides = [...document.querySelectorAll('.story')];
  const count = document.getElementById('storyCount');
  const bar = document.querySelector('.progress i');
  let index = 0;
  const duration = 4600;
  function show(i){
    slides.forEach((s,n)=>s.classList.toggle('active',n===i));
    if(count) count.textContent = `${String(i+1).padStart(2,'0')} — 09`;
    if(bar){bar.style.transition='none';bar.style.width='0';requestAnimationFrame(()=>{requestAnimationFrame(()=>{bar.style.transition=`width ${duration}ms linear`;bar.style.width='100%'})})}
  }
  if(slides.length){show(0);setInterval(()=>{index=(index+1)%slides.length;show(index)},duration)}

  const reels = document.querySelector('.reels-track');
  if(reels){reels.addEventListener('wheel', e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){e.preventDefault();reels.scrollLeft += e.deltaY}}, {passive:false})}
})();
