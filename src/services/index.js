import axios from 'axios';
import { BASE_URL } from './baseURL';
import Toast from 'utilities/sweetAlert';

const baseOptions = {
  baseURL: BASE_URL,
};

export const handleRequest = async (options) => {
  try {
    const response = await axios.request(
      Object.assign(baseOptions, options)
    );
    if (response.status !== 200) {
      throw new Error(response);
    }
    return response.data;
  } catch (err) {
    Toast.fire({
      icon: 'error',
      text: err.response.data.message,
      position: 'bottom',
    });
  }
};
