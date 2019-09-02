import React, { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return (
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
          </div>
        </div>
      </div>
    )
  }
}

export default HelloWorld
