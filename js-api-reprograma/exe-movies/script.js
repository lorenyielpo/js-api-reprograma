const nameMovie = document.getElementById('movie')
const btn = document.querySelector('.btn-search-movie')
const gridMovies = document.querySelector('.movies')

btn.addEventListener('click', (evento)=>{
    evento.preventDefault()
    fetch(`http://www.omdbapi.com/?s=${nameMovie.value}&apikey=d24e194a`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        data.forEach((theMovie) => {
            
            const box = documet.createElement('div')
            box.setAttribute('class', 'box')
            box.setAttribute('data-id', theMovie.imdbID)

            const img = document.createElement('img')
            img.setAttribute('src', theMovie.Poster)

            const boxDivider = document.createElement('div')
            boxDivider.setAttribute('class', 'box-divider')

            const infoMovie = document.createElement('p')
            infoMovie.innerHTML = `<span>${theMovie.Title}</span> <span>${theMovie.Year}</span>`

            const typeMovie = document.createElement('p')
            typeMovie.innerHTML = `<span>${theMovie.Type}</span>`

            gridMovies.appendChild(box)
            box.appendChild(img)
            box.appendChild(boxDivider)
            boxDivider.appendChild(infoMovie)
            boxDivider.appendChild(typeMovie)
        })
    })
    .catch((erro) => {
        console.log(erro)
    })
})