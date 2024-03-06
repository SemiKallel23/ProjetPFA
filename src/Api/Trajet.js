import { apiGet, apiPost, apiPut, apiDelete } from "./StandardApi";

const trajetApi = async (body) => {
    return apiPost("trajet/create", body)
}

const gettrajetApi = async (id) => {
    return apiGet(`trajet/trajet`)
}

const updateTrajetApi = async (body) => {
    return apiPut("trajet/update/:id", body)
}

const deleteTrajetApi = async (body) => {
    return apiDelete("trajet/delete/:id", body)
}

const acceptTrajetApi = async (body) => {
    return apiPost("trajet/acceptReservation", body)
}

const rejectTrajetApi = async (body) => {
    return apiPost("trajet/rejectReservation", body)
}

export {
    trajetApi,
    updateTrajetApi,
    gettrajetApi,
    deleteTrajetApi,
    acceptTrajetApi,
    rejectTrajetApi
}
