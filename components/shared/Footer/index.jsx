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
      <Image loading='lazy' width={150} height={150} alt='logo' src={'/assets/logo-white.png'}/>
      <a className='footer__phone' href='tel:+956210303'>
      Тел:(95) 621 03 03 / (95) 608 03 03
      </a>
    <div className='footer__contacts'>
      <ul>
        <li><Image loading='lazy' width={26} height={26} src={'/assets/location.png'} alt='adress'/>Адрес</li>
        <a href='#'>г. Самарканд,  ул. Озод Шарк, 8</a>
        <li><Image loading='lazy' width={26} height={26} src={'/assets/location.png'} alt='email'/>Email</li>
        <a href='#'>example@example.ru</a>

      </ul>
      <div className='footer__social'>
        <a href='https://www.facebook.com/people/Med-Fast-Clinic-Samarkand/61564297646807/?mibextid=LQQJ4d&rdid=w6cHJlBNZ3jtzxAt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FhN9EKQ8VM8EBZZPk%2F%3Fmibextid%3DLQQJ4d%26tpclid%3Dfacebook.PAZXh0bgNhZW0CMTEAAaawJKPh1NiNs6DMrTaya_Gdtdj5Wq1BuQAvyagDgncKCLA-lpmAFQNroL0_aem__NtRWmfqaG2xIwIzpS-TUw' className='footer__social_item'>
          <Image loading='lazy' width={15} height={30} alt='facebook' src={'/assets/facebook.png'}/>
        </a>
     
        <a href='https://t.me/medfastclinic1' className='footer__social_item'>
          <Image loading='lazy' width={18} height={16} alt='telegram'  src={'/assets/telegram.png'}/>
        </a>
        
        <a href='https://www.instagram.com/medfastclinic.uz?igsh=MTc2enBldWdhN2c4MQ==' className='footer__social_item'>
        <Image loading='lazy' width={25} height={30} alt='instagram' src={'/assets/instagram.png'}/>
        </a>
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
