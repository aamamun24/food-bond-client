import FoodTable from './FoodTable';
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';

const ManageFood = () => {
    const { user } = useAuth()
    const url = `http://localhost:5000/foods?donatorEmail=${user.email}`
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFoods(data)
            })
    }, [url])

    return (

        <div className="overflow-x-auto my-10">
            <table className="table">

                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Food Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                        <th>Manage</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        foods.map(food => <FoodTable key={food._id} food={food}></FoodTable>)
                    }
                </tbody>

            </table>
        </div>

    );
};

export default ManageFood;