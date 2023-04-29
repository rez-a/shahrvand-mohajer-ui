const validateUserInfo = (info) => {
  const { name, tel, address } = info;
  let validate = {
    name: true,
    tel: true,
    address: true,
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
  if (!address.length) {
    validate = {
      ...validate,
      address: false,
    };
  }

  return validate;
};

export default validateUserInfo;
