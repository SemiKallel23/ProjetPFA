import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouteRender from "./PublicRouteRender/PublicRouteRender";
import PublicRoute from "./PublicRoute/PublicRoute";
import PrivateRouteRender from "./PrivateRouteRender/PrivateRouteRender";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { ForgetPassword, Login, ResetPassword, PagePrincipale } from "../Pages";
import ConfirmEmail from "../Pages/ConfirmEmail/ConfirmEmail";
import Home from "../Pages/Home/Home";
import Inscription from "../Pages/Inscription/Inscription";
import ProposeRoute from "../Pages/ProposeRoute/ProposeRoute";
import Profil from "../Pages/Profil/Profil";
import About from "../Pages/About/About";
import PagePrincipaleDriver from "../Pages/PagePrincipaleDriver/PagePrincipaleDriver";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PublicRouteRender>
              <PublicRoute />
            </PublicRouteRender>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/confirm" element={<ConfirmEmail />} />
          <Route path="/inscri" element={<Inscription />} />
        </Route>

        <Route
          element={
            <PrivateRouteRender>
              <PrivateRoute />
            </PrivateRouteRender>
          }
        >
          <Route path="/test" element={<PagePrincipale />} />
          <Route path="/driver" element={<PagePrincipaleDriver />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/proposeRoute" element={<ProposeRoute />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
