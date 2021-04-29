/**
 * to restrict an input value to be just an alpha numeric with '-' or '_'
 *
 * @param {string} val the string value to validate
 * @returns {boolean} the validation result
 */
export const validateAlphaNumericOnlyInput = (val: string): boolean => {
  return !!val.trim().match(/^[a-z0-9]+[-_]?[a-z0-9]+$/gi);
};

/**
 * to validate an email input
 *
 * @param {string} val the email
 * @returns {boolean} the validation result
 */
export const validateEmail = (val: string): boolean => {
  var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/gi;

  return !!val.trim().match(mailformat);
};

/**
 * to validate a password input
 *
 * @param {string} val the password
 * @returns {boolean} the validation result
 */
export const validatePassword = (val: string): boolean => {
  if (val.length < 6) {
    return false;
  }

  // validate passowrd must contain characters and numbers
  if (!val.match(/[a-z]+/gi)) {
    return false;
  }

  return true;
};
