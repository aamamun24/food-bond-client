import PropTypes from 'prop-types';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RequestModal = ({ food }) => {
    const { _id, foodName, foodImage, pickupLocation, expiredDateTime, additionalNotes, donatorName, donatorEmail } = food;

    const { user } = useAuth();
    const navigate = useNavigate();
    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());


    const handleRequestFood = e => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodId = form.foodId.value;
        const donatorEmail = form.donatorEmail.value;
        const donatorName = form.donatorName.value;
        const userEmail = form.userEmail.value;
        const requestDate = form.requestDate.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
        const additionalNotes = form.additionalNotes.value;
        const donationAmount = form.donationAmount.value;

        const requestFood = { foodName, foodImage, foodId, donatorEmail, donatorName, userEmail, requestDate, pickupLocation, expiredDateTime, additionalNotes, donationAmount };

        console.log(requestFood);

        axios.post('http://localhost:5000/foods', requestFood)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success('Food Request Success')
                    setTimeout(() => {
                        navigate('/')
                    }, 2000);
                }
            })
            .catch(err => {
                console.log(err);
                if (err) {
                    toast.error(err.message);
                }
            });
    }

    return (
        <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-gray-100">
                <h3 className="font-bold text-lg">Request for food</h3>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
                <div className="bg-white p-8 rounded shadow-md">
                    <form onSubmit={handleRequestFood}>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Food Name</label>
                            <input type="text" name="foodName" value={foodName} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" readOnly />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Food Image URL</label>
                            <input type="text" name="foodImage" value={foodImage} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" readOnly />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Food Id</label>
                            <input type="text" name="foodId" value={_id} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" readOnly />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Donator Email</label>
                            <input type="text" name="donatorEmail" value={donatorEmail} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" readOnly />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Donator Name</label>
                            <input type="text" name="donatorName" value={donatorName} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" readOnly />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Your Email</label>
                            <input type="text" name="userEmail" value={user?.email} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" readOnly />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Request Date</label>
                            <input type="text" name="requestDate" value={currentDateTime} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" readOnly />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Pickup Location</label>
                            <input type="text" name="pickupLocation" value={pickupLocation} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" readOnly />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Expired Date/Time</label>
                            <input type="datetime-local" name="expiredDateTime" value={expiredDateTime} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" readOnly />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Additional Notes</label>
                            <textarea name="additionalNotes" defaultValue={additionalNotes} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Additional Notes here..." required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Donation Money (Optional)</label>
                            <input type='text' name="donationAmount" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Donation Amount" />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 w-full text-white py-2 px-4 rounded"
                        >
                            Request
                        </button>
                    </form >
                </div>
            </div>
            <Toaster />
        </dialog>
    );
};

RequestModal.propTypes = {
    food: PropTypes.object
};


export default RequestModal;