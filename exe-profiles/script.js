const app = document.getElementById('root')
const h1 = document.createElement('h1')
h1.innerHTML = 'Colaboradores'
const container = document.createElement('div')
container.setAttribute('class', 'authors')

app.appendChild(h1)
app.appendChild(container)

const request = new XMLHttpRequest()

request.open('GET', 'https://randomuser.me/api/?results=10', true)

request.onload = function() {
    const data = JSON.parse(this.response)
    
    console.log(data);
    if(request.status >= 200 && request.status < 400){
        console.log('SUCESSO!!!')
        data.results.forEach(item => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const image = document.createElement('img')
            image.setAttribute('src', item.picture.large)

            const name = document.createElement('h2')
            name.innerHTML = `${item.name.first} ${item.name.last}`

            const local = document.createElement('h3')
            local.innerHTML = `${item.location.city}, ${item.nat}`

            const email = document.createElement('p')
            email.innerHTML = item.email

            const phone = document.createElement('p')
            phone.innerHTML = item.phone
            
            container.appendChild(card)
            card.appendChild(image)
            card.appendChild(name)
            card.appendChild(local)
            card.appendChild(email)
            card.appendChild(phone)
          });
    }else{
        console.log('erro :C')
    };
}

request.send();