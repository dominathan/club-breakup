import React from 'react'
import Addons from 'react-addons'
import _ from 'lodash'

let cx = Addons.classSet;

let InputError = React.createClass({

  getInitialState (){
    return {
      message: 'Input is invalid'
    };
  },

  render (){
    let errorClass = cx({
      'error_container':   true,
      'visible':           this.props.visible,
      'invisible':         !this.props.visible
    });

    return (
      <div className={errorClass}>
        <span>{this.props.errorMessage}</span>
      </div>
    )
  }

})

module.exports = InputError;
