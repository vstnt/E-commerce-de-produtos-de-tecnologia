import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Content-type': 'application/json'
    }
})

axiosClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default axiosClient