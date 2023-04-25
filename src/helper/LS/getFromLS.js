const getFromLS = (key, defaultValue) => {
  let value = defaultValue;
  if (!!localStorage.getItem(key)) {
    value = JSON.parse(localStorage.getItem(key));
  }
  return value;
};
export default getFromLS;
