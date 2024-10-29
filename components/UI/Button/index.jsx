'use client'
import React, { useContext } from 'react'
import './button.scss'
import { ModalContext } from '@/context/ModalCTX'
export default function Button({title, className,  ... props}) {
  const {setIsModalOpen, isModalOpen} = useContext(ModalContext)
  
  return (
    <button onClick={()=> setIsModalOpen(true)} className={`${className} btn`}  {...props}>{title}</button>
  )
}
