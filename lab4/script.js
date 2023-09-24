const getRandomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16)

const getContrastingColor = (hexColor) => {
  hexColor = hexColor.replace('#', '')

  let r = parseInt(hexColor.substring(0, 2), 16) // Red
  let g = parseInt(hexColor.substring(2, 4), 16) // Green
  let b = parseInt(hexColor.substring(4, 6), 16) // Blue

  let yiq = (r * 299 + g * 587 + b * 114) / 1000

  return yiq >= 128 ? 'black' : 'white'
}

const changeColor = element => () => {
  const newBackgroundColor = getRandomColor()
  element.style.backgroundColor = getRandomColor()
  element.style.color = getContrastingColor(newBackgroundColor)
}

document.addEventListener('DOMContentLoaded', function () {
  const firstElement = document.getElementById('first-element')
  const secondElement = document.querySelector('#second-element')

  firstElement.onclick = changeColor(firstElement)
  secondElement.onclick = changeColor(secondElement)
})
