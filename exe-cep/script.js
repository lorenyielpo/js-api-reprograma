const cep = document.getElementById('cep') //variável pega a tag input do cep
cep.addEventListener('change', ()=>{ //adiciona um escutador de evento na tag cep quando ela é alterada, executada a arrow function
    fetch(`https://viacep.com.br/ws/${cep.value}/json`) //http faz 3 requisão, melhor usar https faz apenas uma. O cep.value puxa o número digitado no input e envia o link com o cep que deseja buscar
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            document.getElementById('estado').value = data.uf
            document.getElementById('cidade').value = data.localidade
            document.getElementById('bairro').value = data.bairro
            document.getElementById('endereco').value = data.logradouro
        })
        .catch((erro) => {
            console.log(erro)
        })
})

