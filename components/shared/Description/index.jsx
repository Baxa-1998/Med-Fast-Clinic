'use client'
import React from 'react';
import './description.scss';
import Image from 'next/image';
import Title from '@/components/UI/title';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap-trial/all';
import { ScrollTrigger } from 'gsap/all';
import { splitTextToSpans } from '@/utils/textSplit';
export default function Description() { 

  
  
  useGSAP(() => {   
   
  
    gsap.registerPlugin(ScrollTrigger)
 

    // Вызываем функцию для разделения текста
    splitTextToSpans('#title');

    // Анимация символов
    gsap.fromTo('#title .char', {
      opacity: 0,
      yPercent: 130,
    }, {
      opacity: 1,
      yPercent: 0,
      stagger: 0.03,
      duration: 1,
      scrollTrigger: {
        trigger: '#title',
        start: 'top 80%',
      }
    });
 
      // gsap.set(chars, {
      //   yPercent: 130, // Смещение вниз
      //   opacity: 0, // Полная прозрачность
      // });
  
      // gsap.fromTo('#title', {
      
      
    
      //   opacity: 0,
  
      // },{
      //   opacity: 1, 
      //   stagger:  0.03, 
      //   duration: 1,
      //   scrollTrigger:{
      //     trigger: '#title', 
      //     start: 'top 80%'
      //   }
      // })
      gsap.fromTo(".description__img", {
        x:-500 ,
      },{
        x: 0,
        duration: 1,
        animationDelay: 1,
        // stagger: 0.2,
        ease: 'back.out',
        scrollTrigger:{
          trigger: '#title', 
          start: 'top 80%'
        }
      })

      gsap.fromTo("#description-text", {
        opacity:0 ,
      },{
        opacity: 1,
        duration: 1,
        animationDelay: 1,
        stagger: 0.3,
        ease: 'back.out',
        scrollTrigger:{
          trigger: '#title', 
          start: 'top 80%'
        }
      })
  
    }, []);
  return (
    <section className="description">
      
      <div  className="description__img">
        <Image width={412} height={412} src={'/assets/doctor.png'} alt="doctor" />
        <h3>
          Захаров Терентий <br />
          <span>Александрович</span>
        </h3>
      </div>
      <div className="description__info">
       <Title>
       <h2 id='title'>
          Клиника «Med Fast Clinic»: <span>опытные врачи, <br />  хорошие условия и доступные цены</span> 
        </h2>
       </Title>
      
        
    
        <p id='description-text'>
          Алкогольная и наркотическая зависимость – одна из основных возможных причин смерти во всех
          странах. Чтобы освободиться от проблемы, <br /> больной должен получить профессиональную помощь.
          Наркологическая клиника «Запоям – нет» в Москве работает с пациентами, независимо <br /> от
          степени тяжести их состояния, и разрабатывает индивидуальное эффективное лечение, которое
          гарантированно избавит от аддиктивного <br /> состояния.
        </p>
        <h3 id='description-text'>Выбор клиники</h3>
        <p id='description-text'>
          Зависимость – это психическое заболевание, при котором у человека происходит расстройство
          воли, мешающее справиться с компульсивной <br /> тягой к этанолу. Справиться с ним
          самостоятельно, не обращаясь к наркологу, можно только на первой стадии алкоголизма. Но
          при развитии <br /> абстиненции, когда психологическая тяга осложняется физической, требуется
          обратиться в центр помощи зависимым. <br /> Квалифицированные врачи принимают пациентов в крупных
          и маленьких городах в государственных и платных наркологических клиниках. <br /> Если учреждение
          имеет лицензию, оно обязано опираться при лечебном процессе на клинические рекомендации
          Минздрава, в которые <br /> входит описание всех доказавших действенность и безопасность методов.
        </p>
        <h4 id='description-text'>
        Но в коммерческих центрах терапия проходит:

        </h4>
        <ul id='description-text'>
          <li id='description-text'>Анонимно</li>
          <li id='description-text'>C обеспечением высокого уровня комфорта</li>
          <li id='description-text'>C применением современных методик и хороших препаратов</li>
        </ul>
        <p id='description-text'>Кроме приемного отделения и стационара, в частных наркологических клиниках есть реабилитационный центр и служба выезда специалистов <br /> на дом. Помощь оказывается круглосуточно, при этом пациент может связаться с медиком в любое время суток для получения дополнительной информации о лечении.
        </p>
      </div>
      {/* <i className="square"></i>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div> */}
	
	
    </section>
  );
}
