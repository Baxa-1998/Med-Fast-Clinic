// 'use client'
import React from 'react'
import Adress from "@/components/shared/Address";
import Consultation from "@/components/shared/Consultation";
import Description from "@/components/shared/Description";
import Doctors from "@/components/shared/Doctors";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Main from "@/components/shared/Main";
import Modal from "@/components/shared/Modal";
import Photos from "@/components/shared/Photos";
import Reviews from "@/components/shared/Reviews";
import Services from "@/components/shared/Services";
import { ModalCTX } from '@/context/ModalCTX';
import Title from '@/components/UI/title';


export default function Home() {



  return (
    <ModalCTX>
          <div className="wrapper">
      <Modal  />
      <Header/>
    <Main/>
    <Description/>
    <Services/>
    <Photos/>
    <Reviews/>
   <Doctors/>
   <Consultation/>
   <Adress/>
   <Title/>
  
      {/* <video autoPlay={true} muted loop src="/assets/video.mp4"></video> */}
      <Footer/>
    </div>

    </ModalCTX>

   
  );
}
