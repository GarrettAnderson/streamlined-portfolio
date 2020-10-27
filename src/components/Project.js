import React, { Component } from 'react'
import Projects from "../project-data.js"

var projectData = Projects
console.log(projectData)

class Project extends Component {

state = {
gitlinkVisible: this.props.hasGit
};


  render() {

    const { gitlinkVisible } = this.state
    console.log(gitlinkVisible)


    return (
      <div className="col-md-6 col-lg-3 grid-item">
        <div className="box-masonry">
          <a
            href={this.props.liveUrl}
            title=""
            className="box-masonry-image with-hover-overlay with-hover-icon"
            target="_blank"
          >
            <img src={require(`../images/${this.props.image}.png`)} alt="" className="img-fluid" />
          </a>
          <div className="box-masonry-text">
            <h4>
              <a href={this.props.liveUrl} target="_blank">
                {this.props.name}
              </a>
            </h4>
            <div className="box-masonry-desription">
              <p>{this.props.desc}</p>
              <ol className="project-site-links">
                <li id="github-link" className={`githubLink ${!gitlinkVisible ? 'hidden' : ''}`}>
                  <a href={this.props.githubUrl} target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={this.props.liveUrl} target="_blank">
                    Live Site
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
