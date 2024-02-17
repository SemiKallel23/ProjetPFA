import { createSlice } from "@reduxjs/toolkit"

const initiaState = {
    accessToken: "",
    refreshToken: "",
    user: null,
    role: []
}
const AuthReducer = createSlice({
    name: "auth",
    initialState: initiaState,
    reducers: {
        setToken: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.user = action.payload.user
            state.role = action.payload.role
        },
        resetToken: (state) => {
            state.accessToken = ""
            state.refreshToken = ""
            state.user = null
            state.role = ""
        },
        setRole: (state, action) => {
            state.user = { ...state?.user, role: action.payload.role }
        }
    }
})

export const { setToken, resetToken, setRole } = AuthReducer.actions

export default AuthReducer.reducer
