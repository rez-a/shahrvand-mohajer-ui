import setHeaderRequest from 'helper/setHeaderRequest';
import { handleRequest } from 'services';

const dispatcher = async (url, data) => {
  const response = await handleRequest({
    url,
    method: 'post',
    data,
    headers: setHeaderRequest(),
  });
  return response;
};

export default dispatcher;
