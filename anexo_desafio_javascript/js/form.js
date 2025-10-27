let contatoArr = [];

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

window.addEventListener('DOMContentLoaded', (event) => { // Garantir que o DOM esteja carregado
    const form = document.getElementById("formid");
    
    // --- INÍCIO DA LÓGICA DO PASSO 4 ---
    
    // 1. Selecionar os elementos
    const termsCheck = document.getElementById("terms");
    const submitButton = document.getElementById("submit-button");

    // 2. Desabilitar o botão por padrão
    submitButton.disabled = true;

    // 3. Adicionar um listener de evento 'change' ao checkbox
    termsCheck.addEventListener('change', function() {
        // Habilita o botão se o checkbox estiver marcado,
        // desabilita se não estiver.
        submitButton.disabled = !this.checked;
    });
    
    // --- FIM DA LÓGICA DO PASSO 4 ---


    form.addEventListener("submit", function(event) { // Adicionar listener de evento de submit
        event.preventDefault(); // Para prevenir o comportamento padrão
        
        let data = new contato(
            form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value,
            form.elements.namedItem("email").value,
            form.elements.namedItem("cpf").value,
            form.elements.namedItem("telefone").value,
            form.elements.namedItem("contato").value
        );
        
        contatoArr.push(data); // Adiciona o novo contato ao final do array
        
        console.log("Array de contatos foi atualizado:");
        console.log(contatoArr);

        if (data.nome !== "") {  // Verifica se o nome não está vazio
            alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
        }

        form.reset(); // Limpa os campos do formulário após o envio
        
        // --- ADIÇÃO AO PASSO 4 ---
        // 4. Desabilitar o botão novamente após o reset do formulário
        submitButton.disabled = true;
        // --- FIM DA ADIÇÃO ---
    });
});