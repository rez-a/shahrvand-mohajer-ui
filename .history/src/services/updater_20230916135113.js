import { handleRequest } from 'services';

export const remove = async (url, data) => {
  const response = await handleRequest({
    url,
    method: 'delete',
  });
  return response.data;
};

export const store = async (url, data) => {
  const response = await handleRequest({
    url,
    method: 'post',
    data,
  });
  return response.data;
};


export const updater = async (url, data) => {
  const response = await handleRequest({
    url,
    method: 'put',
    data,
  });
  return response.data;
};