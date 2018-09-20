import React, { Component } from 'react'
import { createPost  } from './postsActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import serializeForm from 'form-serialize'


class PostCreate extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }
    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }

  handleSubmit(e) {
    e.preventDefault()
    const values = serializeForm(e.target, { hash:true })
    values['id'] = this.randomString(20)
    values['timestamp'] = new Date().valueOf()
    console.log(values)
    // console.log(this.props.createPost)
    if(this.props.createPost) {
      console.log('entrou')
      this.props.createPost(values)
    }
  }

  render() {
    return(
      <div>
        <a className="close-create-contact" onClick={() => this.props.closeModal()}>Close</a>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <div className="create-contact-details">
            <input type="text" name="author" placeholder="Author"/>
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="body" placeholder="Description"/>
            <input type="text" name="category" placeholder="Category"/>
            <button className="button-contact-add">Add Contact</button>
          </div>
        </form>
      </div>
    )
  } 
}

const mapStateToProps = state => ({ list: state.posts.list})
const mapDispatchToProps = (dispatch) => ({ 
  createPost: bindActionCreators(createPost, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(PostCreate)