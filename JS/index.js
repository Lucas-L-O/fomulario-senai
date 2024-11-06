function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('complemento').value = ("");
    document.getElementById('numero').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    // document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('complemento').value = (conteudo.complemento);
        document.getElementById('numero').value = (conteudo.unidade);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
        // document.getElementById('ibge').value=(conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('complemento').value = "...";
            document.getElementById('numero').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            // document.getElementById('ibge').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}

function mascaraTelefone(input) {
    // Remove tudo o que não for número
    let valor = input.value.replace(/\D/g, '');
    
    // Adiciona a máscara
    if (valor.length <= 10) {
        valor = valor.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else {
        valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
    
    // Atualiza o valor do input com a máscara
    input.value = valor;
}

function mascaraCEP(input) {
    // Remove tudo o que não for número
    let valor = input.value.replace(/\D/g, '');
    
    // Aplica a máscara
    if (valor.length <= 5) {
        valor = valor.replace(/(\d{5})(\d{0,0})/, '$1-$2');
    } else {
        valor = valor.replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    
    // Atualiza o valor do input com a máscara
    input.value = valor;
}

    // Função que alterna entre o tema claro e escuro
    document.getElementById('toggle-theme').addEventListener('click', function() {
        // Alterna a classe 'dark-mode' no elemento <body>
        document.body.classList.toggle('dark-mode');
    
        // Salva a preferência do usuário no localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Verifica se o usuário tem uma preferência salva e aplica o tema
    window.addEventListener('load', function() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    document.getElementById('email').addEventListener('input', function () {
        const emailInput = this;
        const emailError = document.getElementById('email-error');
        
        // Regex simples para validação de email (não é 100% perfeita, mas é adequada para a maioria dos casos)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
        // Verifica se o email corresponde ao padrão
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = 'inline';  // Exibe a mensagem de erro
        } else {
            emailError.style.display = 'none';  // Esconde a mensagem de erro
        }
    });
    