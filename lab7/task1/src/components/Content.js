import React from 'react'
import Image from './Image'

class Content extends React.Component {
  render () {
    return (
      <>
        <p id='first-element'>
          Дата народження: 17.10.2003, місце народження: м. Івано-Франківськ,
          Україна
        </p>
        <p id='second-element'>
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

        <Image />

        <div>
          <button onclick='addImage()'>Додати</button>
          <button onclick='enlargeImage()'>Збільшити</button>
          <button onclick='shrinkImage()'>Зменшити</button>
          <button onclick='removeImage()'>Видалити</button>
        </div>
      </>
    )
  }
}

export default Content
