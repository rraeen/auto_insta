import { axiosInstance } from '../axiosConfig'




const get = (url) => {
  return axiosInstance.get(url)
}

const post = (url, data) => {
  return axiosInstance.post(url, data)
}

const put = (url, data) => {
  return axiosInstance.put(url, data)
}

const deleteAll = (url) => {
  return axiosInstance.delete(url)
}

const getById = (url, id) => {
  return axiosInstance.get(`${url}/${id}`)
}

const deleteById = (url, id) => {
  return axiosInstance.delete(`${url}/${id}`)
}

const serviceUtil = { get, post, put, deleteAll, getById, deleteById }
export default serviceUtil
