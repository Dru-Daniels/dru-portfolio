import { BrowserRouter as Router } from "react-router-dom"
import { hot } from "react-hot-loader/root"
import './App.scss';

import Navbar from './layout/Navbar'
import HeroBanner from './components/HeroBanner'
import Feature from './components/Feature'
import Skill from './components/Skill'
import Project from './components/Project'
import SpeedDialTooltipOpen from './components/social-tray/social'

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <HeroBanner />
        <Feature/>
        <Skill/>
        <Project/>
        <SpeedDialTooltipOpen />
      </Router>
    </div>
  );
}

export default hot(App)