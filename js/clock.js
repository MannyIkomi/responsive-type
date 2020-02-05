const controls = document.querySelectorAll('.control')
const plays = document.querySelectorAll('.plays')

const clock = document.getElementById('clock')

const poster = document.getElementById('futura')

console.log(poster)
console.log(clock)
console.log(plays)
console.log(controls)

// controls.forEach(control =>
//   control.addEventListener('click', e => {
//     console.log(e)
//     plays.forEach(playing => playing.classList.toggle('paused'))
//   })
// )

poster.addEventListener('click', e => {
  plays.forEach(playing => playing.classList.toggle('paused'))
})

// pause.addEventListener('click', e => {
//   console.log(e)
//   pairs.classList.toggle('paused')
// })
