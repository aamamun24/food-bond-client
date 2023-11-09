import { useLoaderData, useParams } from 'react-router-dom';
import RequestModal from './RequestModal';
import { Helmet } from 'react-helmet-async';

const FoodDetails = () => {
    const { id } = useParams()
    const foods = useLoaderData()
    const food = foods.find(food => food._id == id);

    const { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, donatorName } = food;

    return (
        <div className='bg-gray-100 py-10'>
            <Helmet>
                <title>Food Bond | Food Details</title>
            </Helmet>
            <div className="bg-white shadow-md rounded-lg p-6 w-11/12 md:w-1/3 mx-auto">
                <div className='border-l-4 pl-4 border-orange-500'>
                    <h2 className='text-xl font-semibold'>Donor Info:</h2>
                    <ul className='font-medium'>
                        <li>Donar Name: <span className='font-bold'>{donatorName}</span></li>
                        <li>Food Pickup Location: <span className='font-bold'>{pickupLocation}</span></li>
                    </ul>
                </div>
                <div className='mt-4'>
                    <img
                        src={foodImage}
                        alt={foodName}
                        className="w-full object-cover rounded-md"
                    />
                </div>
                <div className="mt-4 border-b-2 pb-3">
                    <h2 className="text-xl font-semibold">Food Name: {foodName}</h2>
                </div>
                <ul className="mt-4 font-semibold list-disc list-inside">
                    <li>Food Quantity: <span className='text-purple-600 font-bold'>{foodQuantity}</span></li>
                    <li>Expired Date/Time: <span className='text-purple-600 font-bold'>{expiredDateTime}</span></li>
                </ul>
                <button className='w-full mt-4 bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 rounded' onClick={() => document.getElementById('my_modal').showModal()}>Request</button>
                <RequestModal food={food}></RequestModal>
            </div >
        </div>
    );
};

export default FoodDetails;