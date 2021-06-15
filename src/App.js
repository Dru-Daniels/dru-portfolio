import { hot } from "react-hot-loader/root"
import './App.scss';
import Navbar from './layout/Navbar'
import HeroBanner from './components/HeroBanner'
import Feature from './components/Feature'
import Skill from './components/Skill'
import Project from './components/Project'
import CallToAction from './components/CallToAction'
import SpeedDialTooltipOpen from './components/social'
import ScrollTopFab from './components/scroll'
import Footer from './layout/Footer'

import projectData from './constants/projectData'

const mobileMenu = () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const handleClickAway = () => {
  const navMenu1 = document.getElementById("nav-menu");
  navMenu1.classList.remove("active");
};

const App = (props) => {
  return (
    <div className="App">
        <Navbar mobileMenu={mobileMenu} handleClickAway={handleClickAway} />
        <HeroBanner />
        <Feature />
        <Skill />
        <Project projectData={projectData} handleClickAway={handleClickAway}/>
        <CallToAction />
        <SpeedDialTooltipOpen />
        <ScrollTopFab />
        <Footer />
    </div>
  );
}

export default hot(App)