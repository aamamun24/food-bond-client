import React from 'react';

const Impact = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">Our Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-3 md:px-10">
                    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4">Meals Distributed</h3>
                        <p className="text-gray-700">Join us in reducing food waste and providing meals to those in need. Together, we've distributed:</p>
                        <p className="text-3xl font-bold mt-4">1500+</p>
                    </div>
                    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4">Volunteers Engaged</h3>
                        <p className="text-gray-700">Our dedicated volunteers contribute their time and effort to make a difference. So far, we've had:</p>
                        <p className="text-3xl font-bold mt-4">100+</p>
                    </div>
                    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4">Communities Served</h3>
                        <p className="text-gray-700">Our impact extends to various communities, providing support and nourishment. We've served:</p>
                        <p className="text-3xl font-bold mt-4">50+</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impact;