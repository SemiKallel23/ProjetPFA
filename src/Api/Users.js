
import { apiGet, apiPut } from "./StandardApi";


const getUsersApi = async (page = 1, perPage = 3, searchWord, sortName, order, siteReference) => {
    return apiGet(`auth/getAllUsers?page=${page}&perPage=${perPage}&searchWord=${searchWord}&sortName=${sortName}&order=${order}&siteReference=${siteReference}`)
}
const updateUserApi = async (id, body) => {
    return apiPut(`auth/updateUserById/${id}`, body)
}
export {
    getUsersApi,
    updateUserApi,
}