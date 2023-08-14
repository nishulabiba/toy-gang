import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user} = useContext(AuthContext);
    if(user) {
        return children;
    }
    return <Navigate  to="/" ></Navigate>
   
};

export default PrivateRoute;