import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRouteRender(props) {
  const auth = useSelector((state) => state?.auth);
  //!auth?.accessToken && !auth?.refreshToken && !auth?.user
  return false ? <Navigate to="/login" replace /> : props.children;
}
export default PrivateRouteRender;
