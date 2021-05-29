import { BrowserRouter as Router } from "react-router-dom"
import { hot } from "react-hot-loader/root"
import './App.css';

import Navbar from './layout/Navbar'
import HeroBanner from './HeroBanner'

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <HeroBanner />
      </Router>
    </div>
  );
}

export default hot(App)