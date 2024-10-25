'use client'
import React from 'react'
import './doctors.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from 'next/image';
import Button from '@/components/UI/Button';
const slides = [
  { id: 1, text: 'Алкогольная и наркотическая зависимость – одна из основных возможных причин смерти во всех странах. Чтобы освободиться от проблемы, больной должен получить профессиональную помощь. Наркологическая клиника «Запоям – нет» в Москве работает с пациентами, независимо от степени тяжести их состояния, и разрабатывает индивидуальное эффективное лечение, которое гарантированно избавит от аддиктивного состояния.' },
  { id: 2, text: 'Алкогольная и наркотическая зависимость – одна из основных возможных причин смерти во всех странах. Чтобы освободиться от проблемы, больной должен получить профессиональную помощь. Наркологическая клиника «Запоям – нет» в Москве работает с пациентами, независимо от степени тяжести их состояния, и разрабатывает индивидуальное эффективное лечение, которое гарантированно избавит от аддиктивного состояния.' },
  { id: 3, text: 'Алкогольная и наркотическая зависимость – одна из основных возможных причин смерти во всех странах. Чтобы освободиться от проблемы, больной должен получить профессиональную помощь. Наркологическая клиника «Запоям – нет» в Москве работает с пациентами, независимо от степени тяжести их состояния, и разрабатывает индивидуальное эффективное лечение, которое гарантированно избавит от аддиктивного состояния.' },

];
export default function Doctors() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
  //     centerMode: true,
  // centerPadding: '20px',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };


  
 
  return (
  <div className='doctors'> 
  <div className='doctors__main_text'>
    <div className='doctors__line'></div>
    <h3 className='doctors__title'>Наши докторы</h3>
  </div>
    <Slider {...settings} className='slider-container'>
      <div className='doctors__item'>
        <Image width={355} height={355} src={'/assets/our-doctor.png'}/>
      <h3 className='doctors__item_title'>Соболев <br /> <span>Даниил</span></h3>
      <p className='doctors__item_text'>Заведующий кардиологическим отделением</p>
      </div>
      <div className='doctors__item'>
        <Image width={355} height={355} src={'/assets/our-doctor.png'}/>
      <h3 className='doctors__item_title'>Соболев <br /> <span>Даниил</span></h3>
      <p className='doctors__item_text'>Заведующий кардиологическим отделением</p>
      </div>
      <div className='doctors__item'>
        <Image width={355} height={355} src={'/assets/our-doctor.png'}/>
      <h3 className='doctors__item_title'>Соболев <br /> <span>Даниил</span></h3>
      <p className='doctors__item_text'>Заведующий кардиологическим отделением</p>
      </div>
      <div className='doctors__item'>
        <Image width={355} height={355} src={'/assets/our-doctor.png'}/>
      <h3 className='doctors__item_title'>Соболев <br /> <span>Даниил</span></h3>
      <p className='doctors__item_text'>Заведующий кардиологическим отделением</p>
      </div>
      <div className='doctors__item'>
        <Image width={355} height={355} src={'/assets/our-doctor.png'}/>
      <h3 className='doctors__item_title'>Соболев <br /> <span>Даниил</span></h3>
      <p className='doctors__item_text'>Заведующий кардиологическим отделением</p>
      </div>
      <div className='doctors__item'>
        <Image width={355} height={355} src={'/assets/our-doctor.png'}/>
      <h3 className='doctors__item_title'>Соболев <br /> <span>Даниил</span></h3>
      <p className='doctors__item_text'>Заведующий кардиологическим отделением</p>
      </div>

   
  
    </Slider>
   <button className='doctors__btn'>Просто свапайте<Image width={32} height={32} src={'/assets/swipe.png'}/></button>
   
 
  </div>
  )
}
