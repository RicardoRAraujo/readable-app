import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Posts from '../posts/posts'
import About from '../about/about'
import Todo from '../todo/todo'
import CreatePost from '../posts/postsCreate'

export default props => (
  <BrowserRouter>
    <Router history={hashHistory}>
      <Route path="/todo" component={Todo} />
      <Route path="/posts" component={Posts} />
      <Route path="/about" component={About} />
      <Route path="/create" component={CreatePost} />
      <Redirect from="*" to="/posts" />
    </Router>
  </BrowserRouter>
)