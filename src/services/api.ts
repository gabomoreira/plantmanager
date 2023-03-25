import axios from 'axios';

const api = axios.create({
  baseURL: `http://192.168.0.13:9999`,
});

export const keyProject = '@plantmanager';

export default api;
