import React, { Component } from 'react'

class Project extends Component {
  render() {
    return (
      <div className="col-md-6 col-lg-3 grid-item">
        <div className="box-masonry">
          <a
            href="https://james-photo-gallery-garrettanderson.netlify.com/"
            title=""
            className="box-masonry-image with-hover-overlay with-hover-icon"
            target="_blank"
          >
            <img src={James_Hmpage} alt="" className="img-fluid" />
          </a>
          <div className="box-masonry-text">
            <h4>
              <a href="https://james-photo-gallery-garrettanderson.netlify.com/" target="_blank">
                James Dean Does Other Stuff
              </a>
            </h4>
            <div className="box-masonry-desription">
              <p>Here is a website showcasing the artwork of a friend of mine.</p>
              <ol className="project-site-links">
                <li>
                  <a href="https://github.com/GarrettAnderson/james-photo-gallery" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://james-photo-gallery-garrettanderson.netlify.com/" target="_blank">
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
