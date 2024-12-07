const metaImageElement = document.querySelector(".meta-image")
const metaSongElement = document.querySelector(".meta-song")
const metaAuthorElement = document.querySelector(".meta-author")
const previous = document.querySelector(".previous")
const play = document.querySelector(".play")
const next = document.querySelector(".next")
const audioElements = document.querySelectorAll("audio")
const progressBar = document.getElementById("progress-bar")
const currentTimeElement = document.querySelector(".current-time")
const totalDurationElement = document.querySelector(".total-duration")
const playIcon = document.querySelector(".play-icon")
const pauseIcon = document.querySelector(".pause-icon")
const metadataElements = document.querySelectorAll(".metadata")

progressBar.addEventListener("input", () => {
  const value = progressBar.value
  const max = progressBar.max
  const percentage = (value / max) * 100
  progressBar.style.setProperty("--progress", `${percentage}%`)
})

let activeSongIndex = 0
let currentTime
let duration

const playAudio = (index) => {
  audioElements.forEach((audio, idx) => {
    if (idx === index) {
      audio.play()
      activeSongIndex = index
      updateTotalDuration()
      metadataElements.forEach((metadata, i) => {
        if (i === index) {
          metadata.classList.add("active")
        } else {
          metadata.classList.remove("active")
        }
      })
    } else {
      audio.pause()
      audio.currentTime = 0
    }
  })
}

const formatTime = (time) => {
  let minutes = Math.floor(time / 60)
  let seconds = Math.floor(time % 60)

  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`
  }
  return `${minutes}:${seconds}`
}

const updateProgress = () => {
  const activeAudio = audioElements[activeSongIndex]

  currentTimeElement.textContent = formatTime(activeAudio.currentTime)

  const progressPercentage =
    (activeAudio.currentTime / activeAudio.duration) * 100 || 0
  progressBar.value = progressPercentage
  progressBar.style.setProperty("--progress", `${progressPercentage}%`)

  document.querySelector(`song${activeSongIndex + 1}`).style.display = "none"
}

const updateTotalDuration = () => {
  const activeAudio = audioElements[activeSongIndex]
  totalDurationElement.textContent = formatTime(activeAudio.duration)
}

audioElements.forEach((audio, index) => {
  audio.addEventListener("timeupdate", updateProgress)

  audio.addEventListener("loadedmetadata", () => {
    if (index === activeSongIndex) {
      updateTotalDuration()
    }
  })
})

progressBar.addEventListener("input", () => {
  const activeAudio = audioElements[activeSongIndex]
  const seekTime = (progressBar.value / 100) * activeAudio.duration
  activeAudio.currentTime = seekTime
})

play.addEventListener("click", () => {
  const activeAudio = audioElements[activeSongIndex]
  if (activeAudio.paused) {
    activeAudio.play()
    metadataElements[activeSongIndex].classList.add("active")
  } else {
    activeAudio.pause()
    metadataElements[activeSongIndex].classList.remove("active")
  }
})

next.addEventListener("click", () => {
  const nextIndex = (activeSongIndex + 1) % audioElements.length
  playAudio(nextIndex)
})

previous.addEventListener("click", () => {
  const previousIndex =
    (activeSongIndex - 1 + audioElements.length) % audioElements.length
  playAudio(previousIndex)
})
