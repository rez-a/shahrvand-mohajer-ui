import axios from 'axios';
import { BASE_URL } from './baseURL';

const baseOptions = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const handleRequest = (options) =>
  axios.request(Object.assign(baseOptions, options));
