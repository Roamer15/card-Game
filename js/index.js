const play = document.querySelector('.btn')
const learn = document.querySelector('.btn-mobile')

play.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = 'game.html'
  }, 1000)
})

learn.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = 'about.html'
  }, 1000)
})
