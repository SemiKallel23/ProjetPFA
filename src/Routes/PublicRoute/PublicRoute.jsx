
import { Outlet } from "react-router-dom";

const PublicRoute = () => {
    return (
        <div className="content-page">
            <Outlet />
        </div>
    )
}

export default PublicRoute