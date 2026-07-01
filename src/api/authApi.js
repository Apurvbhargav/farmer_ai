import apiIntercepter from './api_intercepter';

export const loginFarmer = async (payload) => {
  const response = await apiIntercepter.post('/auth/login', payload);
  return response.data;
};

export const registerFarmer = async (payload) => {
  const response = await apiIntercepter.post('/auth/register', payload);
  return response.data;
};