import React, { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return <section>

<div id="all">
    <div class="container-fluid">
      <div class="row row-offcanvas row-offcanvas-left"> 
        {/* <!--   *** SIDEBAR ***--> */}
        <div id="sidebar" class="col-md-4 col-lg-3 sidebar-offcanvas">
          <div class="sidebar-content">
            <h1 class="sidebar-heading"> <a href="index.html">Creative</a></h1>
            <p class="sidebar-p">I am a creative illustrator and graphic designer with more than 10 years of experience. </p>
            <p class="sidebar-p">Originally from Toronto, currently based in London. </p>
            <ul class="sidebar-menu">
                {/* <!-- Link--> */}
                <li class="sidebar-item"><a href="index.html" class="sidebar-link active">Home</a></li>
                {/* <!-- Link--> */}
                <li class="sidebar-item"><a href="about.html" class="sidebar-link">About</a></li>
                {/* <!-- Link--> */}
                <li class="sidebar-item"><a href="contact.html" class="sidebar-link">Get in touch</a></li>
            </ul>
            <p class="social"><a href="#" data-animate-hover="pulse" class="external facebook"><i class="fa fa-facebook"></i></a><a href="#" data-animate-hover="pulse" class="external gplus"><i class="fa fa-google-plus"></i></a><a href="#" data-animate-hover="pulse" class="external twitter"><i class="fa fa-twitter"></i></a><a href="#" title="" class="external instagram"><i class="fa fa-instagram"></i></a><a href="#" data-animate-hover="pulse" class="email"><i class="fa fa-envelope"></i></a></p>
            <div class="copyright text-center text-md-left">
              <p class="credit">&copy;2018 Your name or company | Template by <a href="http://bootstrapious.com/portfolio-themes" class="external">Bootstrapious.com</a></p>
              {/* <!-- Please do not remove the backlink to us, unless you support the development at http://bootstrapious.com/donate. It is part of the license conditions. Thanks for understanding :)        --> */}
            </div>
          </div>
        </div>
        {/* <!--   *** SIDEBAR END ***  -->
        <!--   *** PORTFOLIO ***--> */}
        <div class="col-md-8 col-lg-9 content-column">
          <div class="small-navbar d-flex d-md-none">
            <button type="button" data-toggle="offcanvas" class="btn btn-outline-primary"> <i class="fa fa-align-left mr-2"></i>Menu</button>
            <h1 class="small-navbar-heading"> <a href="index.html">Creative </a></h1>
          </div>
          <div class="grid row">
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay"><img src="img/portfolio/a4-paper.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-hover-text-header"> <a href="detail.html" class="tile-link">  </a>
                  <h4>Name of the work 1</h4>
                  <div class="box-masonry-desription">
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay with-hover-icon"><img src="img/portfolio/business-card-26.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-text"> 
                  <h4> <a href="detail.html">Name of the work 2</a></h4>
                  <div class="box-masonry-desription">
                    <p> When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay with-hover-icon"><img src="img/portfolio/gravity-paper.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-text"> 
                  <h4> <a href="detail.html">Name of the work 3</a></h4>
                  <div class="box-masonry-desription">
                    <p>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> 
                <div class="box-masonry-text"> 
                  <h4> <a href="detail.html">Item without image</a></h4>
                  <div class="box-masonry-desription">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay"><img src="img/portfolio/business-card.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-hover-text-header"> <a href="detail.html" class="tile-link">  </a>
                  <h4>Name of the work 5</h4>
                  <div class="box-masonry-desription">
                    <p>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> 
                <div class="box-masonry-text"> 
                  <h4> <a href="detail.html">Name of the work 6</a></h4>
                  <div class="box-masonry-desription">
                    <p>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay with-hover-icon"><img src="img/portfolio/label-clothes.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-text"> 
                  <h4> <a href="detail.html">Name of the work 7</a></h4>
                  <div class="box-masonry-desription">
                    <p>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay with-hover-icon"><img src="img/portfolio/ipad-air-2.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-text"> 
                  <h4> <a href="detail.html">Name of the work 8</a></h4>
                  <div class="box-masonry-desription">
                    <p>Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay with-hover-icon"><img src="img/portfolio/envelope-brand.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-text"> 
                  <h4> <a href="detail.html">Item with image</a></h4>
                  <div class="box-masonry-desription">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay"><img src="img/portfolio/trifold.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-hover-text-header"> <a href="detail.html" class="tile-link">  </a>
                  <h4>Item with image</h4>
                  <div class="box-masonry-desription">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 grid-item"> 
              <div class="box-masonry"> <a href="detail.html" title="" class="box-masonry-image with-hover-overlay"><img src="img/portfolio/paper-presentation.jpg" alt="" class="img-fluid"></a>
                <div class="box-masonry-hover-text-header"> <a href="detail.html" class="tile-link">  </a>
                  <h4>Item with image</h4>
                  <div class="box-masonry-desription">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--   *** PORTFOLIO END ***--> */}
      </div>
    </div>
  </div>
    </section>
  }
}
export default HelloWorld
