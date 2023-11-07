import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";

const MainLayout = () => {
    return (
        <div className="font-Poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;