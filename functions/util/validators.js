const isEmpty = (string) => {
  if (string.trim() === "") {
    return true;
  } else return false;
};

const isEmail = (email) => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  else return false;
};

exports.validateLoginData = (data) => {
  let errors = {};
  if (isEmpty(data.email)) {
    errors.email = "Must not be empty";
  }
  if (isEmpty(data.password)) {
    errors.password = "Must not be empty";
  }
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateSignUpData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Must Not Be Empty";
  } else if (!isEmail(data.email)) {
    errors.email = "Must Be A Valid Email";
  }

  if (isEmpty(data.username)) errors.username = "Must Not Be Empty";
  if (isEmpty(data.password)) errors.password = "Must Not Be Empty";
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Passwords Do Not Match";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};
