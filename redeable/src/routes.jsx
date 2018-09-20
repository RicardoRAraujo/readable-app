import React from 'react'
import { Router, Route, Redirect, browserHistory, IndexRedirect } from 'react-router'

import Main from './main/main'
import Posts from './posts/posts'
import About from './about/about'

export default props => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRedirect to="posts" />
      <Route path="posts" component={Posts} />
      <Route path="about" component={About} />
      <Redirect from="*" to="posts" />
    </Route>
  </Router>
)