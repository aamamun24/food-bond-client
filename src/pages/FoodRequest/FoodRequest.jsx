import RequestTable from "./RequestTable";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const FoodRequest = () => {
    const { user } = useAuth()
    const url = `http://localhost:5000/food-request?requesterEmail=${user.email}`
    const [requestFoods, setRequestFoods] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setRequestFoods(data)
            })
    }, [url])

    const handleCancel = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/food-request/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Cancel!",
                                text: "Your food request has been canceled.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div className="overflow-x-auto my-10">
            <table className="table">

                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Food Name</th>
                        <th>Donor Name</th>
                        <th>Pickup Location</th>
                        <th>Expire Date</th>
                        <th>Request Date</th>
                        <th>Donation Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        requestFoods.map(requestFood => <RequestTable
                            key={requestFood._id}
                            requestFood={requestFood}
                            handleCancel={handleCancel}
                        ></RequestTable>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default FoodRequest;