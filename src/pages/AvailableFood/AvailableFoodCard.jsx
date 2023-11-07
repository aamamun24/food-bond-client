import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AvailableFoodCard = ({ food }) => {

    const { _id, foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, donatorName, donatorEmail, donatorImage, foodStatus } = food;

    return (
        <div className="bg-white flex flex-col shadow-md rounded-lg p-6">
            <img
                src={foodImage}
                alt={foodName}
                className="w-full h-40 object-cover rounded-md"
            />
            <div className="mt-4 border-b-2 pb-3">
                <h2 className="text-xl font-semibold">Food Name: {foodName}</h2>
            </div>
            <div className="mt-2 flex items-center">
                <img
                    src={donatorImage}
                    alt={donatorName}
                    className="w-8 h-8 object-cover rounded-full"
                />
                <span className="ml-2 text-gray-600">{donatorName}</span>
            </div>
            <ul className="mt-4 font-semibold list-disc list-inside">
                <li>Food Quantity: <span className='text-purple-600 font-bold'>{foodQuantity}</span></li>
                <li>Pickup Location: <span className='text-purple-600 font-bold'>{pickupLocation}</span></li>
                <li>Expired Date/Time: <span className='text-purple-600 font-bold'>{expiredDateTime}</span></li>
            </ul>
            <p className='text-justify mt-4 flex-grow'><span className='font-bold'>Additional Notes:</span> {additionalNotes}</p>
            <Link to={`${_id}`}>
                <button className='w-full mt-4 bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 rounded'>View Details</button>
            </Link>
        </div >
    );
};

AvailableFoodCard.propTypes = {
    food: PropTypes.object
};

export default AvailableFoodCard;