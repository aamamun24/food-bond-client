import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="loading loading-bars text-9xl text-blue-500 loading-lg flex items-center mx-auto justify-center h-screen"></div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;