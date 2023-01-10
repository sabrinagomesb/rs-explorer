import { Controls } from "./controls.js"
import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"
import { Sounds } from "./sounds.js"
import { Timer } from "./timer.js"

const sounds = Sounds()

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

buttonPlay.addEventListener("click", function () {
  controls.play()
  timer.countDown()
  sounds.pressButton()
})

buttonPause.addEventListener("click", function () {
  controls.pause()
  timer.hold()
  sounds.pressButton()
})

buttonStop.addEventListener("click", function () {
  controls.reset()
  timer.reset()
  sounds.pressButton()
})

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hide")
  buttonSoundOff.classList.remove("hide")
  sounds.bgAudio.pause()
})

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.remove("hide")
  buttonSoundOff.classList.add("hide")
  sounds.bgAudio.play()
})

buttonSet.addEventListener("click", function () {
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})
