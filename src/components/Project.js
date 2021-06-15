import React from 'react' 

import ProjectTile from './ProjectTile'

import './project.scss'

const Project = ({projectData, handleClickAway}) => {
  
  const ProjectList = projectData.map(project => {
    return (
      <ProjectTile
        key={project.id_str} 
        project={project} 
        handleClickAway={handleClickAway}
      />
      )
    })

  return (
    <section className="portfolio" id="projects">
      <h1 className="title">Works<span className="title title-accent">.</span></h1>
      {ProjectList}
    </section>
  )
}

export default Project