import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection';
import SkillsSection from '../components/SkillsSection'

import { homeObjOne} from '../components/InfoSection/Data';
import { skillsObj } from '../components/SkillsSection/Data';
import Project from '../components/Project';

const Home = () => {
  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <SkillsSection {...skillsObj}/>
      <Project />
    </>
  );
};

export default Home
