// Future functionality can be added here
console.log("Welcome to My Blog!");

let currentSlide = 0;
const slides = document.querySelectorAll('.banner-image');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(index);
    });
});

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

showSlide(currentSlide); // Initial slide

document.getElementById('menuButton').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});

// 모드 토글 버튼
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

// LocalStorage에서 이전 설정을 가져옴
const currentMode = localStorage.getItem('mode') || 'light';
body.classList.add(`${currentMode}-mode`);

// 모드 변경
function toggleMode() {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        modeToggle.textContent = '☀️'; // 다크 모드에서 라이트 모드로
        localStorage.setItem('mode', 'dark'); // 다크 모드 저장
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        modeToggle.textContent = '🌙'; // 라이트 모드에서 다크 모드로
        localStorage.setItem('mode', 'light'); // 라이트 모드 저장
    }
}

// 초기 아이콘 설정
modeToggle.textContent = currentMode === 'dark' ? '☀️' : '🌙';

// 버튼 클릭 시 모드 전환
modeToggle.addEventListener('click', toggleMode);