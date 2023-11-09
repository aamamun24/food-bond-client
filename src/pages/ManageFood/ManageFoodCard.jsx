import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ManageFoodCard = () => {
    const { id } = useParams()
    const foods = useLoaderData()
    const food = foods.find(food => food.foodId == id);

    const navigate = useNavigate()

    const handleDeliver = (id) => {
        const updateStatus = { foodStatus: 'delivered' }

        axios.put(`https://food-bond-server.vercel.app/food-request/${id}`, updateStatus)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Delivered successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate('/manage-food')
                }
            })
            .catch(err => {
                console.log(err);
                if (err) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }
            });
    }

    return (
        <div>
            {
                food ?
                    <div className="flex items-center justify-center bg-gray-100 py-12">
                        <div className="flex flex-col md:flex-row gap-8 rounded-md bg-white w-11/12 md:w-2/3 shadow-xl">
                            <img className="rounded-md" src={food.foodImage} alt="" />
                            <div className="px-6 mb-4 md:mb-auto md:py-6">
                                <h2 className="card-title">Food Name: {food.foodName}</h2>
                                <div className="border-l-4 pl-4 border-gray-600 my-2">
                                    <h3 className="text-xl font-semibold">Requester Info</h3>
                                    <div className="flex items-center">
                                        <img src={food.requesterImage} alt="" className="w-8 h-8 object-cover rounded-full" />
                                        <span className="ml-2 text-gray-600">{food.requesterName}</span>
                                    </div>
                                    <p><span className="font-bold">Email:</span> {food.requesterEmail}</p>
                                    <p><span className="font-bold">Request Time and Date:</span> {food.requestDate}</p>
                                </div>
                                {
                                    food.foodStatus === 'delivered' ?
                                        <button className="btn btn-ghost">Delivered</button>
                                        :
                                        <button onClick={() => handleDeliver(food._id)} className="btn btn-primary">Confirm Deliver</button>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex items-center justify-center h-[80vh]">
                        <h2 className="text-3xl font-bold">No request for this food</h2>
                    </div>
            }
        </div>
    );
};

export default ManageFoodCard;