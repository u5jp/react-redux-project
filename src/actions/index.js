import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREAT_EVENT = 'CREATE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  console.log(response)
  dispatch({type:READ_EVENTS , response})
}

export const postEvents = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`,values)
  console.log(response)
  dispatch({type:CREAT_EVENT , response})
}