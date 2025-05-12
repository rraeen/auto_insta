import axios from 'axios'
const { baseURL } = require('../../axiosConfig')

const loginApi = (payload) => {
  return axios.post(baseURL + '/auth/login', payload)
}
const registerApi = (payload) => {
  return axios.post(baseURL + '/auth/register', payload)
}
const resetPasswordApi = (payload) => {
  return axios.post(baseURL + '/auth/reset-password', payload)
}
const userValidationApi = (payload) => {
  return axios.post(baseURL + '/auth/isAuth', payload)
}

export { loginApi, registerApi,resetPasswordApi,userValidationApi }
