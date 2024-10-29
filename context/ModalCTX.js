'use client'
import { createContext, useState } from "react";

export const ModalContext = createContext()

export  function ModalCTX({children}) {
  const [isModalOpen, setIsModalOpen] = useState(false) 

  return (
    <ModalContext.Provider value={{isModalOpen, setIsModalOpen}}>
      {children}
    </ModalContext.Provider>
  )
  
}