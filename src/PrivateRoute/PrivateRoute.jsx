import React from 'react';
import { useForm } from 'react-hook-form';

const PrivateRoute = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = data => console.log(data);
      
        console.log(watch("firstName"));
    return (
        <div className=""></div>
      
    );
};

export default PrivateRoute;