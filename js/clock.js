const controls = document.querySelectorAll('button.control')
const animating = document.querySelectorAll('.playing')
const poster = document.getElementById('futura')

const clock = document.getElementById('clock')

console.log(poster)
console.log(clock)
console.log(animating)
console.log(controls)

// controls.forEach(control =>
//   control.addEventListener('click', e => {
//     console.log(e)
//     plays.forEach(playing => playing.classList.toggle('paused'))
//   })
// )

poster.addEventListener('click', e => {
  animating.forEach(animating => {
    animating.classList.toggle('paused')
  })
  controls.forEach(control => {
    // control.classList.contains('switch') &&
    control.classList.toggle('toggle-color')
  })
})

// pause.addEventListener('click', e => {
//   console.log(e)
//   pairs.classList.toggle('paused')
// })
