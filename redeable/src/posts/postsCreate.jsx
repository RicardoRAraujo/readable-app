import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from './postsActions'
import Grid from '../template/grid'


class PostCreate extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.search()
  }

  renderRows() {
    const list = this.props.list || []
    return list.map(posts => (
      <div key={posts.id}>
        <Grid cols="12" >
          <Grid cols="9"> 
            <h3> <i className="fa fa-file-text-o"> {posts.title}</i></h3>
            <p>Autor: {posts.author}</p>
            <div>Nº de comentarios: {posts.commentCount}</div>
          </Grid>
          <Grid cols="3"> 
            <h3> <i className="fa fa-star-half-o"> Score</i></h3>
            <i className="fa fa-minus fa-2x"> {posts.voteScore}</i> <i className="fa fa-plus fa-2x"></i>
          </Grid>
        </Grid>
      </div>
    ))
  }
  
  render() {
    return(
      <div>
        {this.renderRows()}
      </div>
    )
  } 
}

//"posts.list" está vindo da chave do reducer 
const mapStateToProps = state => ({ list: state.posts.list})
const mapDispatchToProps = dispatch => bindActionCreators({ search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PostCreate)
