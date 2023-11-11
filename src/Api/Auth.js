
import { apiGet, apiPost } from "./StandardApi";


const loginApi = async (body) => {
    return apiPost("auth/login", body)
}
const sendMailResetApi = async (body) => {
    return apiPost("auth/sendMailReset", body)
}
const resetPasswordApi = async (body) => {
    return apiPost("auth/resetPassword", body)
}
const verifConfirmEmailTokenApi = async ()=>{
    return apiGet("auth/mailTokenVerification")
}
export {
    loginApi,
    sendMailResetApi,
    resetPasswordApi,
    verifConfirmEmailTokenApi
}
