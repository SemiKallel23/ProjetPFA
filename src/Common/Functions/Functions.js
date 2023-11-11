import {store} from "../../Redux/Store"


function getRefreshToken() {
    const refreshToken = store.getState().auth.refreshToken;
    return refreshToken
}

function getAccessToken() {
    const accessToken = store.getState().auth.accessToken;

    return accessToken
}
function createState({ value = "" })  {
    return {
      value: value,
      isValid: false,
      isInvalid: false,
      errorMessage: "",
    }
  }
  
export {
    getAccessToken,
    getRefreshToken,
    createState
}