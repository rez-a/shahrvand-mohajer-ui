const redirectToGateway = (url) => {
  let currentUrl = window.location.toString();
  window.location = url.replace(currentUrl, url);
};
export default redirectToGateway;
