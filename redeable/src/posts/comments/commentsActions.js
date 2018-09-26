import axios from 'axios'

const URL = 'http://localhost:3001'

const config = {
  headers: {
    'Authorization': 'whatever-you-want',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
}

export const searchComments = (id) => {
  return(dispatch) => {
    return axios.get(`${URL}/posts/${id}/comments`,  config )
      .then(resp => dispatch({type: 'SEARCHED_COMMENTS', payload: resp.data}))
  }
}

export const deleteComments = (id, idPost) => {
  return(dispatch) => {
    return axios.delete(`${URL}/comments/${id}`,  config )
      .then(resp => dispatch(searchComments(idPost)))
  }
}

export const changeScoreComment = (id, idPost, isUpVote) => {
  return(dispatch) => {
    return axios.post(`${URL}/comments/${id}`, { 'option' : isUpVote ? 'upVote' : 'downVote' }, config )
      .then(resp => dispatch(searchComments(idPost)))
  }
}

export const createComments = (body, idPost) => {
  return dispatch => {
    return axios.post(`${URL}/comments`, JSON.stringify(body) , config)
      .then(resp => dispatch(searchComments(idPost)))
      .then(() => (alert("Comment created")))
  }
}





// export const searchPostsCategories = (category) => {
//   return(dispatch) => {
//     return axios.get(`${URL}/${category}/posts`,  config )
//       .then(resp => dispatch({type: 'SEARCHED_CATEGORY_POSTS', payload: resp.data}))
//   }
// }