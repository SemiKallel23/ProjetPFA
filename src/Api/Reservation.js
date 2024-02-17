import { apiPost } from "./StandardApi"

const createReservation = async (body) => {
    return apiPost("trajet/createReservation", body)
}

export {
    createReservation
}