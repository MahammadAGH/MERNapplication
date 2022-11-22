const valid = ({ fullname, username, email, password, cf_password }) => {
  const err = {};

  if (!fullname) {
    err.fullname = "Please add your full name.";
  } else if (fullname.length > 25) {
    err.fullname = "Full name is up to 25 characters long.";
  } else if (fullname.length < 5) {
    err.fullname = "Full name must be minimum 5 characters"
  } 

  if (!username) {
    err.username = "Please add your user name.";
  } else if (username.replace(/ /g, "").length > 25) {
    err.username = "User name is up to 25 characters long.";
  } else if (username.length < 3) {
    err.username = "User name must be minimum 3 characters";
  }

  if (!email) {
    err.email = "Please add your email.";
  } else if (!validateEmail(email)) {
    err.email = "Email format is incorrect.";
  }

  if (!password) {
    err.password = "Please add your password.";
  } else if (password.length < 8) {
    err.password = "Password must be at least 8 characters.";
  } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)) {
    err.password = "Password must contains at least one lower case, one upper case, one numerical and one special character";
  }

  if (password !== cf_password) {
    err.cf_password = "Confirm password did not match.";
  }

  return {
    errMsg: err,
    errLength: Object.keys(err).length,
  };
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid;
