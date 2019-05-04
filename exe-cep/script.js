let cep = document.getElementById('cep') //variável pega a tag input do cep
cep.addEventListener('change', ()=>{ //adiciona um escutador de evento na tag cep quando ela é alterada, executada a arrow function
    fetch('https://viacep.com.br/ws/' + cep.value + '/json') //http faz 3 requisão, melhor usar https faz apenas uma. O cep.value puxa o número digitado no input e envia o link com o cep que deseja buscar
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            let estado = document.getElementById('estado').value = data.uf
            let cidade = document.getElementById('cidade').value = data.localidade
            let bairro = document.getElementById('bairro').value = data.bairro
            let endereco = document.getElementById('endereco').value = data.logradouro
        })
        .catch(function (erro) {
            console.log(erro)
        })
})

