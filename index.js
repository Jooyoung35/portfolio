


  var typed = new Typed('#typed', {
    strings: ['Designer', 'Publisher', 'Developer', 'Creator'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });



//wrap-nav 위치
window.addEventListener('scroll', () => {
    const section = document.getElementById('section');
    const wrapNav = document.querySelector('.wrap-nav');

    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= 0) {
      wrapNav.style.position = 'fixed';
    } else {
      wrapNav.style.position = 'absolute';
    }
  });

  
  //nav 활성화 효과  이 부분 다시 한번 볼것!
const sections = document.querySelectorAll("#intro, #about-me, #projects, #footer"); // 감지할 섹션들
const navLinks = document.querySelectorAll(".wrap-nav .nav .title");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle("on", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}, {
  threshold: 0.4 // 섹션의 50%가 보이면 적용
});

sections.forEach(section => observer.observe(section));
  
