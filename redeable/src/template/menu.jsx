import React from 'react'

export default props => (
  <nav className="navbar navbar-inverse bg-inverse">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <i className="fa fa-book" aria-hidden="true"> Redeable</i>
        </a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><a href="#/todo">Todo</a></li>
          <li><a href="#/posts">Posts</a></li>
          <li><a href="#/about">About</a></li>
        </ul>
      </div>
    </div>
  </nav>
)