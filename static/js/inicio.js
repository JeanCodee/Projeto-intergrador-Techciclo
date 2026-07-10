document.addEventListener("DOMContentLoaded", function() {

    // === LÓGICA DO CARROSSEL (RODA SEMPRE) ===
    let index = 0;
    const track = document.querySelector('.carrossel-track');
    const total = document.querySelectorAll('.action-box').length;
    
    // Seletores ajustados para bater com a classe múltipla do HTML
    const btnEsquerda = document.querySelector('.seta.esquerda');
    const btnDireita = document.querySelector('.seta.direita');

    // Só ativa os ouvintes de clique se a track e os botões existirem na tela
    if (track && btnEsquerda && btnDireita) { 
        
        btnDireita.addEventListener('click', () => {
            index++;
            if (index >= total) index = 0;
            atualizarCarrossel();
        });

        btnEsquerda.addEventListener('click', () => {
            index--;
            if (index < 0) index = total - 1;
            atualizarCarrossel();
        });

        function atualizarCarrossel() {
            track.style.transform = `translateX(-${index * 100}%)`;
        }
    } else {
        console.warn("Componentes do carrossel não foram encontrados no HTML.");
    }

    // === LÓGICA DO DARK MODE (PROTEGIDA - BUSCA NA BASE) ===
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');

        // Verifica estado salvo no navegador
        if (localStorage.getItem('dark-mode') === 'enabled') {
            body.classList.add('dark-mode');
            if (icon) icon.classList.replace('fa-moon', 'fa-sun');
        }

        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        
            if (body.classList.contains('dark-mode')) {
                if (icon) icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('dark-mode', 'enabled');
            } else {
                if (icon) icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('dark-mode', 'disabled');
            }
        });
    }
});

const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        // Liga/Desliga a classe 'active' que mostra o menu
        navLinks.classList.toggle("active");
    });