import React from 'react'
import './footer.scss'
import Image from 'next/image'
import ConsultationItem from '../Consultation/ConsultationItem'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Footer() {
  useGSAP(()=>{
    gsap.fromTo(
      '.footer__left',
      {
        x: -1000,
   
      },
      {
        x: 0,
      
        ease: 'power1.in',
     
        duration: 1,
        scrollTrigger: {
          trigger: '.footer__left',
          start: 'top 80%',
        },
      },
    );
    gsap.fromTo(
      '.footer__right',
      {
        x: 1000,
   
      },
      {
        x: 0,
      
        ease: 'power1.in',
     
        duration: 1,
        scrollTrigger: {
          trigger: '.footer__right',
          start: 'top 80%',
        },
      },
    );
  },[])
 
  return (
    <div className='footer'> 
    <div className="footer__container">
    <div className="footer__left">
      <Image width={150} height={150} src={'/assets/logo-white.png'}/>
      <a className='footer__phone' href='tel:+956210303'>
      Тел:(95) 621 03 03 / (95) 608 03 03
      </a>
    <div className='footer__contacts'>
      <ul>
        <li><Image width={26} height={26} src={'/assets/location.png'}/>Адрес</li>
        <a href='#'>г. Самарканд,  ул. Озод Шарк, 8</a>
        <li><Image width={26} height={26} src={'/assets/location.png'}/>Email</li>
        <a href='#'>example@example.ru</a>

      </ul>
      <div className='footer__social'>
        <div className='footer__social_item'>
          <Image width={15} height={30} src={'/assets/facebook.png'}/>
        </div>
        <div className='footer__social_item'>
          <Image width={18} height={16} src={'/assets/telegram.png'}/>
        </div>
      </div>
    </div>
      </div>
      <div className='footer__right'>
        <ConsultationItem/>
      </div>
    </div>
   
     

    </div>
  )
}
