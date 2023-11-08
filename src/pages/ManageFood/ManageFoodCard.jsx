import { useLoaderData, useParams } from "react-router-dom";

const ManageFoodCard = () => {
    const { id } = useParams()
    const foods = useLoaderData()
    const food = foods.find(food => food._id == id);

    const { _id, foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, donatorName, donatorEmail, donatorImage, foodStatus } = food;

    return (
        <div>
            <h2>{foodName}</h2>
            <h2>{foodQuantity}</h2>
        </div>
    );
};

export default ManageFoodCard;