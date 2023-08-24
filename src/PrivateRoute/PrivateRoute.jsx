import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, Route, BrowserRouter as Router, Routes, redirect, useLocation, useNavigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const from = location.state?.from?.pathname || "/from"
    
    const {user , loading} = useContext(AuthContext);
    if(loading)
    {

     return <div className=" align-middle  loading Toastify__spinner rounded-full outline-4">
      
      </div>

    }
    if (user) {
        return children
      }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
}

export default PrivateRoute;