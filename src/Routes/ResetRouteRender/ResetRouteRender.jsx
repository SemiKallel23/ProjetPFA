import { Navigate } from "react-router-dom"
import { useQuery } from "../../Hooks";
import { useDispatch } from "react-redux";
import { setToken } from "../../Redux/Reducers/AuthReducer/AuthReducer";

function ResetRouteRender(props) {
    const dispatch = useDispatch()
    const query = useQuery();
    const token = query.get("token")
    if (token)
        dispatch(setToken({
            accessToken: token,
            refreshToken: null,
            user: null,
        }))
    return !token ? (
        <Navigate to="/login" replace />
    ) : (
        props.children
    )
}
export default ResetRouteRender