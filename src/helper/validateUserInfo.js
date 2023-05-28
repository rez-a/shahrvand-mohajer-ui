const validateUserInfo = (info) => {
  const { name } = info;
  console.log(name);
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
