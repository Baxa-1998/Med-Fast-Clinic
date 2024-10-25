import React from 'react'
import './main.scss'
import Button from '@/components/UI/Button'
export default function Main() {
  return (
    <section className='main'>
      <video autoPlay={true} muted loop src='./assets/video.mp4'/>
      <div className='main__content'>
      <h1 className='main__title'>Med Fast Clinic <br /> современная клиника <br /> для всей семьи!</h1> 
      <ul>
        <li>Наша клиника работает 24/7</li>
        <li>Доступные цены , регулярные акции и скидки</li>
        <li>Быстрые результаты после анализов</li>
        <li>В клинике «Med Fast Clinic» работают врачи с многолетним опытом, <br />
        готовые оказать качественную медицинскую помощь</li>
      </ul>
      <Button title={'Оставить заявку'}/>
      </div>
   
    </section>
  )
}
