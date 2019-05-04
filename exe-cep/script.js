let cepApi = document.getElementById('cep').addEventListener('mouseout', () => {
    let cep = document.getElementById('cep')
    fetch('http://viacep.com.br/ws/'+ cep.value + '/json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let estado = document.getElementById('estado').value = data.uf
        let cidade = document.getElementById('cidade').value = data.localidade
        let bairro = document.getElementById('bairro').value = data.bairro
        let endereco = document.getElementById('endereco').value = data.logradouro
    })
    .catch(function(erro){
        console.log(erro)    
    })
})



    

    

