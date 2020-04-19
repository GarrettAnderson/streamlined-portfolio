import React, { Component } from 'react'
import James_Hmpage from '../images/James_Hmpage.png'
import yogiMeImg from '../images/yogiMeImg.png'
import toTheMoviesImg from '../images/toTheMoviesImg.png'
import bombSnifferImg from '../images/bombSnifferImg.png'
import Garrett_Anderson_July_2019 from '../images/Garrett_Anderson_July_2019.pdf'
import erinWedding from '../images/ErinWeddingScreenshot.png'
import diceGameScreenshot from '../images/DiceGameScreenshot.png'
import monsterRolodexScreenshot from '../images/MonsterRolodexScreenshot.png'
import ajaxAhead from '../images/ajaxAhead.png'

class Projects extends Component {
  render() {
    return (
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
                  The Yogi Me is a project for yoga instructors providing the ability to create customized yoga classes.
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
                  This is a website I built for my sister's upcoming wedding. Built from scratch using ReactJS, CSS3,
                  and HTML5.
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

        <div class="col-md-6 col-lg-3 grid-item">
          <div class="box-masonry">
            <a
              href="https://dice-game-garrettgraham.netlify.com/"
              title=""
              class="box-masonry-image with-hover-overlay with-hover-icon"
              target="_blank"
            >
              <img src={diceGameScreenshot} alt="" class="img-fluid" />
            </a>
            <div class="box-masonry-text">
              <h4>
                <a href="https://dice-game-garrettgraham.netlify.com/" target="_blank">
                  Dice Game
                </a>
              </h4>
              <div class="box-masonry-desription">
                <p>This is a dice game built built using HTML5, CSS3, and JavaScript.</p>
                <ol className="project-site-links">
                  <li>
                    <a href="https://github.com/GarrettAnderson/dice-game" target="_blank">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://dice-game-garrettgraham.netlify.com/" target="_blank">
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
              href="https://monsters-rolodex-garrettgraham.netlify.com"
              title=""
              class="box-masonry-image with-hover-overlay with-hover-icon"
              target="_blank"
            >
              <img src={monsterRolodexScreenshot} alt="" class="img-fluid" />
            </a>
            <div class="box-masonry-text">
              <h4>
                <a href="https://monsters-rolodex-garrettgraham.netlify.com" target="_blank">
                  Monsters Rolodex
                </a>
              </h4>
              <div class="box-masonry-desription">
                <p>
                  This is an application consuming a RESTful API to render a list of avatars including some information
                  of each. Built using HTML5, CSS3, and ReactJS.
                </p>
                <ol className="project-site-links">
                  <li>
                    <a href="https://github.com/GarrettAnderson/monsters-rolodex" target="_blank">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://monsters-rolodex-garrettgraham.netlify.com" target="_blank">
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
              href="https://ajax-type-ahead-garrettgraham.netlify.app/"
              title=""
              class="box-masonry-image with-hover-overlay with-hover-icon"
              target="_blank"
            >
              <img src={ajaxAhead} alt="" class="img-fluid" />
            </a>
            <div class="box-masonry-text">
              <h4>
                <a href="https://monsters-rolodex-garrettgraham.netlify.com" target="_blank">
                  Search by City/ State
                </a>
              </h4>
              <div class="box-masonry-desription">
                <p>
                  This is an application consuming a RESTful API to render a list of cities and states. The user is able
                  to type in the search bar to receive a list of cities that match the search parameters. Built using
                  HTML5, CSS3, and vanilla JavaScript.
                </p>
                <ol className="project-site-links">
                  <li>
                    <a href="https://github.com/GarrettAnderson/ajax-type-ahead" target="_blank">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://ajax-type-ahead-garrettgraham.netlify.app/" target="_blank">
                      Live Site
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
