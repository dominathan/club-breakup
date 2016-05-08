import Router from './router'
import app from 'ampersand-app'

require('bootstrap/dist/css/bootstrap.css')
require('bootstrap/dist/js/bootstrap.js')
require('./stylesheets/main.scss')

window.app = app

app.extend({
  init () {
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
