let sticker = document.getElementById('sticker')
const btn = document.querySelector('.btn-search-sticker')
const stickerGiphy = document.querySelector('.stickers')


btn.addEventListener('click', (evento) => {
    evento.preventDefault()
    fetch(`https://api.giphy.com/v1/stickers/search?q=${sticker.value}&api_key=QUk1C6kBUlITMlUZ6FLs7VAGJkz55YIy`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            data.data.forEach((giphy) => {
                
                const box = document.createElement('div')
                box.setAttribute('class', 'box')
                box.setAttribute('data-id', giphy.id)
                
                const stick = document.createElement('img')
                stick.setAttribute('src', giphy.images.downsized.url)


                stickerGiphy.appendChild(box)
                box.appendChild(stick)

                btn.addEventListener('click', () => {
                    box.remove()
                })
            })
        })
        .catch((erro) => {
            console.log(erro)
        })
})
