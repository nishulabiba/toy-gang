import React from 'react';
import { useContext } from "react";


import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignup = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        console.log(name, email, password)

        createUser(email, password)
        .then ((result)=>{
            const user = result.user;
            console.log(user);
        })
        .then(error=>{
            console.log(error)
        })
    }
    return (
        <div className=' bg-zinc-900 flex justify-center'>
             <div className="card bg-black flex-shrink-0 w-full max-w-sm shadow-2xl m-20 ">
                <form onSubmit={handleSignup} >
                    
                <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                   
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="photo url" name='url' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    <input className="btn btn-error btn-outline" type="submit" value="Sign Up" />
                    <small>Already have an account? <Link className='font-bold text-error' to="/login">Login</Link></small>
                    
                    </div>
                </div>
                </form>
            </div>
            
        </div>
    );
};

export default Signup;