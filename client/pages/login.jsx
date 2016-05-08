import React from 'react';
import xhr from 'xhr'

import app from 'ampersand-app'
import User from '../models/user'
import Input from '../components/inputElement'
import InputError from '../components/inputError'

export default React.createClass({
  displayName: 'Login',

  getInitialState() {
    return {
      email: '',
      password: '',
      forbiddenWords: ["password", "user", "username"]
    }
  },

  handlePasswordInput (event) {
    this.setState({
      password: event.target.value
    })
  },


  handleEmailInput (event){
    this.setState({
      email: event.target.value
    })
  },

  saveAndContinue (event) {
    event.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    xhr.post({
      json: user,
      uri: '/api/auth/login',
      header: {
        "Content-Type": "application/json"
      }
    }, function(err,resp,body) {
      if(err) {
        throw new Error("Something went wrong", err)
        return
      }
      if(body.error) {
        console.error(body.error)
        return
      };

      let currentUser = new User(body)
      app.user = currentUser
      app.user.token = body.token
      app.router.navigate('/')
    })
  },

  render () {
    return (
      <div className="row">
        <div className="center-form panel">
          <div className="panel-body">
            <h2 className="text-center">Log in</h2>
              <form id="loginForm" name="loginForm" onSubmit={this.saveAndContinue}>

                <Input
                  text="Email Address"
                  ref="email"
                  type="text"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleEmailInput}
                />

                <Input
                  text="Password"
                  type="password"
                  placeholder="Password"
                  ref="password"
                  value={this.state.passsword}
                  onChange={this.handlePasswordInput}
                />

                <button className="btn btn-lg btn-block btn-success" type="submit">Log in</button>
                <br></br>
                <p className="text-center">
                  <a href="/reset-password">Forgot your password?</a>
                </p>
                <p className="text-center text-muted">
                  <small>Already have an account? <a href="/#/login">Login</a></small>
                </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
})
