const squareSize = 6
const variant = 1

const table = document.getElementById('table')
const colorPicker = document.getElementById('color-picker')
let selectedColor = 'rgb(78, 79, 254)'

const getRandomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16)

const changeColor = (cell, color = null) => {
  if (color === null) {
    color = getRandomColor()
  }
  cell.style.backgroundColor = color
}

for (let i = 0; i < squareSize; i++) {
  const row = document.createElement('tr')

  for (let j = 0; j < squareSize; j++) {
    const cell = document.createElement('td')
    cell.id = cell.textContent = squareSize * i + j + 1
    row.appendChild(cell)
  }
  table.appendChild(row)
}

const myCell = document.getElementById(variant)

myCell.addEventListener('mouseover', () => changeColor(myCell))
myCell.addEventListener('click', () => changeColor(myCell, selectedColor))
myCell.addEventListener('dblclick', () => {
  const row = myCell.parentNode
  for (cell of row.cells) {
    changeColor(cell, selectedColor)
  }
})

colorPicker.addEventListener('input', () => {
  selectedColor = colorPicker.value
})
