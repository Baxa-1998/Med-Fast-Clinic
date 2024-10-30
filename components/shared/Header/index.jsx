'use client'
import React, { useEffect } from 'react'
import './header.scss'
import Button from '@/components/UI/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Header() {
  const [isHeader, setIsHeader] = React.useState(false) 
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      const scrollY = window.scrollY; 
     if(scrollY >= 900){
      setIsHeader(true)
     }else{
      setIsHeader(false)
     }
    })
 
    
  },[])
  useGSAP(()=>{
    gsap.fromTo("#stagger", {
      y: -100,
    },{
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out'
    })
    gsap.fromTo(".header__left", {
      x:-500 ,
    },{
      x: 0,
      duration: 1,
      animationDelay: 1,
      // stagger: 0.2,
      ease: 'back.out'
    })
    gsap.fromTo(".header__right", {
      x:500 ,
    },{
      x: 0,
      duration: 1,
      animationDelay: 1,
      // stagger: 0.2,
      ease: 'back.out'
    })

  })
  return (
    <header className={`header ${isHeader ? 'header-active' : ""}`}>
         <div className='header__left'>
          <img id='logo' src="/assets/logo.png" alt="logo" />
          <h2 className='header__left_title'>Med Fast Clinic</h2> 

         </div>
         <div className='header__center'>
          <ul>
            <a id='stagger' href='#'><li>Главная</li></a>
            <a id='stagger' href='#'><li>Наши услуги</li></a>
            <a id='stagger' href='#'><li>Отзывы</li></a>
            <a id='stagger' href='#'><li>Наши доктора</li></a>
            <a id='stagger' href='#'><li>Контакты</li></a>
          </ul>

         </div>
         <div className='header__right'>
          <ul>
            <li>   <a href='tel:+998956210303'>+998 (95) 621 03 03</a></li>
         <li>  <a href='tel:+998956210303'>+998(95) 608 03 03</a></li>
            <span> г. Самарканд, ул. Озод Шарк, 8</span>
          </ul>
          <Button title='Оставить заявку'/>
         </div>
    </header>
  )
}
