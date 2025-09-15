// Example: Fade in skill cards on scroll
const cards = document.querySelectorAll('.skill-card');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.2});
cards.forEach(c=>observer.observe(c));
