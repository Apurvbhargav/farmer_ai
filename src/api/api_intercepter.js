import axios from 'axios';

const apiIntercepter = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiIntercepter.interceptors.request.use(
  (config) => {
    const authStorage = localStorage.getItem('farmer-auth-storage');

    if (authStorage) {
      try {
        const parsedStorage = JSON.parse(authStorage);
        const token = parsedStorage?.state?.token;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch {
        localStorage.removeItem('farmer-auth-storage');
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiIntercepter.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('farmer-auth-storage');
      window.location.href = '/login';
    }

    return Promise.reject(error);
  },
);

export default apiIntercepter;