const AnalogClock = $container => {
  const $clockItem = document.querySelectorAll('.analog-clock')
  
  $clockItem.forEach((item) => {
    item.innerHTML =  `
    <div class="hand hour"></div>
    <div class="hand minute"></div>
    <div class="hand second"></div>
    <div class="time time1">|</div>
    <div class="time time2">|</div>
    <div class="time time3">|</div>
    <div class="time time4">|</div>
    <div class="time time5">|</div>
    <div class="time time6">|</div>
    <div class="time time7">|</div>
    <div class="time time8">|</div>
    <div class="time time9">|</div>
    <div class="time time10">|</div>
    <div class="time time11">|</div>
    <div class="time time12">|</div>`
  })

  const currentTime = new Date()
   
  let second = currentTime.getSeconds()
  let minute = currentTime.getMinutes()
  let hour = currentTime.getHours()

  let secondDeg = second * 6
  let minuteDeg = minute * 6
  let hourDeg = (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30

  let $hour = document.querySelectorAll('.hour')
  $hour.forEach((hourItem) => {
    hourItem.style.setProperty('--deg', hourDeg)
  })
  let $minute = document.querySelectorAll('.minute')
  $minute.forEach((minuteItem) => {
    minuteItem.style.setProperty('--deg', minuteDeg)
  })
  let $second = document.querySelectorAll('.second')
  $second.forEach((secondItem) => {
    secondItem.style.setProperty('--deg', secondDeg)
  })

};

export default AnalogClock;

