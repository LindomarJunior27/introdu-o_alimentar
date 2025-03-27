document.addEventListener('DOMContentLoaded', function() {
    const formAlimentos = document.getElementById('form-alimentos');
    const listaAlimentos = document.getElementById('lista-alimentos');

    formAlimentos.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

    function limparFormulario() {
       const formulario = document.getElementById('meuFormulario');
       formulario.reset(); // Reseta todos os campos do formulário
     }

        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const sexo = document.getElementById('sexo').value;
        const alimento = document.getElementById('alimento').value;
        const data = document.getElementById('data').value;
        const reacao = document.getElementById('reacao').value;

        // Cria um item na lista de alimentos
        const listItem = document.createElement('li');
        listItem.textContent = `Nome: ${nome}\n Idade: ${idade}\n Sexo: ${sexo} Alimento: ${alimento} \nData da introdução do alimento: ${data} \nReação: ${reacao}`;
        listItem.style.whiteSpace = 'pre-line';

        // Adiciona o item à lista
        listaAlimentos.appendChild(listItem);

        // Limpa o formulário
        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
        document.getElementById('sexo').value = '';
        document.getElementById('alimento').value = '';
        document.getElementById('data').value = '';
        document.getElementById('reacao').value = 'nenhuma';

        // Salvar dados:
        const alimentos = [
            { alimento: alimento, data: data, reacao: reacao}
        ];
  
        localStorage.setItem('alimentos', JSON.stringify(alimentos)); // Converte para string JSON
  
        // Recuperar dados:
        const alimentosSalvos = localStorage.getItem('alimentos');
        const alimentosRecuperados = JSON.parse(alimentosSalvos); // Converte de volta para objeto
  
        console.log(alimentosRecuperados);
    });
});