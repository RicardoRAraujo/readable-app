import React, { Component } from 'react'
import { searchPost, changeScorePost, deletePost } from './postsActions'
import { searchComments } from '../posts/comments/commentsActions'
import PageHeader from '../template/pageHeader'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../template/grid'
import Comments from '../posts/comments/comments'

class PostDetail extends Component {
  constructor(props) {
    super(props)
  }  

  componentDidMount() {
    this.props.searchPost(this.props.params.postId)
    this.props.searchComments(this.props.params.postId)
  }

  printDate(timestamp) {
    const d = new Date(timestamp)
    return d.toUTCString().split(" ").slice(0,4).join(" ")
  }
  
  render() {
    let post = this.props.post
    let data = this.printDate(post.timestamp)
    return(
      <div>
        <PageHeader name="Post" small="Detail" />
        <h2>{post.title}</h2>
        <p>By <b>{post.author}</b> under 
          <font color="red"><b> {post.category} </b></font>
            on <font color="green"><b> {data}</b></font>
        </p>
        <div className="row">
          <Grid cols="10">
            <div className="jumbotron">
              {post.body}
            </div>
          </Grid>
          <Grid cols="2"> 
            <h3> <i className="fa fa-star-half-o"> Score : {post.voteScore} </i></h3>
            <div>
              <button className="btn btn-warning" onClick={() => this.props.changeScorePost(post.id, false)}>
                <i className="fa fa-minus"></i>
              </button>
              <button className="btn btn-success" onClick={() => this.props.changeScorePost(post.id, true)}>
                <i className="fa fa-plus"></i>
              </button>
              <button className="btn btn-danger" onClick={() => this.props.deletePost(post.id)}>
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          </Grid>
        </div>
        <Comments comments={this.props.comments} idPost={post.id}/>
      </div>
    )
  } 
}

const mapStateToProps = state => ({ post: state.posts.post, comments: state.comments.listComments})
const mapDispatchToProps = (dispatch) => ({ 
  searchPost: bindActionCreators(searchPost, dispatch),
  changeScorePost: bindActionCreators(changeScorePost, dispatch),
  deletePost: bindActionCreators(deletePost, dispatch),
  searchComments: bindActionCreators(searchComments, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)


