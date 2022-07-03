import React,{useState} from 'react'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import HeroSection from '../HeroSection.js';
import InfoSection from '../InfoSection';
import Services from '../Services';
import Footer from '../Footer'
import { homeObjOne,homeObjTwo,homeObjThree,homeObjReversed } from '../InfoSection/Data';
import InfoSectionReversed from '../InfoSectionReversed';
import Gallery from '../Gallery';

function Home() {
    
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
    setIsOpen(!isOpen);
}


  return (
   <>
       <Sidebar isOpen={isOpen} toggle={toggle} />
       <NavBar toggle={toggle} />
       <HeroSection/>
       <InfoSection {...homeObjOne}/>
       <InfoSectionReversed {...homeObjReversed}/>
       <Gallery/>
       <Services/>
       <InfoSection {...homeObjTwo}/>
       <InfoSectionReversed {...homeObjThree}/>
       <Footer/>
   </>
  )
}

export default Home;