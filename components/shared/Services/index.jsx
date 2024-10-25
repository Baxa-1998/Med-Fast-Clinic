
import React from 'react'
import './services.scss'
import Image from 'next/image'
import ServicesItem from './ServicesItem'

const data = [
  {
    narcomania :{ 
      title: "Услуги",
      headTitle: 'Наркомания',
      items: [
        {
          id: 1,
          subtitle: 'Убод',
          price: '30 000',
      },
      {
        id: 2,
        subtitle: 'Снятие ломки',
        price: '6 500',
    },
    {
      id: 3,
      subtitle: 'Наркологическая помощь',
      price: '6 000',
  },
  {
    id: 4,
    subtitle: 'Детоксикация от наркотиков',
    price: '6 000',
},
    ], 
    items2: [
      {
        id: 1,
        subtitle: 'Убод2',
        price: '30 000',
    },
    {
      id: 2,
      subtitle: 'Снятие ломки2',
      price: '6 500',
  },
  {
    id: 3,
    subtitle: 'Наркологическая помощь2',
    price: '6 000',
},


    ]
     


    },
//     detocsication :{ 
//       title: "Нужна быстрая помощь",
//       headTitle: 'Наркомания',
//       items: [
//         {
//           id: 1,
//           subtitle: 'Убод',
//           price: '30 000',
//       },
//       {
//         id: 2,
//         subtitle: 'Снятие ломки',
//         price: '6 500',
//     },
//     {
//       id: 3,
//       subtitle: 'Наркологическая помощь',
//       price: '6 000',
//   },
//   {
//     id: 4,
//     subtitle: 'Детоксикация от наркотиков',
//     price: '6 000',
// },
//     ] 
     


//     }
  }
]
export default function Services() {
 
  return (
    <section className='services'> 
    <div className='services__main_text'> 
      <div className='services__line'></div>
    <h2 className='services__title'>
    Наши <span>услуги</span> 
    </h2>
    </div> 
    <div className='services__items'> 
     
        <Image src='/assets/services-img.png' width={528} height={694}/>
     
      <div className='services__item_container'>
    <ServicesItem data={data[0].narcomania}/>
      </div>

    </div>
     
    </section>
  )
}
