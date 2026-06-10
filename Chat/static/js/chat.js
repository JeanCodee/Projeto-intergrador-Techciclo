document.addEventListener('DOMContentLoaded', function() {
    const inputMensagem = document.querySelector('.input-mensagem');
    const botaoEnviar = document.querySelector('.botao-enviar');
    const chatMain = document.querySelector('.chat-main');
    const contatos = document.querySelectorAll('.conversa-produto');


    function enviarMensagem() {
        const texto = inputMensagem.value.trim();
        if (texto === '') return;

        const novaMensagem = document.createElement('div');
        novaMensagem.classList.add('mensagem', 'enviada');
        novaMensagem.textContent = texto;
        chatMain.appendChild(novaMensagem);
        inputMensagem.value = '';
        inputMensagem.focus();

        scrollParaBaixo();
    }

    botaoEnviar.addEventListener('click', enviarMensagem);
    inputMensagem.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            enviarMensagem();
        }
    });

    contatos.forEach(contato => {
        contato.addEventListener('click', (event) => {
            event.preventDefault();

            contatos.forEach(c => c.classList.remove('ativa'));
            contato.classList.add('ativa');
        });
    })


    function scrollParaBaixo() {
        chatMain.scrollTop = chatMain.scrollHeight;
    }  
});

document.addEventListener('DOMContentLoaded', function() {

    const contatos = document.querySelectorAll('.conversa-produto');
    const chatPage = document.querySelector('.chat-page');
    const botaoVoltar = document.querySelector('.voltar-pagina'); 
    const botaoVoltarChat = document.querySelector('.voltar-chat');

    contatos.forEach(contato => {
        contato.addEventListener('click', (event) => {
            event.preventDefault();
            contatos.forEach(c => c.classList.remove('ativa'));
            contato.classList.add('ativa');
            chatPage.classList.add('exibir-conversa');
        });
    });

    botaoVoltar.addEventListener('click', () => {
        chatPage.classList.remove('exibir-conversa');
    });
    botaoVoltarChat.addEventListener('click', () => {
        chatPage.classList.remove('exibir-conversa');
    });
});
