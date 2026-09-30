(() => {
  const slides = [...document.querySelectorAll('.story-slide')];
  const progress = document.getElementById('storyProgress');
  let index = 0;
  function showSlide(i){
    slides.forEach((s,n)=>s.classList.toggle('active',n===i));
    if(progress) progress.style.width = `${((i+1)/slides.length)*100}%`;
  }
  if(slides.length){ showSlide(0); setInterval(()=>{index=(index+1)%slides.length;showSlide(index)},4300); }

  const track=document.getElementById('reelsTrack');
  if(track) track.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){track.scrollLeft+=e.deltaY;e.preventDefault()}},{passive:false});

  const panel=document.getElementById('indexPanel'), open=document.getElementById('indexTrigger'), close=document.getElementById('indexClose');
  function setPanel(on){panel.classList.toggle('open',on);panel.setAttribute('aria-hidden',String(!on));open.setAttribute('aria-expanded',String(on));document.body.style.overflow=on?'hidden':'';}
  open?.addEventListener('click',()=>setPanel(true));
  close?.addEventListener('click',()=>setPanel(false));
  panel?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setPanel(false)));
})();
