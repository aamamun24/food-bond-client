import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateFood = () => {
    const { id } = useParams()
    const foods = useLoaderData()
    const food = foods.find(food => food._id == id);

    const { _id, foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, donatorName, donatorEmail, donatorImage, foodStatus } = food;

    const handleUpdateFood = e => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
        const additionalNotes = form.additionalNotes.value;

        const updateFood = { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes }
        console.log(updateFood);

        axios.patch(`http://localhost:5000/foods/${_id}`, updateFood)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
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
        <div className="bg-gray-100 flex items-center justify-center">
            <div className="my-10 bg-white p-8 rounded shadow-md w-11/12 md:w-2/3">
                <h1 className="text-2xl text-center font-semibold mb-4">Update Food</h1>
                <form onSubmit={handleUpdateFood}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Food Name</label>
                        <input type="text" name="foodName" defaultValue={foodName} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your food name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Food Image URL</label>
                        <input type="text" name="foodImage" defaultValue={foodImage} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your Food Image URL" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Food Quantity</label>
                        <input type="number" name="foodQuantity" defaultValue={foodQuantity} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your Food Quantity" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Pickup Location</label>
                        <input type="text" name="pickupLocation" defaultValue={pickupLocation} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your Pickup Location" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Expired Date/Time</label>
                        <input type="text" name="expiredDateTime" defaultValue={expiredDateTime} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Additional Notes</label>
                        <textarea name="additionalNotes" defaultValue={additionalNotes} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Additional Notes here..." required />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 w-full text-white py-2 px-4 rounded"
                    >
                        Update Food
                    </button>
                </form >
            </div>
        </div >
    );
};

export default UpdateFood;