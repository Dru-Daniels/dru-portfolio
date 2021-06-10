import React from "react";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import './projectTile.scss'

const ProjectTile = ({ project }) => {

  const {subtitle, link, title, imgSrc, altTxt, tech, desc} = project
  return (
    <div className="portfolio-container transition3">
        <div className="portfolio-left">
          <div className="inner">
            <p className="subtitle">{subtitle}</p>
            <p className="featured-title">
              <a target="_blank" rel="noopener noreferrer" href={link}>
              {title}
              </a>
            </p>
            <p className="featured-description">
            {desc[0]}
            </p>
            <Popup 
              trigger={<button className="primary-btn">Learn More</button>} 
              position="right center" 
              modal 
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header">{title}</div>
                  <div className="content">
                    <p>{desc[0]}</p>                  
                    <p>{desc[1]}</p>                  
                    <p>{desc[2]}</p>                  
                  </div>
                    <p>Tech 👉 {tech}</p>
                  <div className="actions">
                    <a className="primary-btn" target="_blank" rel="noopener noreferrer" href={link}>
                      View Site <ChevronRightIcon />
                    </a>
                  </div>
              </div>
            )}
          </Popup>
          </div>
          </div>
          <img src={imgSrc} alt={altTxt}/>
      </div>
  );
};

export default ProjectTile;
