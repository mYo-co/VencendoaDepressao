const slides=[...document.querySelectorAll('.story-slide')];let index=0;const progress=document.querySelector('.story-progress');function nextSlide(){slides[index].classList.remove('active');index=(index+1)%slides.length;slides[index].classList.add('active');if(progress){progress.classList.remove('running');void progress.offsetWidth;progress.classList.add('running')}}if(progress)progress.classList.add('running');setInterval(nextSlide,4200);

// Keep embedded short-form videos vertical and let the horizontal rail feel like a reel viewer.
const rail=document.querySelector('.reels-track');if(rail){rail.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)&&window.innerWidth<900){e.preventDefault();rail.scrollLeft+=e.deltaY}}, {passive:false})}
