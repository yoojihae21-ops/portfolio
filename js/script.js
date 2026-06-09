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

