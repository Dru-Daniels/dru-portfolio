import React from 'react' 
import './project.scss'

const Project = (props) => {
  
  const ainstein = (
    <a target="_blank" rel="noopener noreferrer" href="https://www.ainsteinai.com/">
      <img src="/ainstein.png" alt="Anstein AI Homepage"/>
    </a>
  )

  const kariomi = (
    <a target="_blank" rel="noopener noreferrer" href="https://kariomi.herokuapp.com/">
      <img src="/kariomi.png" alt="Kariomi Homepage"/>
    </a>
  )

  const sokoWars = (
    <a target="_blank" rel="noopener noreferrer" href="https://soko-wars.netlify.app">
      <img src="/sokoImgClr.png" alt="Soko Wars Homepage"/>
    </a>

  )

  const redwood = (
    <a target="_blank" rel="noopener noreferrer" href="https://www.redwoodmediation.com/">
      <img src="/redwood.png" alt="Soko Wars Homepage"/>
    </a>
  )

  return (
    <section className="portfolio">
      
      <div className="portfolio-container transition3">
        <div class="portfolio-left">
          <div className="inner">
            <p className="featured-title">KariOmi</p>
            <p className="featured-description">
            As a 3rd Wave AI System, Ainstein is an Autonomous Platform developed out of MIT to identify new patterns, generate explanations, and create contextual models that can Reason – with full transparency – and without prior training or matching.
            </p>
            <p>
              Ainstein Cubes bring AI to Portfolios, with Automated AI-level Advice and "Always On"​ Surveillance. There is also a Compliance angle, with applications for MiFID II. 
            </p>
            <p>
            Role: Contracted Full Stack Developer. Duties include fixing bugs to get 3D Cube demo ready to show investors and converting legacy code and converting the front end to React Framework. 
            </p>
            <p>Tech 👉 JS, C#, CSS, Bootstrap, React, Azure, DevOps, ThreeJS</p>
          </div>
        </div>
          {ainstein}
      </div>

      <div className="portfolio-container transition3">
        <div class="portfolio-left">
          <div className="inner">
            <p className="featured-title">Ainstein AI</p>
            <p className="featured-description">
            KariOmi is a full stack app where users can save and rate karaoke performances, track their “go-to” songs, and easily learn new songs. The app integrates a custom Icon ratings form to show fun song stats. AWS-S3 stores video performances on a popup within a user’s custom “go-to” song list.
            </p>
            <p>
            The Youtube API is utilized to create customizable song cards that hold a karaoke and lyric video of the user’s choosing inside a CSS IPod design. The MusixMatch API adds lyrics when available.
            </p>
            <p>
            The back end uses Node.js with Knex and Objection to query the PostgreSQL database, while front end technologies include React with CSS, custom animations, and Ant’d components.
            </p>
          </div>
        </div>
          {kariomi}
      </div>

      <div className="portfolio-container transition3">
        <div class="portfolio-left">
          <div className="inner">
            <p className="featured-title">Soko Wars</p>
            <p className="featured-description">
            Winner of Mint Bean's Hackathon, Sokowars is a Star Wars themed desktop Sokoban game that I made in 1 week with my wonderful hackathon team: Java the Hut. The application had to be a front end web application, with no backend or server components.
            </p>
            <p>
            The project gave me a much better understanding of how to use TypeScript and better utilize open-source frameworks for developing applications. It was so much fun watching our app come together! I'm incredibly proud of my team. Not only because of the application we produced, but for the amazing culture we formed along the way.
            </p>
            <p>
            Tech 👉 ReactJS, TypeScript, CSS, SASS, and for the first time: the Phaser3 game framework.
            </p>
          </div>
        </div>
          {sokoWars}
      </div>

      <div className="portfolio-container transition3">
        <div class="portfolio-left">
          <div className="inner">
            <p className="featured-title">Redwood Mediation</p>
            <p className="featured-description">
            Front end design and maintenance. Added blog and online zoom services to increase traffic, inspire others, and create accessibility during Covid.
            </p>
            <p>
            Develop ongoing digital media marketing strategy and branding campaign to increase online presence.
            </p>
            <p>
            Craft logos, digital and print media and advertising campaigns.
            </p>
          </div>
        </div>
          {redwood}
      </div>

    </section>
  )
}

export default Project