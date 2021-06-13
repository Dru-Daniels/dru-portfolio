import React from "react";
import './footer.scss'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Footer = () => {
  return (
    <div className="footer">
      
      <p className="footer-farewell">
        <ArrowBackIosIcon/>
        Thanks for stopping by! Don't forget to hover the heart before you go.
      </p>
    </div>
  )
}

export default Footer;
