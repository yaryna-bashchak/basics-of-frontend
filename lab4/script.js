let imageContainer

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
  imageContainer = document.getElementById('image-container')

  firstElement.onclick = changeColor(firstElement)
  secondElement.onclick = changeColor(secondElement)
})

const addImage = () => {
  const img = document.createElement('img')
  img.src =
    'https://karpatium.com.ua/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBamdPIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--86f901a06a2c1919b7944e4045b219ba0ba7f92d/%D1%80%D0%B0%D1%82%D1%83%D1%88%D0%B0%20%D1%84%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%20%D1%89%D0%BE%20%D0%BF%D0%BE%D0%B4%D0%B8%D0%B2%D0%B8%D1%82%D0%B8%D1%81%D1%8C.jpeg'
  img.alt = 'Нове фото'
  imageContainer.appendChild(img)
}

const enlargeImage = () => {
  const img = document.querySelector('img:last-of-type')
  const currentWidth = parseFloat(
    window.getComputedStyle(img, null).getPropertyValue('width')
  )
  img.style.width = currentWidth * 1.1 + 'px'
}

const shrinkImage = () => {
  const img = document.querySelector('img:last-of-type')
  const currentWidth = parseFloat(
    window.getComputedStyle(img, null).getPropertyValue('width')
  )
  img.style.width = currentWidth * 0.9 + 'px'
}

const removeImage = () => {
  const img = document.querySelector('img:last-of-type')
  img.remove()
}
