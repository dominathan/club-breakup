import React from 'react'
import Addons from 'react-addons'

let cx = Addons.classSet

export default React.createClass({

  getInitialState () {
    return {
      message: 'Input is invalid'
    }
  },

  render () {
    let errorClass = cx({
      'error_container': true,
      'visible': this.props.visible,
      'invisible': !this.props.visible
    })

    return (
      <div className={errorClass}>
        <span>{this.props.errorMessage}</span>
      </div>
    )
  }
})
