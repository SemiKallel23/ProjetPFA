import { store } from "../../Redux/Store"


function getRefreshToken() {
  const refreshToken = store.getState().auth.refreshToken;
  return refreshToken
}

function getAccessToken() {
  const accessToken = store.getState().auth.accessToken;

  return accessToken
}
function createState({ value = "" }) {
  return {
    value: value,
    isValid: false,
    isInvalid: false,
    errorMessage: "",
  }
}

function formatDateFromNumber(dateNumber) {
  const date = new Date(dateNumber);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
export {
  getAccessToken,
  getRefreshToken,
  createState,
  formatDateFromNumber,
}