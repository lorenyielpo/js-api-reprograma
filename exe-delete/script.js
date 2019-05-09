const app = document.getElementById('root')
const authors = document.createElement('div')
authors.setAttribute('class', 'authors')
app.appendChild(authors)


fetch('https://reqres.in/api/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        data.data.forEach((users) => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            card.setAttribute('id', users.id)

            let name = document.createElement('h2')
            name.innerHTML = `${users.first_name} ${users.last_name}`

            let email = document.createElement('p')
            email.innerHTML = users.email

            const btn = document.createElement('button')
            btn.setAttribute('class', 'button')
            btn.setAttribute('data-id', users.id)
            btn.innerHTML = '×'

            authors.appendChild(card)
            card.appendChild(name)
            card.appendChild(email)
            card.appendChild(btn)

            btn.addEventListener('click', () => {
                console.log(users.id)

                const thisCard = btn.parentElement;
                const cardPai = thisCard.parentElement;
                
                fetch('https://reqres.in/api/users', {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'id': btn.getAttribute('data-id')
                    })
                })
                    .then(() => {
                        cardPai.removeChild(thisCard)
                    })
                    .catch((erro) => {
                        console.log(erro)
                    })
            });
        })
    })
    .catch((erro) => {
        console.log(erro)
    })

