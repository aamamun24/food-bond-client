import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import useAuth from "../../hooks/useAuth";
import registration from '../../assets/user-registration.png';

const Register = () => {


    const { createUser, userUpdatedProfile } = useAuth()
    const navigate = useNavigate()


    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters', {
                theme: "colored",
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password must be at least one uppercase later', {
                theme: "colored",
            });
            return;
        }
        else if (!/[#?!@$%^&*-]/.test(password)) {
            toast.error('Password must be at least one special character', {
                theme: "colored",
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                userUpdatedProfile(name, photo)
                    .then(() => {
                        toast.success('Registration Complete Successfully', {
                            theme: "colored",
                        });
                        setTimeout(() => {
                            navigate('/')
                        }, 2000);
                    })
            })
            .catch(error => {
                toast.error(error.message, {
                    theme: "colored",
                });
            })
    }
    return (
        <div className="min-h-screen bg-gray-100 flex gap-6 flex-col md:flex-row items-center justify-center">
            <div>
                <img src={registration} alt="registration" />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-96 my-10">
                <h2 className="text-xl font-semibold mb-6">Register Your Account</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                        <input type="text" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input type="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                        <input type="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your password" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Photo URL</label>
                        <input type="text" name="photo" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your photo URL" required />
                    </div>
                    <button className="w-full bg-blue-500 text-white rounded-lg py-2 font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200" >Register</button>
                    <p className="text-center text-gray-600 text-sm mt-4">
                        Already have an account? <Link to="/login" className="text-blue-500"> Login</Link>
                    </p>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default Register;