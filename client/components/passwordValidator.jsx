import React from 'react'
import Addons from 'react-addons'
import _ from 'lodash'

let cx = Addons.classSet;

export default React.createClass({

  getInitialState (){
    return {
      value: null,
      minCharacters: this.props.minCharacters,
      requireCapitals: this.props.requireCapitals,
      requireNumbers: this.props.requireNumbers,
      forbiddenWords: this.props.forbiddenWords,
      name: this.props.name
    };
  },

  render (){
    let validatorClass = cx({
      'password_validator':   true,
      'visible':              this.props.visible,
      'invisible':            !this.props.visible
    });

    let forbiddenWords = this.state.forbiddenWords.map(function(word, i) {
      return (
        <span key={i} className="bad_word">
          "{word}"
        </span>
      )
    })

    let validatorTitle;

    if(this.props.valid) {
      validatorTitle =
        <h4 className="validator_title valid">
          {this.props.name} IS OK
        </h4>
    } else {
      validatorTitle =
        <h4 className="validator_title invalid">
          {this.props.name} RULES
        </h4>
    }

    return (
      <div className={validatorClass}>
        <div className="validator_container">

          {validatorTitle}

          <ul className="rules_list">

            <li className={cx({'valid': this.props.validData.minChars})}>
              <span className="error_message">{this.state.minCharacters} characters minimum</span>
            </li>

            <li className={cx({'valid': this.props.validData.capitalLetters})}>
              <span className="error_message">Contains at least {this.state.requireCapitals} capital letter</span>
            </li>

            <li className={cx({'valid': this.props.validData.numbers})}>
              <span className="error_message">Contains at least {this.state.requireNumbers} number</span>
            </li>

            <li className={cx({'valid': this.props.validData.words})}>
              <span className="error_message">Cant be {forbiddenWords}</span>
            </li>

          </ul>
        </div>
      </div>
    )
  }
})
