import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "./AvailableFoodCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const AvailableFood = () => {
    const availableFoods = useLoaderData()
    const [foods, setFoods] = useState(availableFoods)
    
    // const [requestFoods, setRequestFoods] = useState([])
    // const foods = availableFoods.filter(food => food.foodStatus === 'available');
    // console.log(foods);

    // useEffect(() => {
    //     fetch('https://food-bond-server.vercel.app/food-request')
    //         .then(res => res.json())
    //         .then(data => setRequestFoods(data))
    // }, [])


    const handleSearch = e => {
        e.preventDefault()
        const form = e.target;
        const search = form.search.value;

        const searchResult = foods.filter(food => food.foodName.toLowerCase().includes(search.toLowerCase())
        );
        setFoods(searchResult)
    }

    const handleSort = () => {
        const sort = [...foods].sort((a, b) => new Date(a.expiredDateTime) - new Date(b.expiredDateTime));
        setFoods(sort);
    };

    return (
        <div className="bg-gray-100 p-10">
            <Helmet>
                <title>Food Bond | Available Food</title>
            </Helmet>
            <h2 className="text-4xl font-bold text-center text-blue-500 my-10">Available Food</h2>

            {/* Search */}
            <div className="max-w-sm mx-auto mb-6">
                <form onSubmit={handleSearch} className="flex">
                    <input type="text" name="search" placeholder="Search by name" className="w-full p-2 border rounded-md mr-2" />
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md font-bold hover:bg-blue-700"
                    >Search</button>
                </form>
            </div>

            {/* Sort */}
            <div className="flex justify-between mb-10">
                <h2 className="text-xl font-bold">Sort By Date</h2>
                <button className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer" onClick={handleSort} > Sort by Expire Date</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    foods.map(food => <AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>)
                }
            </div>
        </div >
    );
};

export default AvailableFood;