import { apiGet, apiPost } from "./StandardApi";

const registerApi = async (body) => {
    return apiPost("auth/register", body)
}

const loginApi = async (body) => {
    return apiPost("auth/login", body)
}

const sendMailResetApi = async (body) => {
    return apiPost("auth/forget-password", body)
}

const resetPasswordApi = async (body) => {
    return apiPost("auth/resetPassword", body)
}

const verifConfirmEmailTokenApi = async ()=>{
    return apiGet("auth/mailTokenVerification")
}

const profileApi = async (body) => {
    return apiGet("auth/profile", body)
}

const updateRoleApi = async (body) => {
    return apiGet("auth/update-role", body)
}

    
export {
    loginApi,
    sendMailResetApi,
    resetPasswordApi,
    verifConfirmEmailTokenApi,
    registerApi,
    profileApi,
    updateRoleApi
}
