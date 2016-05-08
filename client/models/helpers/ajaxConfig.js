import Model from 'ampersand-model'
import App from 'ampersand-app'

export default Model.extend({
  ajaxConfig () {
    return {
      headers: {
        'Authorization': App.user.token,
        'Access-User': App.user.email
      }
    }
  }
})
