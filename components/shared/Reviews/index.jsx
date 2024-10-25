'use client'
import React from 'react'
import './reviews.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from 'next/image';
const slides = [
  { id: 1, text: 'Алкогольная и наркотическая зависимость – одна из основных возможных причин смерти во всех странах. Чтобы освободиться от проблемы, больной должен получить профессиональную помощь. Наркологическая клиника «Запоям – нет» в Москве работает с пациентами, независимо от степени тяжести их состояния, и разрабатывает индивидуальное эффективное лечение, которое гарантированно избавит от аддиктивного состояния.' },
  { id: 2, text: 'Алкогольная и наркотическая зависимость – одна из основных возможных причин смерти во всех странах. Чтобы освободиться от проблемы, больной должен получить профессиональную помощь. Наркологическая клиника «Запоям – нет» в Москве работает с пациентами, независимо от степени тяжести их состояния, и разрабатывает индивидуальное эффективное лечение, которое гарантированно избавит от аддиктивного состояния.' },
  { id: 3, text: 'Алкогольная и наркотическая зависимость – одна из основных возможных причин смерти во всех странах. Чтобы освободиться от проблемы, больной должен получить профессиональную помощь. Наркологическая клиника «Запоям – нет» в Москве работает с пациентами, независимо от степени тяжести их состояния, и разрабатывает индивидуальное эффективное лечение, которое гарантированно избавит от аддиктивного состояния.' },

];
export default function Reviews() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
      centerMode: true,
  centerPadding: '20px',
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#F1F5FF", width: '169px', height: "112px" }}
        onClick={onClick}>Далее</div>
      
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={className}
      style={{ ...style, display: "block", background: "#F1F5FF", width: '169px', height: "112px", color: '#2770F1'}}
      onClick={onClick}>Назад</div>
    );
  }
  return (
  <div className='reviews'> 
  <div className='reviews__main_text'>
    <div className='reviews__line'></div>
    <h3 className='reviews__title'>За нас говорят наши клиенты</h3>
  </div>
    <Slider {...settings} className='slider-container'>
      <div className='reviews__item'>
        <h3 className='reviews__item_title'>Кузнецова Дина Геннадиевна</h3> 
          <span className='reviews__item_date'>18 июля 2021</span> 
          <p className='reviews__item_text'>
          Алкогольная и наркотическая зависимость – одна из основных возможных причин смерти во всех странах. Чтобы освободиться от проблемы, больной должен получить профессиональную помощь. Наркологическая клиника «Запоям – нет» в Москве работает с пациентами, независимо от степени тяжести их состояния, и разрабатывает индивидуальное эффективное лечение, которое гарантированно избавит от аддиктивного состояния.

          </p>
          <div className='reviews__item_btn'>
          <button>Весь отзыв</button> 
          <Image width={24}  height={20} src='/assets/arrow-right.png'/>
          </div>
        
      </div>
      <div className='reviews__item'>
        <h3 className='reviews__item_title'>Кузнецова Дина Геннадиевна</h3> 
          <span className='reviews__item_date'>18 июля 2021</span> 
          <p className='reviews__item_text'>
          Алкогольная и наркотическая зависимость – одна из основных возможных причин смерти во всех странах. Чтобы освободиться от проблемы, больной должен получить профессиональную помощь. Наркологическая клиника «Запоям – нет» в Москве работает с пациентами, независимо от степени тяжести их состояния, и разрабатывает индивидуальное эффективное лечение, которое гарантированно избавит от аддиктивного состояния.

          </p>
          <div className='reviews__item_btn'>
          <button>Весь отзыв</button> 
          <Image width={24}  height={20} src='/assets/arrow-right.png'/>
          </div>
        
      </div>
  
    </Slider>
  </div>
  )
}
