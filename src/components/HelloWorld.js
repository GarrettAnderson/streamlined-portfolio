import React, { Component } from 'react'
import profileImg from '../images/cropHeadShot.png'
import James_Hmpage from '../images/James_Hmpage.png'
import yogiMeImg from '../images/yogiMeImg.png'
import toTheMoviesImg from '../images/toTheMoviesImg.png'
import bombSnifferImg from '../images/bombSnifferImg.png'
import Garrett_Anderson_July_2019 from '../images/Garrett_Anderson_July_2019.pdf'
import erinWedding from '../images/ErinWeddingScreenshot.png'

class HelloWorld extends Component {
  state = {
    navShown: false
  }

  render() {
    return (
      <main>
        <div id="all">
          <div class="container-fluid">
            <div class={`row row-offcanvas row-offcanvas-left ${this.state.navShown ? 'active' : ''}`}>
              {/*  *** SIDEBAR *** */}
              <div id="sidebar" class="col-md-4 col-lg-3 sidebar-offcanvas">
                <div class="sidebar-content">
                  <div class="profile-image-header">
                    <img src={profileImg} alt="professional-headshot" className="profile-image" />
                    <h1 className="sidebar-heading">
                      <a href="index.html">
                        <ol>
                          <li>Garrett</li>
                          <li>Lee Graham</li>
                          <li>Anderson</li>
                        </ol>
                      </a>
                    </h1>
                  </div>
                  <p className="sidebar-p">
                    A Florida native with a global mindset and a passion for building beautiful things. My greatest wish
                    is to bring people together as a tribe. I incorporate this sentiment in my approach to software
                    development, focusing on how to best represent my work and the work I accomplish for clients and
                    employers alike.
                  </p>
                  <p className="sidebar-p">Born and raised in the shadow of the happiest place on earth. </p>
                  {/* <ul className="sidebar-menu"> */}
                  {/*  Link */}
                  {/* <li class="sidebar-item"> */}
                  {/* <i class="fas fa-home" /> */}
                  {/* <a href="/" className="sidebar-link active">
                        Home
                      </a>
                    </li> */}
                  {/*  Link */}
                  {/* <li class="sidebar-item">
                      <a href="#" className="sidebar-link">
                        About
                      </a>
                    </li> */}
                  {/*  Link */}
                  {/* <li class="sidebar-item">
                      <a href="#" className="sidebar-link">
                        Get in touch
                      </a>
                    </li> */}
                  {/* </ul> */}
                  <p className="social">
                    <a href="https://github.com/GarrettAnderson" data-animate-hover="pulse" class="external github">
                      <i className="fab fa-github" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/garrettleegrahamanderson"
                      data-animate-hover="pulse"
                      class="external-linkedin"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a
                      href="https://medium.com/@garrettleegrahamanderson"
                      data-animate-hover="pulse"
                      class="external medium"
                    >
                      <i class="fab fa-medium-m" />
                    </a>
                    <a
                      href="https://github.com/GarrettAnderson/student-resumes"
                      title="resume"
                      class="external instagram"
                      target="_blank"
                    >
                      <i class="far fa-file" />
                    </a>
                  </p>
                  <div class="copyright text-center text-md-left">
                    <p class="credit">&copy;2020 | Garrett L. G. Anderson</p>
                  </div>
                </div>
              </div>

              {/* SIDEBAR END */}
              {/* PORTFOLIO */}
              <div class="col-md-8 col-lg-9 content-column">
                <div class="small-navbar d-flex d-md-none">
                  <button
                    type="button"
                    data-toggle="offcanvas"
                    class="btn btn-outline-primary"
                    onClick={() => this.setState({ navShown: !this.state.navShown })}
                  >
                    <i class="fa fa-align-left mr-2" />About
                  </button>
                  <ol>
                    {/* <li>
                      <img src={profileImg} alt="professional-headshot" className="profile-image" />
                    </li> */}
                    <li>
                      <h1 class="small-navbar-heading">
                        <a href="/">Garrett Anderson</a>
                      </h1>
                    </li>
                  </ol>
                </div>

                <div class="grid row">
                  <div class="col-md-6 col-lg-3 grid-item">
                    <div class="box-masonry">
                      <a
                        href="https://james-photo-gallery-garrettanderson.netlify.com/"
                        title=""
                        class="box-masonry-image with-hover-overlay with-hover-icon"
                        target="_blank"
                      >
                        <img src={James_Hmpage} alt="" class="img-fluid" />
                      </a>
                      <div class="box-masonry-text">
                        <h4>
                          <a href="https://james-photo-gallery-garrettanderson.netlify.com/" target="_blank">
                            James Dean Does Other Stuff
                          </a>
                        </h4>
                        <div class="box-masonry-desription">
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

                  <div class="col-md-6 col-lg-3 grid-item">
                    <div class="box-masonry">
                      <a
                        href="https://yogi-me.herokuapp.com/"
                        target="_blank"
                        title=""
                        class="box-masonry-image with-hover-overlay with-hover-icon"
                      >
                        <img src={yogiMeImg} alt="" class="img-fluid" />
                      </a>
                      <div class="box-masonry-text">
                        <h4>
                          <a href="https://yogi-me.herokuapp.com/" target="_blank">
                            The Yogi Me
                          </a>
                        </h4>
                        <div class="box-masonry-desription">
                          <p>
                            The Yogi Me is a project for yoga instructors providing the ability to create customized
                            yoga classes.
                          </p>
                          <ol className="project-site-links">
                            <li>
                              <a href="https://github.com/GarrettAnderson/capstone" target="_blank">
                                GitHub
                              </a>
                            </li>
                            <li>
                              <a href="https://yogi-me.herokuapp.com/" target="_blank">
                                Live Site
                              </a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-3 grid-item">
                    <div class="box-masonry">
                      <a
                        href="https://to-the-movies-garrettanderson.netlify.com"
                        title=""
                        class="box-masonry-image with-hover-overlay with-hover-icon"
                        target="_blank"
                      >
                        <img src={toTheMoviesImg} alt="" class="img-fluid" />
                      </a>
                      <div class="box-masonry-text">
                        <h4>
                          <a href="https://to-the-movies-garrettanderson.netlify.com" target="_blank">
                            To The Movies
                          </a>
                        </h4>
                        <div class="box-masonry-desription">
                          <p>This is a project showing top showing movies using the TMDB API.</p>
                          <ol className="project-site-links">
                            <li>
                              <a href="https://github.com/GarrettAnderson/to-the-movies" target="_blank">
                                GitHub
                              </a>
                            </li>
                            <li>
                              <a href="https://to-the-movies-garrettanderson.netlify.com" target="_blank">
                                Live Site
                              </a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-3 grid-item">
                    <div class="box-masonry">
                      <a
                        href="https://bomb-sniffer-garrettanderson.netlify.com"
                        title=""
                        class="box-masonry-image with-hover-overlay with-hover-icon"
                        target="_blank"
                      >
                        <img src={bombSnifferImg} alt="" class="img-fluid" />
                      </a>
                      <div class="box-masonry-text">
                        <h4>
                          <a href="https://bomb-sniffer-garrettanderson.netlify.com" target="_blank">
                            Bomb Sniffer
                          </a>
                        </h4>
                        <div class="box-masonry-desription">
                          <p>This is a project using an API to simulate the game minesweeper.</p>
                          <ol className="project-site-links">
                            <li>
                              <a href="https://github.com/GarrettAnderson/bomb-sniffer" target="_blank">
                                GitHub
                              </a>
                            </li>
                            <li>
                              <a href="https://bomb-sniffer-garrettanderson.netlify.com" target="_blank">
                                Live Site
                              </a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-3 grid-item">
                    <div class="box-masonry">
                      <a
                        href="https://www.thebernhardtwedding.com"
                        title=""
                        class="box-masonry-image with-hover-overlay with-hover-icon"
                        target="_blank"
                      >
                        <img src={erinWedding} alt="" class="img-fluid" />
                      </a>
                      <div class="box-masonry-text">
                        <h4>
                          <a href="https://www.thebernhardtwedding.com" target="_blank">
                            The Bernhardt Wedding
                          </a>
                        </h4>
                        <div class="box-masonry-desription">
                          <p>
                            This is a website I built for my sister's upcoming wedding. Built from scratch using
                            ReactJS, CSS3, and HTML5.
                          </p>
                          <ol className="project-site-links">
                            <li>
                              <a href="https://github.com/GarrettAnderson/erins-wedding" target="_blank">
                                GitHub
                              </a>
                            </li>
                            <li>
                              <a href="https://www.thebernhardtwedding.com" target="_blank">
                                Live Site
                              </a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PORTFOLIO END */}
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default HelloWorld
