import React from 'react'
import Image from './Image'

class Content extends React.Component {
  state = {
    firstElement: {
      backgroundColor: '#FFFFFF',
      color: '#000000'
    },
    secondElement: {
      backgroundColor: '#FFFFFF',
      color: '#000000'
    }
  }

  //   addImage = () => {
  //     const imageContainer = document.getElementById('image-container')
  //     imageContainer.appendChild(<Image />)
  //   }

  //   enlargeImage = () => {
  //     const img = document.querySelector('img:last-of-type')
  //     const currentWidth = img.width
  //     img.style.width = currentWidth * 1.1 + 'px'
  //   }

  //   shrinkImage = () => {
  //     const img = document.querySelector('img:last-of-type')
  //     const currentWidth = img.width
  //     img.style.width = currentWidth * 0.9 + 'px'
  //   }

  //   removeImage = () => {
  //     const img = document.querySelector('img:last-of-type')
  //     img.remove()
  //   }

  getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

  getContrastingColor = hexColor => {
    hexColor = hexColor.replace('#', '')

    let r = parseInt(hexColor.substring(0, 2), 16)
    let g = parseInt(hexColor.substring(2, 4), 16)
    let b = parseInt(hexColor.substring(4, 6), 16)

    let yiq = (r * 299 + g * 587 + b * 114) / 1000

    return yiq >= 128 ? 'black' : 'white'
  }

  changeColor = name => {
    const newBackgroundColor = this.getRandomColor()
    const newContrastColor = this.getContrastingColor(newBackgroundColor)
    this.setState({
      [name]: { backgroundColor: newBackgroundColor, color: newContrastColor }
    })
  }

  render () {
    return (
      <>
        <p
          id='first-element'
          style={{ backgroundColor: this.state.firstElement.backgroundColor, color: this.state.firstElement.color }}
          onClick={() => this.changeColor('firstElement')}
        >
          Дата народження: 17.10.2003, місце народження: м. Івано-Франківськ,
          Україна
        </p>
        <p
          id='second-element'
          style={{ backgroundColor: this.state.secondElement.backgroundColor, color: this.state.secondElement.color }}
          onClick={() => this.changeColor('secondElement')}
        >
          Освіта:
          <br />
          УФМЛ КНУ ім. Т. Шевченка, м. Київ (середня освіта); НТУУ "КПІ <br />
          ім. І. Сікорського", м. Київ (вища освіта).
        </p>
        <p>Мої хоббі:</p>
        <ul>
          <li>Похід в гори</li>
          <li>Ведення навчальних курсів</li>
          <li>Танці</li>
        </ul>
        <p>Мої улюблені серіали:</p>
        <ol>
          <li>"Спіймати Кайдаша", 2020</li>
          <li>"Теорія великого вибуху", 2007</li>
          <li>"Кремнієва долина", 2014</li>
        </ol>
        <p>
          Івано-Франківськ (також Станисла́вів) — місто в Україні, обласний центр
          Івано-Франківської області, економічний і культурний центр
          Прикарпаття. Один із трьох головних центрів історико-географічного
          регіону Галичина. Назване 1962 року на честь Івана Франка.
        </p>

        <a id='image-container' href='https://www.mvk.if.ua/'>
          <Image />
        </a>

        {/* <div>
          <button onClick={this.addImage}>Додати</button>
          <button onClick={this.enlargeImage}>Збільшити</button>
          <button onClick={this.shrinkImage}>Зменшити</button>
          <button onClick={this.removeImage}>Видалити</button>
        </div> */}
      </>
    )
  }
}

export default Content
