document.addEventListener("DOMContentLoaded", () => {
  // Hero Title Animation
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.getAttribute('data-text');
    let i = 0;
    heroTitle.textContent = '';
    const typing = setInterval(() => {
      heroTitle.textContent += text.charAt(i);
      i++;
      if (i === text.length) clearInterval(typing);
    }, 60);
  }

  // Swipers
  new Swiper('.mySwiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 2000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {0:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4}}
  });

  new Swiper('.mySwiper2', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { el: '.mySwiper2 .swiper-pagination', clickable: true },
    breakpoints: {0:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4}}
  });
});

