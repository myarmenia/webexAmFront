import React, { useEffect, useState } from 'react'
import './HomePage.css'
import Header from '../Header/Header'
import './HomePage.css'
import WebexInfo from '../WebexInfo/WebexInfo'
import ToolsInfo from '../ToolsInfo/ToolsInfo'
import OurAdvantages from '../OurAdvantages/OurAdvantages'
import Services from '../Services/Services'
import CreateWebsitesAndMobileApp from '../CreateWebsitesAndMobileApp/CreateWebsitesAndMobileApp'
import VideoCoursesSection from '../VideoCoursesSection/VideoCoursesSection'
import SlideSection from '../SlideSection/SlideSection'
import MosaicGrid from '../MosaicGrid/MosaicGrid'
import MosaicGridSlide from '../MosaicGridSlide/MosaicGridSlide'



function HomePage() {
const [activeProject, setActiveProject] = useState(false)


function handleResize(){

  if(window.innerWidth <= 720){
    setActiveProject(true)
  }
  else{
    setActiveProject(false)
  }
};


  useEffect(()=>{
    handleResize()
    window.addEventListener('resize', handleResize)
    return ()=> {
      window.removeEventListener('resize', handleResize)
    }
  },[])
  
 
  return (
    <div className='home-page'>
        <div className='container'>
            <Header/>
            <WebexInfo/>
            <ToolsInfo/>
            <OurAdvantages/>
            <Services/>
            <CreateWebsitesAndMobileApp/>
            <VideoCoursesSection/>
            <SlideSection/>
            {activeProject ? <MosaicGridSlide/> : <MosaicGrid/>}
            
        </div>
    </div>
  )
}

export default HomePage