import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import PostsList from './postsList'

export default class Posts extends Component {
  render() {
    return(
      <div>
        <PageHeader name="Todos os Posts" small="Lista" />
        <PostsList />
      </div>
    )
  }
}