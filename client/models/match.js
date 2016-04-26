import Model from 'ampersand-model'

export default Model.extend({
  url: '/api/targets',

  initialize () {
  },

  props: {
    id: 'number',
    tinder_id: 'string',
    name: 'string',
    bio: 'string',
    gender: 'string',
    fake_account_id: 'number',
    user_id: 'number',
    birth_date: 'string',
    match_id: 'string',
    accessible: 'boolean',
    photo_url: 'string'
  },

  session: {

  },

  derived: {
    age: {
      deps: ['birth_date'],
      fn () {
        const jsBirthday = new Date(this.birth_date)
        const ageDifMs = Date.now() - jsBirthday.getTime()
        const ageDate = new Date(ageDifMs)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
      }
    },
    sex: {
      deps: ['gender'],
      fn () {
        return this.gender === 0 ? 'Male' : 'Female'
      }
    }
  }

})
