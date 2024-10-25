'use client'
import React from 'react'
import './services.scss'
import Image from 'next/image'
export default function ServicesItem({data}) {
  console.log(data);
  
  return (
    <div className='services__item'>
      <div className='services__item_head'>
        <div className='flex gap-4'>
        <Image width={56} height={56} src={'/assets/services-head1.png'}/> 
        <h3 className='services__item_title'>{data.title}</h3>
        </div>
         
            <div className='services__line'></div>
      </div>
      <div className='flex justify-between'>
      <div className='services__prices'>
        <h3>
         {data.headTitle}
        </h3>
        {data.items.map((item)=>(
             <div className='services__prices_item'>
             <h4>{item.subtitle}</h4>
             <div className='prices__item_line'></div>
            <p>от {item.price} ₽</p>
  
          </div>

        ))}
     
        <div className='services__prices_item'>
           <h4>Снятие ломки</h4>
           <div className='prices__item_line'></div>
          <p>от 6 500 ₽</p>

        </div>

      </div>
      <div className='services__prices'>
        <h3>
         {data.headTitle}
        </h3>
        {data.items.map((item)=>(
             <div className='services__prices_item'>
             <h4>{item.subtitle}</h4>
             <div className='prices__item_line'></div>
            <p>от {item.price} ₽</p>
  
          </div>

        ))}
     
        <div className='services__prices_item'>
           <h4>Снятие ломки</h4>
           <div className='prices__item_line'></div>
          <p>от 6 500 ₽</p>

        </div>

      </div>

      </div>
    

     

    </div>
  )
}
