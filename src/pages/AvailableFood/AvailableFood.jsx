import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "./AvailableFoodCard";
import { Helmet } from "react-helmet-async";

const AvailableFood = () => {
    const foods = useLoaderData()

    return (
        <div className="bg-gray-100 p-10">
            <Helmet>
                <title>Food Bond | Available Food</title>
            </Helmet>
            <h2 className="text-4xl font-bold text-center text-blue-500 my-10">Available Food</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    foods.map(food => <AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>)
                }
            </div>
        </div >
    );
};

export default AvailableFood;