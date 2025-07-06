import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})


api.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      const { status, data } = error.response
     
      return Promise.reject({
        status,
        message: data?.message || 'Request failed',
        data: data?.errors || null
      })
    }
    return Promise.reject(error)
  }
)

export default api