import { Link, NavLink } from "react-router-dom";
import logo from '/logo.png';

const Navbar = () => {

    const navLinks = <>
        <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#157ED2] underline" : ""
            }>Home</NavLink>
        </li>
        <li>
            <NavLink to="/available-food" className={({ isActive }) => isActive ? "text-[#157ED2] underline" : ""
            }>Available Foods</NavLink>
        </li>
        <li>
            <NavLink to="/add-food" className={({ isActive }) => isActive ? "text-[#157ED2] underline" : ""
            }>Add Food</NavLink>
        </li>
        <li>
            <NavLink to="/manage-food" className={({ isActive }) => isActive ? "text-[#157ED2] underline" : ""
            }>Manage My Foods</NavLink>
        </li>
        <li>
            <NavLink to="/food-request" className={({ isActive }) => isActive ? "text-[#157ED2] underline" : ""
            }>My Food Request</NavLink>
        </li>
        <li>
            <NavLink to="/login" className={({ isActive }) => isActive ? "text-[#157ED2] underline" : ""
            }>Login</NavLink>
        </li>
    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <Link to="/"><img className="w-48" src={logo} alt="logo" /></Link>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="flex gap-5">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                Content
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 min-h-full bg-base-200">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;