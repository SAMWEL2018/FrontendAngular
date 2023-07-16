import axios, { AxiosInstance } from 'axios';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Create an instance of Axios with the desired configuration
const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    // Include the CSRF token in the headers
    'Content-Type': 'application/json',
    //'X-CSRF-Token': ''
  }
});

export default api;
