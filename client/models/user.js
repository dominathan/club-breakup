import Model from 'ampersand-model'
import ajaxConfig from './helpers/ajaxConfig'

export default Model.extend(ajaxConfig, {

  urlRoot: '/api/auth/',
  type: 'user',

  initialize (body) {
    window.localStorage.token = body.token
    this.on('change:token', this.onChangeToken)
  },

  props: {
    id: ['any'],
    username: ['string', true, ''],
    email: ['string', true, '']
  },

  session: {
    token: 'string'
  },

  derived: {
    isLoggedIn: {
      deps: ['token'],
      fn () {
        this.token ? true : false
      }
    }
  },

  onTokenChange () {
    window.localStorage.token = this.token
  }

})
