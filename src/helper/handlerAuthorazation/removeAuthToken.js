import Cookies from 'js-cookie';

const removeAuthToken = (key) => Cookies.remove(key);

export default removeAuthToken;
