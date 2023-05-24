
import { useContext, useState} from 'react';

import { Link} from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const Login = () => {
    //google provider
    
    const handleGoogleLogin = () =>{
        const providerG = new GoogleAuthProvider();
        const googleAuth = getAuth();
        signInWithPopup(googleAuth, providerG)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            console.log(errorMessage);
            // ...
        });
    }



    const {signIn} = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(email, password)
        signIn(email, password)
            .then(result=>{
                const user = result.user;
                console.log(user)
            })
            .catch(error=> alert("Please, register first!", error) )
            
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

                    <button onClick={handleGoogleLogin} className="flex bg-white justify-center p-2 rounded-lg text-black mt-2 "> <img className='bg-white w-5 rounded-lg me-2' src="google.svg" alt="" /> SignIn with Google</button>
                </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Login;