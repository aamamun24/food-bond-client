import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
    return (
        <div className="font-Poppins">
            <Navbar>
                <Outlet></Outlet>
            </Navbar>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;