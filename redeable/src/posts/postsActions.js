import axios from 'axios'

const URL = 'http://localhost:3001'
export const setList = (value) => ({type: 'CHANGE_SCORE', value})

const config = {
  headers: {'Authorization': 'whatever-you-want'}
}

export const search = () => {
  return(dispatch) => {
    return axios.get(`${URL}/posts`,  config )
      .then(resp => dispatch({type: 'POST_SEARCHED', payload: resp.data}))
  }
}

export const changeScorePost = (id, isUpVote) => {
  return dispatch => {
    return axios.post(`${URL}/posts/${id}`, { 'option' : isUpVote ? 'upVote' : 'downVote' }, config)
      .then(resp => dispatch(search()))
  }
}
  