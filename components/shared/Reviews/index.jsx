'use client'
import React from 'react'
import './reviews.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { splitTextToSpans } from '@/utils/textSplit';
import gsap from 'gsap';

export default function Reviews() {


  useGSAP(()=>{
    splitTextToSpans('.reviews__title')

    gsap.fromTo('.reviews__title .char', {
    
    
  
      opacity: 0,
      yPercent: 130

    },{
      opacity: 1,
      yPercent: 0,
      stagger: 0.03,
      duration: 1,
      scrollTrigger:{
        trigger: '.reviews__title', 
        start: 'top 80%'
      }
    })
  },[])

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
      centerMode: true,
  centerPadding: '20px',
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
      style={{ ...style, display: "block",   fontFamily: "'Montserrat', sans-serif",  background: "#F1F5FF", width: '169px', height: "112px", }}
      onClick={onClick}></div>
    );
  }
  return (
  <section id='reviews' className='reviews'> 
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
  </section>
  )
}
