import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;

const axiosInstance = axios.create({ baseURL });

const setupInterceptors = (store) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const { user } = store.getState().user;
      const token = user?.token;

      config.headers = {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${token}`,
        ...config.headers,
      };
      return config;
    },
    (error) => Promise.reject(error)
  );
};

export { axiosInstance, baseURL, setupInterceptors };
