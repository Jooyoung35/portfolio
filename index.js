


  var typed = new Typed('#typed', {
    strings: ['Designer', 'Publisher', 'Developer', 'Creator'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });



//wrap-nav absolute > fixed
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

  
  //nav 활성화 효과(화면중앙에 가장 가까운섹션에 class 주기)  이 부분 다시 한번 볼것!
const sections = document.querySelectorAll("#intro, #about-me, #projects, #footer");
const navLinks = document.querySelectorAll(".title");

function onScroll() {
  let currentId = ''; //중앙에 있는 섹션의 id를 담기 위한 변수
  let minDistance = window.innerHeight; //가장 가까운 섹션을 찾기위해 기준이 되는 최소값 저장할 변수

  sections.forEach(section => {
    const rect = section.getBoundingClientRect(); //화면 내 위치정보
    const sectionCenter = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
    //섹션의 세로 중앙 좌표 / 2 - 화면의 세로 중앙좌표 / 2 , Math.abs = 두 중앙 사이의 거리
    
    if (sectionCenter < minDistance) { //이 섹션이 지금까지 본 것들 중에서 가장 화면 중앙에 가까우면, 가장 가까운 정보를 변수에 저장
      minDistance = sectionCenter;
      currentId = section.id;
    }
  });

  if (currentId) { //화면에 가까운 섹션이 있다면 link.getAttribute("href")가 현재 섹션  id와 같으면 클래스 붙여주기, 아니면 클래스 제거
    navLinks.forEach(link => {
      link.classList.toggle("on", link.getAttribute("href") === `#${currentId}`);
    });
  }
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);




// 모달창 (projects)

// 프로젝트 클릭 시 모달 열고, 해당 콘텐츠만 보여주기
document.addEventListener('click', function (e) {
  const project = e.target.closest('.project');

  if (project) {
    // modal 전체 열기
    document.querySelector('.modal').classList.add('active');

    // 모든 모달 콘텐츠 숨기기
    document.querySelectorAll('.modal-cont').forEach(item => {
      item.classList.remove('active');
    });

    // 클래스에서 'pantone', 'onsil' 등 추출
    const projectType = [...project.classList].find(cls => cls !== 'project');

    // 해당 콘텐츠만 보이게
    const targetModal = document.querySelector(`.m-${projectType}`);
    if (targetModal) {
      targetModal.classList.add('active');
    }
  }
});

// 닫기 버튼 누르면 모달 전체 닫고 콘텐츠도 숨김
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('active');
    document.querySelectorAll('.modal-cont').forEach(item => {
      item.classList.remove('active');
    });
  });
});