import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search, changeScorePost, deletePost  } from './postsActions'
import Grid from '../template/grid'


class PostsList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.search()
  }

  renderRows() {
    let list = this.props.list
    return list.map(posts => (
      <div key={posts.id}>
        <Grid cols="12" >
          <Grid cols="10"> 
            <h3> <i className="fa fa-file-text-o"> {posts.title}</i>
              <Link to="/about"> <i className="fa fa-arrow-right"></i></Link>
            </h3>
            <p>Author: {posts.author}</p>
            <div>Nº of comments: {posts.commentCount}</div>
          </Grid>
          <Grid cols="2"> 
            <h3> <i className="fa fa-star-half-o"> Score : {posts.voteScore}</i></h3>
            <div>
              <button className="btn btn-warning" onClick={ () => this.props.changeScorePost(posts.id, false)}>
                <i className="fa fa-minus"></i>
              </button>
              <button className="btn btn-success" onClick={ () => this.props.changeScorePost(posts.id, true)}>
                <i className="fa fa-plus"></i>
              </button>
              <button className="btn btn-danger" onClick={ () => this.props.deletePost(posts.id)}>
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
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
const mapDispatchToProps = (dispatch) => ({ 
  search: bindActionCreators(search, dispatch),
  changeScorePost: bindActionCreators(changeScorePost, dispatch),
  deletePost: bindActionCreators(deletePost, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
