import { Link } from "react-router-dom";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { useEffect, useState } from "react";

const FeaturedFood = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('https://food-bond-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const sortedFoods = [...foods]
        .sort((a, b) => parseInt(a.foodQuantity, 10) - parseInt(b.foodQuantity, 10))
        .reverse()
        .slice(0, 6);

    return (
        <div className="bg-gray-100 p-3 md:p-10">
            <h2 className="text-4xl font-bold my-10 text-center">Featured Food</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    sortedFoods.map(food => <FeaturedFoodCard
                        key={food._id}
                        food={food}
                    >
                    </FeaturedFoodCard>)
                }
            </div>
            <Link className="flex justify-center" to='/available-food'>
                <button className='mt-6 bg-purple-600 hover:bg-purple-800 text-white font-bold px-6 py-3 rounded'>Show All</button>
            </Link>
        </div >
    );
};

export default FeaturedFood;