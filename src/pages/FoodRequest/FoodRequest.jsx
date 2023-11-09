import { useLoaderData } from "react-router-dom";

const FoodRequest = () => {
    const requestFoods = useLoaderData()
    const { donatorName, pickupLocation, expiredDateTime, requestDate, donationAmount, foodStatus } = requestFoods;

    return (
        <div>
            <h2>Request</h2>
        </div>
    );
};

export default FoodRequest;