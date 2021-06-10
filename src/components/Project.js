import React from 'react' 

import ProjectTile from './ProjectTile'

import './project.scss'

const Project = ({projectData}) => {
  
  const ProjectList = projectData.map(project => {
    return (
      <ProjectTile
        key={project.id_str} 
        project={project} 
      />
      )
    })

  return (
    <section className="portfolio" id="projects">
      {ProjectList}
    </section>
  )
}

export default Project