import React from 'react';

export default React.createClass({
  displayName: 'Login',

  render () {
    return (
      <div className="row">
        <div className="center-form panel">
          <div className="panel-body">
            <h2 className="text-center">Log in</h2>
            <form id="loginForm" method="post" name="loginForm">
              <div className="form-group has-feedback">
                <input autofocus="" className="form-control input-lg" name="email" placeholder="Email" required type="text" />
                <span className="ion-at form-control-feedback"></span>
              </div>
              <div className="form-group has-feedback">
                <input className="form-control input-lg" name="password" placeholder="Password" required type="password" />
                <span className="ion-key form-control-feedback"></span>
              </div>
              <button className="btn btn-lg btn-block btn-success" type="submit">Log in</button>
              <br></br>
              <p className="text-center">
                <a href="/reset-password">Forgot your password?</a>
              </p>
              <p className="text-center text-muted">
                <small>Don't have an account yet? <a href="/signup">Sign up</a></small>
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
})
