import useAuth from "../../hooks/useAuth";

const AddFood = () => {

    const { user } = useAuth()

    const handleAddFood = e => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.pickupLocation.value;
        const additionalNotes = form.additionalNotes.value;

        const addFood = { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, donatorName: user?.displayName, donatorEmail: user?.email, donatorImage: user?.photoURL, foodStatus: 'available' }
        console.log(addFood);
    }
    return (
        <div className="bg-gray-100 flex items-center justify-center">
            <div className="my-10 bg-white p-8 rounded shadow-md w-11/12 md:w-2/3">
                <h1 className="text-2xl text-center font-semibold mb-4">Add Food</h1>
                <form onSubmit={handleAddFood}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Food Name</label>
                        <input type="text" name="foodName" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your food name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Food Image URL</label>
                        <input type="text" name="foodImage" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your Food Image URL" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Food Quantity</label>
                        <input type="number" name="foodQuantity" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your Food Quantity" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Pickup Location</label>
                        <input type="text" name="pickupLocation" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your Pickup Location" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Expired Date/Time</label>
                        <input type="datetime-local" name="expiredDateTime" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Additional Notes</label>
                        <textarea name="additionalNotes" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Additional Notes here..." required />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 w-full text-white py-2 px-4 rounded"
                    >
                        Add Food
                    </button>
                </form >
            </div>
        </div >
    );
};

export default AddFood;