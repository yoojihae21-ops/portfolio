const bars = document.querySelectorAll('.fill');

function check() {
    bars.forEach(bar => {
        const rect = bar.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            bar.style.width = bar.dataset.percent + '%';
        }
    });
}

window.addEventListener('scroll', check);
window.addEventListener('load', check);

const box = document.querySelector('.wrap_box');

window.addEventListener('scroll', () => {
    const rect = box.getBoundingClientRect();
    const progress = Math.min(Math.max((window.innerHeight - rect.top) / window.innerHeight, 0), 1);

    box.style.width = `${420 + (1150 - 420) * progress}px`;

    // 원(50%) → 완전 pill(999px)
    const radius = 50 + (999 - 50) * progress;
    box.style.borderRadius = `${radius}px`;
});

window.addEventListener('scroll', () => {
    const sec2 = document.querySelector('.about_me');
    const top = sec2.getBoundingClientRect().top;

    if (top < window.innerHeight + 100) {
        sec2.classList.add('active');
    }
});



const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');
let index = 0;

function moveSlide(i) {
    index = i;

    const slideWidth = slides[0].offsetWidth + 40;
    track.style.transform = `translateX(-${i * slideWidth}px)`;
}

// 버튼 연결
document.querySelector('.next').addEventListener('click', () => {
    if (index < slides.length - 1) moveSlide(index + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    if (index > 0) moveSlide(index - 1);
});

// 터치
let startX = 0;

track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

track.addEventListener('touchend', e => {
    let diff = startX - e.changedTouches[0].clientX;

    if (diff > 50 && index < slides.length - 1) moveSlide(index + 1);
    else if (diff < -50 && index > 0) moveSlide(index - 1);
});

