const faces = ['🍎', '🍌', '🍇', '🍓', '🍒', '🍍', '🥝', '🍑']
const cards = [...faces, ...faces] // Duplicate the faces to create pairs
let flippedCards = []
let matchedCount = 0

// Shuffle the cards
cards.sort(() => 0.5 - Math.random())

const gameContainer = document.getElementById('gameContainer')
const message = document.getElementById('message')

// Create card elements
cards.forEach((face, index) => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.dataset.face = face
  card.innerHTML = '?' // Hidden face
  card.addEventListener('click', () => flipCard(card))
  gameContainer.appendChild(card)
})

function flipCard (card) {
  if (card.classList.contains('flipped') || flippedCards.length === 2) {
    return
  }

  card.classList.add('flipped')
  card.innerHTML = card.dataset.face
  flippedCards.push(card)

  if (flippedCards.length === 2) {
    checkMatch()
  }
}

function checkMatch () {
  const [card1, card2] = flippedCards

  if (card1.dataset.face === card2.dataset.face) {
    matchedCount += 2
    flippedCards = []

    if (matchedCount === cards.length) {
      message.textContent = 'Congratulations! You matched all the cards! 🎉 Thanks for playing!'
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped')
      card2.classList.remove('flipped')
      card1.innerHTML = '?'
      card2.innerHTML = '?'
      flippedCards = []
    }, 1000)
  }
}