import axios from 'axios'

const URL = 'http://localhost:3001'

const config = {
  headers: {
    'Authorization': 'whatever-you-want',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
}

export const search = () => {
  return(dispatch) => {
    return axios.get(`${URL}/posts`,  config )
      .then(resp => dispatch({type: 'SEARCHED', payload: resp.data}))
  }
}

export const changeScorePost = (id, isUpVote) => {
  return dispatch => {
    return axios.post(`${URL}/posts/${id}`, { 'option' : isUpVote ? 'upVote' : 'downVote' }, config)
      .then(resp => dispatch(search()))
      .then(resp => dispatch(searchPost(id)))
  }
}

export const deletePost = (id) => {
  return dispatch => {
    return axios.delete(`${URL}/posts/${id}`, config)
      .then(resp => dispatch(search()))
      .then(resp => dispatch(searchPost(id)))
  }
} 

export const createPost = (body) => {
  return dispatch => {
    return axios.post(`${URL}/posts`, JSON.stringify(body) , config)
      .then(resp => dispatch(search()))
      .then(() => (alert("Post created")))
  }
}

export const searchPost = (id) => {
  return dispatch => {
    return axios.get(`${URL}/posts/${id}`, config)
      .then(resp => dispatch({type: 'POST_SEARCHED', payload: resp.data}))
  }
}



  