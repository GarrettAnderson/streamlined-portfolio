import React, { Component } from 'react'

class MobileNav extends Component {
  render() {
    return (
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
          <li>
            <h1 class="small-navbar-heading">
              <a href="/">Garrett Anderson</a>
            </h1>
          </li>
        </ol>
      </div>
    )
  }
}

export default MobileNav
