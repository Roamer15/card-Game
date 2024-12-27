/* import './css/game.css'

document.querySelector('#game-container').innerHTML = `
    <div class="card-position">
    
    </div>
    <div classs="load-bar">
    
    </div>
`


function displayCards () {
    const cardContainer = document.querySelector('.card-position')
    for (let i=1; i<=8; i++){
        const card = document.createElement('div')
        card.classList.add('card')
        card.dataset.number = i
        cardContainer.appendChild(card)

        card.innerHTTML = `
          <img src="images/${i}.jpeg">
        `
    }
}

displayCards() */