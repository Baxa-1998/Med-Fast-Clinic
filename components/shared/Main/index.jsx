'use client'
import React, { useEffect, useRef, useState } from 'react'
import './main.scss'
import Button from '@/components/UI/Button'
import Title from '@/components/UI/title'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap-trial/all'
import Image from 'next/image'

export default function Main() { 


  useGSAP(() => {    
  gsap.registerPlugin(SplitText)
    const li  = document.querySelectorAll('#list')
    let mySplitText = new SplitText('.main__title', {type: 'chars'}) 
    let mySplitList = new SplitText( li, {type: 'chars'})
    let charsList = mySplitList.chars 
    let chars = mySplitText.chars
    // gsap.set(chars, {
    //   yPercent: 130, // Смещение вниз
    //   opacity: 0, // Полная прозрачность
    // });

    gsap.fromTo(chars, {
    
    
  
      opacity: 0,

    },{
      opacity: 1, 
      stagger:  0.05, 
      duration: 1
    })
    gsap.fromTo(charsList, {
    
    
  
      opacity: 0,

    },{
      opacity: 1, 
      stagger:  0.03, 
      duration: 1
    })

  }, []);
  return (
    <section className='main'> 

      <video autoPlay={true} muted loop src='./assets/video.mp4'/>
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
      <Button title={'Оставить заявку'}/>
      
      </div>
   
    </section>
  )
}
