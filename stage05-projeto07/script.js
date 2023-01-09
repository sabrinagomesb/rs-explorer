const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function resetControls() {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonSet.classList.remove("hide")
  buttonStop.classList.add("hide")
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countDown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      resetControls()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }
    updateTimerDisplay(minutes, String(seconds - 1))
    countDown()
  }, 1000)
}

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonSet.classList.add("hide")
  buttonStop.classList.remove("hide")

  countDown()
})

buttonPause.addEventListener("click", function () {
  buttonPause.classList.add("hide")
  buttonPlay.classList.remove("hide")
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener("click", function () {
  resetControls()
  resetTimer()
})

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hide")
  buttonSoundOff.classList.remove("hide")
})

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.remove("hide")
  buttonSoundOff.classList.add("hide")
})

buttonSet.addEventListener("click", function () {
  let newMinutes = minutes = prompt("Olá! Quantos minutos de foco você precisa?")
  if (!newMinutes) {
    resetTimer()
    return
  }
  
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})
