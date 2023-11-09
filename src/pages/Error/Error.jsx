import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-center px-4">
                <h1 className="text-6xl font-extrabold text-red-500">404</h1>
                <p className="text-xl text-gray-600 mb-4">Oops! Page not found.</p>
                <p className="text-md text-gray-600 mb-8">The page you're looking for might have been removed or doesn't exist.</p>
                <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"> Go back to Home</Link>
            </div>
        </div>
    );
};

export default Error;