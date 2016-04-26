import React from 'react'

export default React.createClass({
  displayName: 'Navbar',
  render () {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar-collapse-1' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a href='/#/' className='navbar-brand' id='title'><span>Tinder</span>garten</a>
          </div>
          <div className='collapse navbar-collapse' id='navbar-collapse-1'>
            <ul className='nav navbar-nav navbar-right'>

              <li><a href='#'>Home</a></li>
              <li><a href='#'>Tinder Fails</a></li>
              <li><a href='#'>How It Works</a></li>
              <li><a>Global Chat</a></li>
              <li><a href='#'>Sign in</a></li>
              <li><a href='#'>Sign Up</a></li>
              <li className='dropdown'>
                <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Profile <span className='caret'></span></a>
                <ul className='dropdown-menu'>
                  <li><a href='#'>My Profile</a></li>
                  <li><a href='#'>My Matches</a></li>
                  <li role='separator' className='divider'></li>
                  <li><a href='#'>Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})
