import axios from 'axios';
import { BASE_URL } from './baseURL';

const baseOptions = {
  baseURL: BASE_URL,
};

export const handleRequest = async (options) => {
  const response = await axios.request(
    Object.assign(baseOptions, options)
  );
  return response.data;
};
