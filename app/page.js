import Adress from "@/components/shared/Address";
import Consultation from "@/components/shared/Consultation";
import Description from "@/components/shared/Description";
import Doctors from "@/components/shared/Doctors";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Main from "@/components/shared/Main";
import Photos from "@/components/shared/Photos";
import Reviews from "@/components/shared/Reviews";
import Services from "@/components/shared/Services";


export default function Home() {
  return (
    <div className="wrapper">
      <Header/>
    <Main/>
    <Description/>
    <Services/>
    <Photos/>
    <Reviews/>
   <Doctors/>
   <Consultation/>
   <Adress/>
  
      {/* <video autoPlay={true} muted loop src="/assets/video.mp4"></video> */}
      <Footer/>
    </div>
   
  );
}
