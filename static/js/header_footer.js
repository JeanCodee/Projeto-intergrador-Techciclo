// Usamos o objeto 'window' explicitamente para garantir que o HTML do Django 
// sempre encontre as funções chamadas via 'onclick'
window.responderTroca = function(id, acao) {
    alert(`Você ${acao} a proposta de troca #${id}`);

    const notificacao = document.querySelector(`.notification-item[data-id="${id}"]`);
    if (notificacao) {
        notificacao.remove();
        atualizarBadge();
    }
};

function atualizarBadge() {
    const badge = document.getElementById('notificationBadge');
    const itensRestantes = document.querySelectorAll('.notification-item').length;

    if (badge) {
        if (itensRestantes > 0) {
            badge.innerText = itensRestantes;
            badge.style.display = 'block'; // Garante que ele apareça se tiver itens
        } else {
            // Em vez de .remove(), usamos display = 'none'. 
            // Assim o elemento continua existindo no DOM para futuras atualizações.
            badge.style.display = 'none'; 
            
            const notificationBody = document.getElementById('notificationBody');
            if (notificationBody) {
                notificationBody.innerHTML = '<p style="padding: 20px; text-align:center; opacity: 0.6;">Nenhuma notificação por aqui.</p>';
            }
        }
    }
}

// Lógica de abrir e fechar o Dropdown do Sino
document.addEventListener('DOMContentLoaded', function() {
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationDropdown = document.getElementById('notificationDropdown');

    if (notificationBtn && notificationDropdown) {
        // Evento para abrir/fechar ao clicar no sino
        notificationBtn.addEventListener('click', function(e) {
            e.stopPropagation(); 
            notificationDropdown.classList.toggle('active');
        });

        // Evento global para fechar se clicar em qualquer outro lugar da tela
        document.addEventListener('click', function(e) {
            if (!notificationBtn.contains(e.target)) {
                notificationDropdown.classList.remove('active');
            }
        });
    }
});