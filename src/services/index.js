import axios from 'axios';
import { BASE_URL } from './baseURL';
import Swal from 'sweetalert2';

const baseOptions = {
  baseURL: BASE_URL,
};

export const handleRequest = async (options) => {
  try {
    const response = await axios.request(
      Object.assign(baseOptions, options)
    );

    return response.data;
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'مشکلی رخ داده است',
      text: 'لطفا صفحه را مجددا بارگذاری کنید ',
      confirmButtonText: 'بارگذاری مجدد ',
    }).then((res) => window.location.reload());
  }
};
