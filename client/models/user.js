import Model from 'ampersand-model'
import ajaxConfig from './helpers/ajaxConfig'

export default Model.extend(ajaxConfig,{
  
  urlRoot: '/api/auth/',
  type: 'user',

  props: {
    id: ['any'],
    username: ['string',true,''],
    email: ['string',true,'']
  },

  session: {
    token: 'string'
  }

})
