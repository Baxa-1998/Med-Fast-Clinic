import React from 'react'
import './header.scss'
import Button from '@/components/UI/Button'
export default function Header() {
  return (
    <header className='header'>
         <div className='header__left'>
          <img src="/assets/logo.png" alt="logo" />
          <h2 className='header__left_title'>Med Fast Clinic</h2> 

         </div>
         <div className='header__center'>
          <ul>
            <a href='#'><li>Главная</li></a>
            <a href='#'><li>Наши услуги</li></a>
            <a href='#'><li>Отзывы</li></a>
            <a href='#'><li>Наши доктора</li></a>
            <a href='#'><li>Контакты</li></a>
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
