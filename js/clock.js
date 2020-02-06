const controls = document.querySelectorAll('button.control')
const animating = document.querySelectorAll('.playing')
const poster = document.getElementById('futura')
const clock = document.getElementById('clock')

controls.forEach(control =>
  control.addEventListener('click', e => {
    console.log(e)
    animating.forEach(animating => {
      animating.classList.toggle('paused')
    })
    controls.forEach(control => {
      control.classList.toggle('toggle-color')
    })
    clock.classList.toggle('toggle-color')
  })
)
