import { apiGet, apiPost } from "./StandardApi"

const createReservation = async (body) => {
    return apiPost("trajet/createReservation", body)
}

const getReservationAPi = async (body) => {
    return apiGet("trajet/reservation", body)
}
export {
    createReservation,
    getReservationAPi
}