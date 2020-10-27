import React, { Component } from 'react'
import ProjectData from '../project-data'
import Project from './Project'

class Projects extends Component {
  render() {
    return (
      <div class="grid row">
        {ProjectData.map((project) => {
          console.log(project)
          return (
            <Project
              key={project.id}
              image={project.image}
              name={project.name}
              desc={project.desc}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              hasGit={project.hasGit}
            />
          )
        })}
      </div>
    )
  }
}

export default Projects
