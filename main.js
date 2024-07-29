document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    const nomeInput = document.getElementById('nome');
    const telefoneInput = document.getElementById('telefone');
    const tabelaContatos = document.getElementById('tabela-contatos');
    const totalNumeros = document.getElementById('total-números');

    let contatos = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = nomeInput.value.trim();
        const telefone = telefoneInput.value.trim();

        if (nome && telefone) {
            contatos.push({ nome, telefone });
            atualizarTabela();
            nomeInput.value = '';
            telefoneInput.value = '';
        }
    });

    function atualizarTabela() {
        tabelaContatos.innerHTML = '';
        contatos.forEach((contato, index) => {
            const row = document.createElement('tr');
            const nomeCell = document.createElement('td');
            const telefoneCell = document.createElement('td');

            nomeCell.textContent = contato.nome;
            telefoneCell.textContent = contato.telefone;

            row.appendChild(nomeCell);
            row.appendChild(telefoneCell);
            tabelaContatos.appendChild(row);
        });
        totalNumeros.textContent = contatos.length;
    }
});
