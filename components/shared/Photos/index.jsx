import React from 'react'
import './photos.scss'
import Image from 'next/image'
export default function Photos() {
  return (
    <div className='photos'>
      <h2 className='photos__title'>Фото клиники</h2> 
      <div className='photo__items'>
        <div className="photo__item">
        <Image className='card-background' width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div className="photo__item">
        <Image width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>       
         <div className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
  
      </div>
    </div>
  )
}
