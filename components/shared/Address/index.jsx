'use client'
import React from 'react'
import './adress.scss'
import Image from 'next/image'
import Button from '@/components/UI/Button'
export default function Adress() {
  return (
    <div className='adress'>
       <div className='adress__main_text'>
    <div className='adress__line'></div>
    <h3 className='adress__title'>Ждем вас в медицинском центре</h3> 

  </div>
  <div className='adress__map'> 
    <div className='adress__item'>
      <h3 className='adress__item_title'>
      Как к нам добраться?
      </h3>
      <ul>
        <li><a href="#"> <Image width={26} height={26} src={'/assets/location.png'}/> г. Богучар, ул. Мжд Киевское 17-й км</a></li>
        <li><a href="#"> <Image width={26} height={26} src={'/assets/mobile.png'}/>8 (800) 123-45-67</a></li>
        <li><a href="#"> <Image width={26} height={26} src={'/assets/mobile.png'}/>8 (800) 123-45-67</a></li>
        
      </ul>
      <Button title={'Оставить заявку'}/>
      <div className='address__item_rating'>
        <h3 className='adress__item_title'>Наши рейтинги</h3>
      <Image width={127} height={38} src={'/assets/google.png'}/>
      <Image width={114} height={26} src={'/assets/rating.png'}/>
      </div>
    </div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.486061756032!2d66.9457336!3d39.6612795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1962deeee295%3A0xb647a2bbb620fec0!2zTWVkIEZhc3QgQ2xpbmljLCDQnNC10LQg0KTQsNGB0YIg0JrQu9C40L3QuNC60LA!5e0!3m2!1sru!2s!4v1729875569056!5m2!1sru!2s" width="1446" height="590" style={{borderTopLeftRadius: '0',}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
    </div>
  )
}
