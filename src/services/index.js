import axios from 'axios';
import { BASE_URL } from './baseURL';

const baseOptions = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const handleRequest = async (options) => {
  const response = await axios.request(
    Object.assign(baseOptions, options)
  );
  return response.data;
};
