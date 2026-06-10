document.addEventListener('DOMContentLoaded', () => {
    const seletorTipo = document.getElementById('tipo');
    const blocoCondicao = document.getElementById('campo-produto');
    const blocoValores = document.getElementById('campo-valores');
    const inputCondicao = document.getElementById('condicao');
    const inputCategoria = document.getElementById('categoria');
    const inputValor = document.getElementById('valor');

    const categoriasServico = [
        { value: "instalacao", text: "Instalação e configuração" },
        { value: "manutencao", text: "Manutenção" },
        { value: "upgrade", text: "Upgrade" },
        { value: "software", text: "Software e otimização" }
    ];

    const categoriasProduto = [
        { value: "games", text: "Games" },
        { value: "computador", text: "Computador" },
        { value: "celular", text: "Celular" },
        { value: "acessorios", text: "Acessórios" }
    ];

    function mudarFormulario() {
        const tipoSelecionado = seletorTipo.value;

        inputCategoria.innerHTML = '';

        if (tipoSelecionado === 'servico') {
            blocoCondicao.style.display = 'none';
            inputCondicao.removeAttribute('required');

            blocoValores.style.display = 'flex';
            inputValor.setAttribute('required', 'true');

            categoriasServico.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria.value;
                option.textContent = categoria.text;
                inputCategoria.appendChild(option);
            });
        } else{
            
            blocoCondicao.style.display = 'flex';
            inputCondicao.setAttribute('required', 'true');

            blocoValores.style.display = 'none';
            inputValor.removeAttribute('required');

            categoriasProduto.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria.value;
                option.textContent = categoria.text;
                inputCategoria.appendChild(option);
            });
        }
    }

    seletorTipo.addEventListener('change', mudarFormulario);
    mudarFormulario();
});