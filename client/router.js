import Router from 'ampersand-router'
import React from 'react'
import ReactDOM from 'react-dom'

import MatchCollection from './collections/matches'
import Layout from './layout'
import Header from './components/navbar'
import Match from './components/match'
import Login from './pages/login'
import Signup from './pages/signup'

export default Router.extend({
  renderPage (page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <div>
          <Header/>
          <Layout>
            {page}
          </Layout>
        </div>
      )
    }

    ReactDOM.render(page, document.getElementById('root'))
  },

  routes: {
    '': 'home',
    'login': 'login',
    'signup': 'signup'
  },

  home () {
    let matches = new MatchCollection()
    matches.fetch()
    this.renderPage(<Match matches={matches} />)
  },

  login () {
    this.renderPage(<Login />)
  },

  signup () {
    this.renderPage(<Signup />)
  }
})
