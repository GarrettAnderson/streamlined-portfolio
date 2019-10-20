import React, { Component } from 'react'
import profileImg from '../images/cropHeadShot.png'
import James_Hmpage from '../images/James_Hmpage.png'
import yogiMeImg from '../images/yogiMeImg.png'
import toTheMoviesImg from '../images/toTheMoviesImg.png'
import bombSnifferImg from '../images/bombSnifferImg.png'
import Garrett_Anderson_July_2019 from '../images/Garrett_Anderson_July_2019.pdf'

class HelloWorld extends Component {
  render() {
    return (
      <main>
        <div id="all">
          <div class="container-fluid">
            <div class="row row-offcanvas row-offcanvas-left">
              {/*  *** SIDEBAR *** */}
              <div id="sidebar" class="col-md-4 col-lg-3 sidebar-offcanvas">
                <div class="sidebar-content">
                  <img src={profileImg} alt="professional-headshot" className="profile-image" />
                  <h1 className="sidebar-heading">
                    <a href="index.html">Garrett Lee Graham Anderson</a>
                  </h1>
                  <p className="sidebar-p">
                    A Florida native with a global mindset and a passion for building beautiful things. My greatest wish
                    is to bring people together as a tribe. I incorporate this sentiment in my approach to software
                    development, focusing on how to best represent my work and the work I accomplish for clients and
                    employers alike.
                  </p>
                  <p className="sidebar-p">Born and raised in the shadow of the happiest place on earth. </p>
                  <ul className="sidebar-menu">
                    {/*  Link */}
                    <li class="sidebar-item">
                      <i class="fas fa-home" />
                      <a href="/" className="sidebar-link active">
                        Home
                      </a>
                    </li>
                    {/*  Link */}
                    <li class="sidebar-item">
                      <a href="#" className="sidebar-link">
                        About
                      </a>
                    </li>
                    {/*  Link */}
                    <li class="sidebar-item">
                      <a href="#" className="sidebar-link">
                        Get in touch
                      </a>
                    </li>
                  </ul>
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
                    <a href={Garrett_Anderson_July_2019} title="" class="external instagram">
                      <i class="fa fa-instagram" />
                    </a>
                  </p>
                  <div class="copyright text-center text-md-left">
                    <p class="credit">
                      &copy;2018 Your name or company | Template by
                      <a href="http://bootstrapious.com/portfolio-themes" class="external">
                        Bootstrapious.com
                      </a>
                    </p>
                    {/* Please do not remove the backlink to us, unless you support the development at http://bootstrapious.com/donate. It is part of the license conditions. Thanks for understanding       */}
                  </div>
                </div>
              </div>

              {/* SIDEBAR END */}
              {/* PORTFOLIO */}
              <div class="col-md-8 col-lg-9 content-column">
                <div class="small-navbar d-flex d-md-none">
                  {/* <button type="button" data-toggle="offcanvas" class="btn btn-outline-primary">
                    <i class="fa fa-align-left mr-2" />Menu
                  </button> */}
                  <img src={profileImg} alt="professional-headshot" className="profile-image" />
                  <h1 class="small-navbar-heading">
                    <a href="#">Garrett Lee Graham Anderson</a>
                  </h1>
                </div>

                <div class="grid row">
                  <div class="col-md-6 col-lg-3 grid-item">
                    <div class="box-masonry">
                      <a href="#" title="" class="box-masonry-image with-hover-overlay with-hover-icon">
                        <img src={James_Hmpage} alt="" class="img-fluid" />
                      </a>
                      <div class="box-masonry-text">
                        <h4>
                          <a href="#">Name of the work 2</a>
                        </h4>
                        <div class="box-masonry-desription">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa ante, sagittis at
                            lacinia sit amet, sagittis dapibus dolor. Nullam eu ultrices risus, eu congue eros. Sed
                            tempor ipsum quis dignissim tincidunt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-3 grid-item">
                    <div class="box-masonry">
                      <a href="#" title="" class="box-masonry-image with-hover-overlay with-hover-icon">
                        <img src={yogiMeImg} alt="" class="img-fluid" />
                      </a>
                      <div class="box-masonry-text">
                        <h4>
                          <a href="#">Name of the work 3</a>
                        </h4>
                        <div class="box-masonry-desription">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa ante, sagittis at
                            lacinia sit amet, sagittis dapibus dolor. Nullam eu ultrices risus, eu congue eros. Sed
                            tempor ipsum quis dignissim tincidunt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-3 grid-item">
                    <div class="box-masonry">
                      <a href="#" title="" class="box-masonry-image with-hover-overlay with-hover-icon">
                        <img src={toTheMoviesImg} alt="" class="img-fluid" />
                      </a>
                      <div class="box-masonry-text">
                        <h4>
                          <a href="#">Name of the work 4</a>
                        </h4>
                        <div class="box-masonry-desription">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa ante, sagittis at
                            lacinia sit amet, sagittis dapibus dolor. Nullam eu ultrices risus, eu congue eros. Sed
                            tempor ipsum quis dignissim tincidunt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-3 grid-item">
                    <div class="box-masonry">
                      <a href="#" title="" class="box-masonry-image with-hover-overlay with-hover-icon">
                        <img src={bombSnifferImg} alt="" class="img-fluid" />
                      </a>
                      <div class="box-masonry-text">
                        <h4>
                          <a href="#">Name of the work 4</a>
                        </h4>
                        <div class="box-masonry-desription">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa ante, sagittis at
                            lacinia sit amet, sagittis dapibus dolor. Nullam eu ultrices risus, eu congue eros. Sed
                            tempor ipsum quis dignissim tincidunt.
                          </p>
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
