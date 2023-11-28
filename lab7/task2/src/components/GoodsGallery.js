import React from 'react'
import GoodsCard from './GoodsCard'

const GoodsGallery = () => {
  const goods = [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/2254063/pexels-photo-2254063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Чорниця',
      price: '200 грн/кг'
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Мандарини',
      price: '50 грн/кг'
    },
    {
      id: 3,
      image:
        'https://images.pexels.com/photos/2629173/pexels-photo-2629173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Полуниця',
      price: '70 грн/кг'
    },
    {
      id: 4,
      image:
        'https://images.pexels.com/photos/73640/pexels-photo-73640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Морква',
      price: '12 грн/кг'
    },
    {
      id: 5,
      image:
        'https://images.pexels.com/photos/2893635/pexels-photo-2893635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Перець Зелений',
      price: '60 грн/кг'
    },
    {
      id: 6,
      image:
        'https://images.pexels.com/photos/248420/pexels-photo-248420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Помідори',
      price: '55 грн/кг'
    },
    {
      id: 7,
      image:
        'https://images.pexels.com/photos/928251/pexels-photo-928251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Часник',
      price: '40 грн/кг'
    },
    {
      id: 8,
      image:
        'https://images.pexels.com/photos/16276561/pexels-photo-16276561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Кукурудза',
      price: '10 грн/шт'
    },
    {
      id: 9,
      image:
        'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Картопля',
      price: '10 грн/кг'
    },
    {
      id: 10,
      image:
        'https://images.pexels.com/photos/2136638/pexels-photo-2136638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Яблука',
      price: '30 грн/кг'
    },
    {
      id: 11,
      image:
        'https://images.pexels.com/photos/266346/pexels-photo-266346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Лимони',
      price: '80 грн/кг'
    },
    {
      id: 12,
      image:
        'https://images.pexels.com/photos/209416/pexels-photo-209416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Абрикоси',
      price: '45 грн/кг'
    }
  ]

  return (
    <div className='goods-gallery'>
      {goods.map(good => (
        <GoodsCard
          key={good.id}
          image={good.image}
          title={good.title}
          price={good.price}
        />
      ))}
    </div>
  )
}

export default GoodsGallery
