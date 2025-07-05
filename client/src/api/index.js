import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor
api.interceptors.request.use(
  config => {
    // You can add auth tokens here if needed
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      // Handle different HTTP status codes
      const { status } = error.response
      if (status === 401) {
        // Handle unauthorized
      } else if (status === 404) {
        // Handle not found
      }
    }
    return Promise.reject(error)
  }
)

export default api