import FoodTable from './FoodTable';
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const ManageFood = () => {
    const { user } = useAuth()
    const url = `https://food-bond-server.vercel.app/foods?donatorEmail=${user.email}`
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFoods(data)
            })
    }, [url])

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://food-bond-server.vercel.app/foods/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food has been deleted.",
                                icon: "success"
                            });
                            const remaining = foods.filter(food => food._id !== id)
                            setFoods(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div className="overflow-x-auto my-10">
            <Helmet>
                <title>Food Bond | Manage Food</title>
            </Helmet>
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
                        foods.map(food => <FoodTable
                            key={food._id}
                            food={food}
                            handleDelete={handleDelete}
                        ></FoodTable>)
                    }
                </tbody>

            </table>
        </div>

    );
};

export default ManageFood;