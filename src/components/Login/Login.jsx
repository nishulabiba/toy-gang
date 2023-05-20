import React from 'react';

import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
    }
    return (
        <div className=' bg-zinc-900  '>
            
    <h1 className=' pt-10 text-3xl font-serif text-center  text-white '>Login Here!</h1>
            
            
            <div className="hero min-h-screen bg-zinc-900 m-0">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <img className=' lg:w-full opacity-60' src="bat.png" alt="" />
                
                </div>
            <div className="card bg-black flex-shrink-0 w-full max-w-sm shadow-2xl ">
                <form onSubmit={handleLogin} >
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <input className="btn btn-error btn-outline" type="submit" value="Login" />
                    
                    </div>
                    <small>New to our website? <Link className='font-bold text-error' to="/signUp">SignUp</Link></small>
                </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Login;