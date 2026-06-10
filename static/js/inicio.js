let index = 0;
const track = document.querySelector('.carrossel-track');
const total = document.querySelectorAll('.action-box').length;

document.querySelector('.direita').addEventListener('click', () => {
    index++;
    if (index >= total) index = 0;
    atualizarCarrossel();
});

document.querySelector('.esquerda').addEventListener('click', () => {
    index--;
    if (index < 0) index = total - 1;
    atualizarCarrossel();
});

function atualizarCarrossel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const icon = darkModeToggle.querySelector('i');

// Verifica se o usuário já tinha ativado o dark mode antes
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('dark-mode', 'disabled');
    }
});

