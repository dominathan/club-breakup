import app from 'ampersand-app';
import Router from 'ampersand-router';
import React from 'react';
import ReactDOM from 'react-dom';

import MatchCollection from './collections/matches';
import Layout from './layout';
import Header from './components/navbar';
import Match from './components/match';

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
    '': 'home'
  },

  home() {
    const matches = new MatchCollection();
    matches.fetch()
    this.renderPage(<Match matches={matches} />)
  }
})
