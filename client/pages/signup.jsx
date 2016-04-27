import React from 'react'

export default React.createClass({
  displayName: 'Signup',
  mixins: [],
  getInitialState() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },

  handleChange(event) {
    this.setState({
      username: event.target.value,
      email: event.target.value,
      password: event.target.value,
      confirmPassword: event.target.value
    })
  },

  render () {
    return (
      <div className='row'>
        <div className='center-form panel'>
          <div className='panel-body'>
            <h2 className='text-center'>Sign up</h2>
            <form id='signupForm' method='post' name='signupForm'>
              <div className='form-group has-feedback'>
                <input autofocus='' className='form-control input-lg' name='displayName' placeholder='Username' required='' type='text' value={this.state.username} onChange={this.handleChange} />
              </div>
              <div className='form-group has-feedback'>
                <input className='form-control input-lg' id='email' name='email' placeholder='Email' required='' type='email' value={this.state.email} onChange={this.handleChange}  />
              </div>
              <div className='form-group has-feedback'>
                <input className='form-control input-lg' name='password' placeholder='Password' required='' type='password' value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className='form-group has-feedback'>
                <input className='form-control input-lg' name='confirmPassword' placeholder='Confirm Password' type='password' value={this.state.confirmPassword} onChange={this.handleChange}  />
              </div>
              <p className='text-center text-muted'>
                <small>By clicking on Sign up, you agree to <a href='#'>terms & conditions</a> and <a href='#'>privacy policy</a></small>
              </p>
              <button className='btn btn-lg btn-block btn-primary' type='submit' onClick={this.signup}>Sign up</button>
              <br></br>
              <p className='text-center text-muted'>
                Already have an account? <a href='/login'>Log in now</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
})
