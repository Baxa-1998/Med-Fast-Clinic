import React, { useEffect } from 'react'
import './drawer.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

export default function Drawer({isBurger, setIsBurger}) {
  useEffect(()=>{
    if(isBurger){
      gsap.fromTo('#drawer-stagger', {
        opacity: 0
       },{
        opacity: 1,
        duration: 1,
        ease: "bounce",
        stagger: 0.3
       })
    }
    
  },[isBurger])
  return (
    <div className={`drawer ${isBurger ? 'drawer-active' : ''}`}>
        <div className='drawer__item'>
          <ul>
            <a onClick={()=> setIsBurger(false)} id='drawer-stagger' href='#main'><li>Главная</li></a>
            <a onClick={()=> setIsBurger(false)} id='drawer-stagger' href='#services'><li>Наши услуги</li></a>
            <a onClick={()=> setIsBurger(false)} id='drawer-stagger' href='#reviews'><li>Отзывы</li></a>
            <a onClick={()=> setIsBurger(false)} id='drawer-stagger' href='#doctors'><li>Наши доктора</li></a>
            <a onClick={()=> setIsBurger(false)} id='drawer-stagger' href='#contacts'><li>Контакты</li></a>
          </ul>
          
         </div>
         <div className='drawer__footer'>
              <div className="footer__content">
              <div className='drawer__contacts'>

      <div className='footer__adres'>
      <Image width={26} height={26} src={'/assets/location.png'}/>
      <a href='#'>г. Самарканд,  ул. Озод Шарк, 8</a>
      </div>
    
        {/* <li><Image width={26} height={26} src={'/assets/location.png'}/>Email</li>
        <a href='#'>example@example.ru</a> */}

      
      <div className='footer__social'>
        <div className='footer__social_item'>
          <Image width={15} height={30} src={'/assets/facebook.png'} alt='dfa'/>
        </div>
        <div className='footer__social_item'>
          <Image width={18} height={16} src={'/assets/telegram.png'}/>
        </div>
        <div className='footer__social_item'>
          <Image width={25} height={25} src={'/assets/instagram.png'}/>
        </div>
      </div>
    </div>
              </div>
          </div>
    </div>
  )
}
