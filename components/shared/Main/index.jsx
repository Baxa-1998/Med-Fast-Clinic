'use client'
import React, { useEffect, useRef, useState } from 'react'
import './main.scss'
import Button from '@/components/UI/Button'
import Title from '@/components/UI/title'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import Image from 'next/image'
import { splitTextToSpans } from '@/utils/textSplit'

export default function Main() { 


  useGSAP(() => {    

  

  
    // gsap.set(chars, {
    //   yPercent: 130, // Смещение вниз
    //   opacity: 0, // Полная прозрачность
    // });
    splitTextToSpans('.main__title')

    gsap.fromTo('.main__title .char', {
    
    
  
      opacity: 0,
      yPercent: 130

    },{
      opacity: 1,
      yPercent: 0,
      stagger: 0.03,
      duration: 1,
    })
    gsap.fromTo('#list', {
      opacity: 0,

    },{
      opacity: 1, 
      stagger:  0.3, 
      duration: 1
    })




 
    // gsap.fromTo('#main-btn', {
    //   opacity: 0,
    //   x: 500,

    // },{
    //   // x: 0, 
    //   opacity: 1,
    //   stagger:  0.3, 
    //   duration: 1
    // })

  }, []);
  return (
    <section id='main' className='main'> 


      <video poster='/assets/background.jpg' preload="metadata" autoPlay={true} muted loop src='./assets/1113.mp4'/>

  

      <div className='main__content'>
    <Title>
    <h1 className='main__title'>Med Fast Clinic <br /> современная клиника <br /> для всей семьи!</h1> 
    </Title>
   
       
   
      <ul>
        <li id='list'>Наша клиника работает 24/7</li>
        <li id='list'>Доступные цены , регулярные акции и скидки</li>
        <li id='list'>Быстрые результаты после анализов</li>
        <li id='list'>В клинике «Med Fast Clinic» работают врачи с многолетним опытом, <br />
        готовые оказать качественную медицинскую помощь</li>
      </ul>
      <Button id='main-btn' title={'Оставить заявку'}/>
      
      </div>
   
    </section>
  )
}
