import Router from 'ampersand-router';
import React from 'react';
import ReactDOM from 'react-dom'
import Layout from './layout';
import Header from './components/navbar.js';

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
    this.renderPage(null)
  }
})
