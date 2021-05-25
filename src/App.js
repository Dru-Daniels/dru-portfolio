import { BrowserRouter as Router } from "react-router-dom"
import { hot } from "react-hot-loader/root"
import './App.css';

import Navbar from './layout/Navbar'
import AboutPage from './AboutPage'

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AboutPage />
      </Router>
    </div>
  );
}

export default hot(App)