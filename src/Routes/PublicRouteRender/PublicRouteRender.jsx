import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PublicRouteRender(props) {
  const auth = useSelector((state) => state?.auth);
  //auth?.accessToken && auth?.refreshToken && auth?.user
  return auth?.accessToken && auth?.refreshToken && auth?.user ? (
    <Navigate to="/test" replace />
  ) : (
    props.children
  );
}
export default PublicRouteRender;
