const setToLS = (key, newValue) =>
  localStorage.setItem(key, JSON.stringify(newValue));

export default setToLS;
