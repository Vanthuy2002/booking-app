import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
});

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response;
  }
);

export default api;
