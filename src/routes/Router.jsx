import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddFood from "../pages/AddFood/AddFood";
import PrivateRoute from "./PrivateRoute";
import AvailableFood from "../pages/AvailableFood/AvailableFood";
import FoodDetails from "../pages/FoodDetails/FoodDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/add-food',
                element: <PrivateRoute><AddFood /></PrivateRoute>
            },
            {
                path: '/available-food',
                element: <PrivateRoute><AvailableFood /></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: '/available-food/:id',
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/foods')
            }
        ]
    }
])

export default router;