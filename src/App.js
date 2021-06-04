import { hot } from "react-hot-loader/root"
import './App.scss';
import Navbar from './layout/Navbar'
import HeroBanner from './components/HeroBanner'
import Feature from './components/Feature'
import Skill from './components/Skill'
import Project from './components/Project'
import SpeedDialTooltipOpen from './components/social'
import ScrollTopFab from './components/scroll'

const App = (props) => {
  return (
    <div className="App">
        <Navbar />
        <HeroBanner />
        <Feature/>
        <Skill/>
        <Project/>
        <SpeedDialTooltipOpen />
        < ScrollTopFab/>
    </div>
  );
}

export default hot(App)