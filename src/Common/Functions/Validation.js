const EValid = {
  start: 0,
  valid: 1,
  notValid: 2,
};

export const hasUperCase = (str) => {
  return /[A-Z]/.test(str);
};
export const hasLowerCase = (str) => {
  return /[a-z]/.test(str);
};
export const hasNumber = (str) => {
  return /[0-9]/.test(str);
};
export const hasSpecialCaracter = (str) => {
  return /[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/.test(str);
};
export const isMail = (str) => {
  return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
    str
  );
};
export const validPassword = (str) => {
  return (
    hasUperCase(str) &&
    hasLowerCase(str) &&
    hasSpecialCaracter(str) &&
    hasNumber(str) &&
    str.length >= 8
  );
};
function hasCharacters(str) {
  return str.trim() !== "";
}
function isValidPhoneNumber(phoneNumber) {
  var regex = /^[\d]*$/;
  return regex.test(phoneNumber);
}
function sameString(world1, world2) {
  return world1 === world2;
}

const onValid = (key, value) => {
  switch (key) {
    case "email":
      if (!isMail(value)) {
        return EValid.notValid;
      }
      return EValid.valid;
    case "password":
      if (!validPassword(value)) {
        return EValid.notValid;
      }
      return EValid.valid;
    case "string":
      if (!hasCharacters(value)) {
        return EValid.notValid;
      }
      return EValid.valid;
    case "phone":
      if (!isValidPhoneNumber(value)) {
        return EValid.notValid;
      }
      return EValid.valid;
    default:
      break;
  }
};
const isPhone = () => {
  return false;
};
const listValidation = {
  isNotEmpty: hasCharacters,
  isMail: isMail,
  hasUperCase: hasUperCase,
  hasNumber: hasNumber,
  hasLowerCase: hasLowerCase,
  isValidPhoneNumber: isValidPhoneNumber,
  validPassword: validPassword,
  identicalPassword: sameString,
  isPhone: isPhone,
};
const formValidation = ({ list, state }) => {
  const res = {};
  let verif = true;
  for (let index = 0; index < list.length; index++) {
    for (let i = 0; i < list[index].validation.length; i++) {
      const fnType = listValidation[list[index].validation[i].type];
      const key = list[index].value;
      const value = state[key].value;
      if (!fnType(value, list[index]?.validation[i].firstPassword)) {
        const errorMsg = list[index].validation[i].error;
        res[key] = {
          value: value,
          isValid: false,
          isInvalid: true,
          errorMessage: errorMsg ? errorMsg : "",
        };
        verif = false;
        break;
      } else {
        res[key] = {
          value: value,
          isValid: true,
          isInvalid: false,
          errorMessage: null,
        };
      }
    }
  }
  return { res, verif };
};

export { onValid, hasCharacters, isValidPhoneNumber, formValidation };
