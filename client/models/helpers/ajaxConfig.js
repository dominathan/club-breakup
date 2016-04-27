import Model from 'ampersand-model'
import App from 'ampersand-app'

export default Model.extend({
  ajaxConfig () {
    return {
      headers: {
        'Access-Token': App.me.token,
        'Access-User': App.me.id
      }
    }
  }
})
