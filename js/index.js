const play = document.querySelector('.btn')
const learn = document.querySelector('.btn-mobile')

play.addEventListener('click', () => {
    window.location.href = 'game.html'
})

learn.addEventListener('click', () => {
    window.location.href = 'about.html'
})