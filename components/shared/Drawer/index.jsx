import React, { useEffect } from 'react'
import './drawer.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

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
                fdsadfsa
          </div>
    </div>
  )
}
