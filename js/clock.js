const pause = document.getElementById('pause')

const clock = document.getElementById('clock')

const year = document.getElementById('year')
const pairs = document.getElementById('pairs')
const minute = document.getElementById('minute')
const hour = document.getElementById('hour')

console.log(clock)

pause.addEventListener('click', e => {
  console.log(e)
  pairs.classList.toggle('paused')
})
