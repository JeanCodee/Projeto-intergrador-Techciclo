document.addEventListener('DOMContentLoaded', () => {
    // Capturando os elementos estruturais
    const seletorTipo = document.getElementById('tipo');
    const blocoCondicao = document.getElementById('campo-produto');
    const blocoValores = document.getElementById('campo-valores');
    const inputCondicao = document.getElementById('condicao');
    const inputCategoria = document.getElementById('categoria');
    const inputValor = document.getElementById('valor');

    // Seletores visuais dos cards customizados
    const containerTipo = document.getElementById('containerSeletor');
    const botoesOpcao = document.querySelectorAll('.card-opcao');

    // Input de upload customizado
    const inputImagem = document.getElementById('imagem');
    const textoArquivo = document.getElementById('nome-arquivo');

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
        if (!seletorTipo || !inputCategoria) return;

        const tipoSelecionado = seletorTipo.value;
        inputCategoria.innerHTML = '';

        if (tipoSelecionado === 'servico') {
            if (blocoCondicao) blocoCondicao.style.display = 'none';
            if (inputCondicao) inputCondicao.removeAttribute('required');

            if (blocoValores) blocoValores.style.display = 'flex';
            if (inputValor) inputValor.setAttribute('required', 'true');

            categoriasServico.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria.value;
                option.textContent = categoria.text;
                inputCategoria.appendChild(option);
            });
        } else {
            if (blocoCondicao) blocoCondicao.style.display = 'flex';
            if (inputCondicao) inputCondicao.setAttribute('required', 'true');

            if (blocoValores) blocoValores.style.display = 'none';
            if (inputValor) inputValor.removeAttribute('required');

            categoriasProduto.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria.value;
                option.textContent = categoria.text;
                inputCategoria.appendChild(option);
            });
        }
    }

    // Configurando evento de clique manual nos botões
    botoesOpcao.forEach(botao => {
        botao.addEventListener('click', (e) => {
            e.preventDefault(); // Impede comportamento inesperado de envio do form

            // Remove a classe ativo de todos e adiciona no selecionado
            botoesOpcao.forEach(b => b.classList.remove('ativo'));
            botao.classList.add('ativo');

            const tipo = botao.getAttribute('data-tipo');
            
            // Atualiza o select oculto
            if (seletorTipo) {
                seletorTipo.value = tipo;
            }

            // Move a animação adicionando a classe correspondente ao container pai
            if (containerTipo) {
                if (tipo === 'servico') {
                    containerTipo.classList.add('servico-ativo');
                } else {
                    containerTipo.classList.remove('servico-ativo');
                }
            }

            // Atualiza os campos visíveis e as categorias
            mudarFormulario();
        });
    });

    // Escuta do upload customizado
    if (inputImagem && textoArquivo) {
        inputImagem.addEventListener('change', () => {
            if (inputImagem.files.length > 0) {
                textoArquivo.textContent = inputImagem.files[0].name;
                textoArquivo.style.color = '#1e293b';
            } else {
                textoArquivo.textContent = 'Selecionar imagem...';
                textoArquivo.style.color = '#64748b';
            }
        });
    }

    // Executa no carregamento inicial da página
    mudarFormulario();
});