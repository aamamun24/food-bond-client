import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddFood from "../pages/AddFood/AddFood";
import PrivateRoute from "./PrivateRoute";
import AvailableFood from "../pages/AvailableFood/AvailableFood";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import FoodRequest from "../pages/FoodRequest/FoodRequest";
import ManageFood from "../pages/ManageFood/ManageFood";
import ManageFoodCard from "../pages/ManageFood/ManageFoodCard";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
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
                element: <AvailableFood />,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: '/available-food/:id',
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: '/manage-food',
                element: <PrivateRoute><ManageFood /></PrivateRoute>
            },
            {
                path: '/manage-food/:id',
                element: <PrivateRoute><ManageFoodCard /></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/food-request')
            },
            {
                path: '/update-food/:id',
                element: <PrivateRoute><UpdateFood /></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: '/food-request',
                element: <PrivateRoute><FoodRequest /></PrivateRoute>,
            }
        ]
    }
])

export default router;