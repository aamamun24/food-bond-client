const Volunteer = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">Volunteer with Us</h2>
                <div className="flex flex-col md:flex-row gap-6 px-3">
                    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4">Why Volunteer?</h3>
                        <p className="text-gray-700">
                            Volunteering with us means making a direct impact on reducing food waste and helping
                            those in need. Join our community and contribute to a meaningful cause.
                        </p>
                    </div>
                    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4">How to Volunteer?</h3>
                        <p className="text-gray-700">
                            Signing up to volunteer is easy! Click the button below to fill out our volunteer
                            application form. We have various roles available, and we welcome volunteers of all
                            ages and backgrounds.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-700">Volunteer Now</button>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;