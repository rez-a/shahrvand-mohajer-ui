const validateUserInfo = (info) => {
  const { name, tel, address } = info;
  let validate = {
    name: true,
    tel: true,
  };

  if (!name.length) {
    validate = {
      ...validate,
      name: false,
    };
  }
  if (!tel.length) {
    validate = {
      ...validate,
      tel: false,
    };
  }

  return validate;
};

export default validateUserInfo;
