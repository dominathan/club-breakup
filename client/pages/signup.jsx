import React from 'react'
import xhr from 'xhr'

import app from 'ampersand-app'
import User from '../models/user'
import Input from '../components/inputElement'
import InputError from '../components/inputError'

export default React.createClass({
  displayName: 'Signup',
  mixins: [],
  getInitialState() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      forbiddenWords: ["password", "user", "username"]
    }
  },

  handlePasswordInput (event) {
    if(!_.isEmpty(this.state.confirmPassword)){
      this.refs.passwordConfirm.isValid()
    }
    this.refs.passwordConfirm.hideError()
    this.setState({
      password: event.target.value
    })
  },

  handleConfirmPasswordInput (event) {
    this.setState({
      confirmPassword: event.target.value
    })
  },

  saveAndContinue (e) {
    e.preventDefault()
    let canProceed = this.validateEmail(this.state.email)
        && this.refs.password.isValid()
        && this.refs.passwordConfirm.isValid()

    if(canProceed) {
      let data = {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      }
      this.submitNewUser(data);

      // alert('Thanks.')
    } else {
      this.refs.email.isValid()
      this.refs.username.isValid()
      this.refs.password.isValid()
      this.refs.passwordConfirm.isValid()
    }
  },

  submitNewUser (user) {
    xhr.post({
      json: user,
      uri: '/api/auth/signup',
      header: {
        "Content-Type": "application/json"
      }
    }, function(err,resp,body) {
      if(err) {
        // DO AN ERROR HANDLER ON INVALID USER SHIT
        throw Error("INVALID USER FROM DATABASE HANDLING", err)
        return
      };

      if (body.error) {
        throw Error("INVALID USER FROM DATABASE HANDLING", err)
        return
      }

      let currentUser = new User(body)
      app.user = currentUser
      app.user.token = body.token
      app.router.navigate('/')
    })

  },

  isConfirmedPassword (event) {
    return (event == this.state.password)
  },

  handleEmailInput (event){
    this.setState({
      email: event.target.value
    })
  },

  handleUsernameInput (event){
    this.setState({
      username: event.target.value
    })
  },

  validateEmail (event) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(event)
  },

  validateUsername (event) {
    return true
  },

  isEmpty (value) {
    return !_.isEmpty(value)
  },

  updateStatesValue (value) {
    this.setState({
      statesValue: value
    })
  },

  render () {
    return (
      <div className='row'>
        <div className='center-form panel'>
          <div className='panel-body'>
            <h2 className='text-center'>Sign up</h2>
            <form onSubmit={this.saveAndContinue} id="signupForm">
                <Input
                  text="Username"
                  ref="username"
                  type="text"
                  placeholder="Username"
                  validate={this.validateUsername}
                  value={this.state.username}
                  onChange={this.handleUsernameInput}
                  errorMessage="Username is invalid"
                  emptyMessage="You must supply a username."
                  errorVisible={this.state.showUsernameError}
                />
                <Input
                  text="Email Address"
                  ref="email"
                  type="text"
                  placeholder="Email Address"
                  validate={this.validateEmail}
                  value={this.state.email}
                  onChange={this.handleEmailInput}
                  errorMessage="Email is invalid"
                  emptyMessage="Email can't be empty"
                  errorVisible={this.state.showEmailError}
                />
                <Input
                  text="Password"
                  type="password"
                  placeholder="Password"
                  ref="password"
                  validator="true"
                  minCharacters="8"
                  requireCapitals="0"
                  requireNumbers="0"
                  forbiddenWords={this.state.forbiddenWords}
                  value={this.state.passsword}
                  emptyMessage="Password is invalid"
                  onChange={this.handlePasswordInput}
                />
                <Input
                  text="Confirm password"
                  placeholder="Confirm Password"
                  ref="passwordConfirm"
                  type="password"
                  validate={this.isConfirmedPassword}
                  value={this.state.confirmPassword}
                  onChange={this.handleConfirmPasswordInput}
                  emptyMessage="Please confirm your password"
                  errorMessage="Passwords don't match"
                />
                <p class="text-center text-muted"><small>By clicking on Sign up, you agree to <a href="#">terms & conditions</a> and <a href="#">privacy policy</a></small></p>

              <button
                type="submit"
                className='btn btn-lg btn-block btn-primary'>
                CREATE ACCOUNT
              </button>

                <p class="text-center text-muted">Already have an account? <a href="/#/login">Log in now</a></p>

            </form>
          </div>
        </div>
      </div>
    )
  }
})
