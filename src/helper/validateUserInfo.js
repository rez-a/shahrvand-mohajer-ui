const validateUserInfo = (info) => {
  const { name } = info;
  let validate = {
    name: true,
  };

  if (!name.length) {
    validate = {
      ...validate,
      name: false,
    };
  }

  return validate;
};

export default validateUserInfo;
