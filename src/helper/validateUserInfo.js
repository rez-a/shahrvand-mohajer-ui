const validateUserInfo = (info) => {
  const { name, tel, zip_code, address } = info;
  let validate = {
    name: true,
    tel: true,
    zip_code: true,
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
  if (!zip_code.length || zip_code.length !== 10) {
    validate = {
      ...validate,
      zip_code: false,
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
