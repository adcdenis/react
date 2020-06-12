import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'

export function login(values) {
  return submit(values, `${consts.OAPI_URL}/login`)
}
export function signup(values) {
  return submit(values, `${consts.OAPI_URL}/signup`)
}

function submit(values, url) {
  alert(url)
  return (dispatch) => {
    axios
      .post(url, values)
      .then((resp) => {
        dispatch([{ type: 'USER_FETCHED', payload: resp.data }])
      })
      .catch((e) => {
        if (e.response) {
          alert('1')
          alert(e)
        } else if (e.request) {
          alert('2')
          alert(e.request)
          console.log(e.request)
        }
        e.response.data.errors.forEach((error) => toastr.error('Erro', error))
      })
  }
}

export function logout() {
  return { type: 'TOKEN_VALIDATED', payload: false }
}
export function validateToken(token) {
  return (dispatch) => {
    if (token) {
      axios
        .post(`${consts.OAPI_URL}/validateToken`, { token })
        .then((resp) => {
          dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
        })
        .catch((e) => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
    } else {
      dispatch({ type: 'TOKEN_VALIDATED', payload: false })
    }
  }
}
