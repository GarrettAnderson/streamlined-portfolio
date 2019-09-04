import React, { Component } from 'react'

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
                  <h1 class="sidebar-heading">
                    {' '}
                    <a href="index.html">Creative</a>
                  </h1>
                  <p class="sidebar-p">
                    I am a creative illustrator and graphic designer with more than 10 years of experience.{' '}
                  </p>
                  <p class="sidebar-p">Originally from Toronto, currently based in London. </p>
                  <ul class="sidebar-menu">
                    {/*  Link */}
                    <li class="sidebar-item">
                      <a href="index.html" class="sidebar-link active">
                        Home
                      </a>
                    </li>
                    {/*  Link */}
                    <li class="sidebar-item">
                      <a href="about.html" class="sidebar-link">
                        About
                      </a>
                    </li>
                    {/*  Link */}
                    <li class="sidebar-item">
                      <a href="contact.html" class="sidebar-link">
                        Get in touch
                      </a>
                    </li>
                  </ul>
                  <p class="social">
                    <a href="#" data-animate-hover="pulse" class="external facebook">
                      <i class="fa fa-facebook" />
                    </a>
                    <a href="#" data-animate-hover="pulse" class="external gplus">
                      <i class="fa fa-google-plus" />
                    </a>
                    <a href="#" data-animate-hover="pulse" class="external twitter">
                      <i class="fa fa-twitter" />
                    </a>
                    <a href="#" title="" class="external instagram">
                      <i class="fa fa-instagram" />
                    </a>
                    <a href="#" data-animate-hover="pulse" class="email">
                      <i class="fa fa-envelope" />
                    </a>
                  </p>
                  <div class="copyright text-center text-md-left">
                    <p class="credit">
                      &copy;2018 Your name or company | Template by{' '}
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
                  <button type="button" data-toggle="offcanvas" class="btn btn-outline-primary">
                    <i class="fa fa-align-left mr-2" />Menu
                  </button>
                  <h1 class="small-navbar-heading">
                    <a href="#">Creative </a>
                  </h1>
                </div>
              </div>

              <div class="grid row">
                <div class="col-md-6 col-lg-3 grid-item">
                  <div class="box-masonry">
                    <a href="#" title="" class="box-masonry-image with-hover-overlay">
                      <img src="images/a4-paper.jpg" alt="" className="img-fluid" />
                    </a>
                    <div class="box-masonry-hover-text-header">
                      <a href="#" class="tile-link" />
                      <h4>Name of the work 1</h4>
                      <div class="box-masonry-desription">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa ante, sagittis at
                          lacinia sit amet, sagittis dapibus dolor. Nullam eu ultrices risus, eu congue eros. Sed tempor
                          ipsum quis dignissim tincidunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-3 grid-item">
                  <div class="box-masonry">
                    <a href="#" title="" class="box-masonry-image with-hover-overlay with-hover-icon">
                      <img src="images/business-card-26.jpg" alt="" class="img-fluid" />
                    </a>
                    <div class="box-masonry-text">
                      <h4>
                        <a href="#">Name of the work 2</a>
                      </h4>
                      <div class="box-masonry-desription">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa ante, sagittis at
                          lacinia sit amet, sagittis dapibus dolor. Nullam eu ultrices risus, eu congue eros. Sed tempor
                          ipsum quis dignissim tincidunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-3 grid-item">
                  <div class="box-masonry">
                    <a href="#" title="" class="box-masonry-image with-hover-overlay with-hover-icon">
                      <img src="images/gravity-paper.jpg" alt="" class="img-fluid" />
                    </a>
                    <div class="box-masonry-text">
                      <h4>
                        <a href="#">Name of the work 3</a>
                      </h4>
                      <div class="box-masonry-desription">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa ante, sagittis at
                          lacinia sit amet, sagittis dapibus dolor. Nullam eu ultrices risus, eu congue eros. Sed tempor
                          ipsum quis dignissim tincidunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-3 grid-item">
                  <div class="box-masonry">
                    <a href="#" title="" class="box-masonry-image with-hover-overlay with-hover-icon">
                      <img src="images/gravity-paper.jpg" alt="" class="img-fluid" />
                    </a>
                    <div class="box-masonry-text">
                      <h4>
                        <a href="#">Name of the work 4</a>
                      </h4>
                      <div class="box-masonry-desription">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa ante, sagittis at
                          lacinia sit amet, sagittis dapibus dolor. Nullam eu ultrices risus, eu congue eros. Sed tempor
                          ipsum quis dignissim tincidunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-3 grid-item">
                  <div class="box-masonry">
                    <div class="box-masonry-text">
                      <h4>
                        <a href="detail.html">Item without image</a>
                      </h4>
                      <div class="box-masonry-desription">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa ante, sagittis at
                          lacinia sit amet, sagittis dapibus dolor. Nullam eu ultrices risus, eu congue eros. Sed tempor
                          ipsum quis dignissim tincidunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-3 grid-item">
                  <div class="box-masonry">
                    <a href="#" title="" class="box-masonry-image with-hover-overlay with-hover-icon">
                      <img src="images/label-clothes.jpg" alt="" class="img-fluid" />
                    </a>
                    <div class="box-masonry-text">
                      <h4>
                        <a href="#">Name of the work 4</a>
                      </h4>
                      <div class="box-masonry-desription">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa ante, sagittis at
                          lacinia sit amet, sagittis dapibus dolor. Nullam eu ultrices risus, eu congue eros. Sed tempor
                          ipsum quis dignissim tincidunt.
                        </p>
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
