
import { Outlet } from "react-router-dom";
import { SideBar } from "../../Component";

const PrivateRoute = () => {
    return (
        <div className="w-100 h-100">
            <SideBar />
            <div className="w-100 h-100 ps-279 pe-80">
                <Outlet />
            </div>
        </div>
    )
}

export default PrivateRoute