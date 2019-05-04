let cep = document.getElementById('cep').value


fetch('https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback')
.then(function(response){
    return response.json()
})
.then(function(data){
    data.results.array.forEach(item => {
        const estado = document.getElementById('estado')
        estado.innerHTML = item.uf
    });
})
.then(function(erro){
    console.log(erro)
})   


    

