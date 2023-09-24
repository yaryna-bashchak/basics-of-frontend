const squareSize = 6
const variant = 1
let counter = 1

const table = document.getElementById('table')

for (let i = 0; i < squareSize; i++) {
  const row = document.createElement('tr')

  for (let j = 0; j < squareSize; j++) {
    const cell = document.createElement('td')
    cell.id = cell.textContent = squareSize * i + j + 1
    row.appendChild(cell)
  }
  table.appendChild(row)
}
