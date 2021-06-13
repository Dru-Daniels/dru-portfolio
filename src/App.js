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

const App = (props) => {
  return (
    <div className="App">
        <Navbar />
        <HeroBanner />
        <Feature />
        <Skill />
        <Project projectData={projectData} />
        <CallToAction />
        <SpeedDialTooltipOpen />
        <ScrollTopFab />
        <Footer />
    </div>
  );
}

export default hot(App)