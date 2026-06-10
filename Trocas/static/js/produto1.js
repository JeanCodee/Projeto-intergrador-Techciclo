document.addEventListener('DOMContentLoaded', () => {

    const btnSolicitarTroca = document.querySelector('.btn-trocar');
    const modalTroca = document.getElementById('modal-troca');
    const btnFecharModal = document.getElementById('close-modal');
    const formTroca = document.getElementById('form-solicitar-troca');


    btnSolicitarTroca.addEventListener('click', () => {
        modalTroca.classList.add('mostrar');
    });


    btnFecharModal.addEventListener('click', () => {
        modalTroca.classList.remove('mostrar');
    });

    modalTroca.addEventListener('click', (event) => {
        if (event.target === modalTroca) {
            modalTroca.classList.remove('mostrar');
        }
    });

    formTroca.addEventListener('submit', (event) => {
        event.preventDefault();

        const itemSelecionado = document.querySelector('input[name="produto-troca"]:checked').value;
        
        alert(`Proposta enviada com sucesso! Você ofereceu o item (${itemSelecionado}) para a troca.`);
        
        modalTroca.classList.remove('mostrar');
    });
});