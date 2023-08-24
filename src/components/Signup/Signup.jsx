import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { getDatabase } from 'firebase/database';
import 'firebase/auth';
import useTitle from '../../hooks/useTitle';
const Signup = () => {
  const navigate = useNavigate()
  const {createUser, user} = useContext(AuthContext);
  const [error, setError] = useState('');

  useTitle('SignUp')
  
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
    
      const onSubmit = (data) => { console.log(data)// watch input value by passing the name of it
      if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data.password)) {
        setError("Password not valid!")
        return ;
      }
      createUser( data.email, data.password)
        .then((result)=>{
          const user ={
            uid: result.user.uid,
            displayName: data.username,
            email: data.email,
            photoURL: data.photoUrl
          };

          handleSubmit(onSubmit);
          console.log(user);
          form.reset()
          navigate('/login')

          
          })
        .catch(error=>{
            console.log(error) 
        
      })
      const user = firebase.auth().currentUser;
      if (user) {
        const newDisplayName = data.displayName // Replace with the desired display name
        
        user
          .updateProfile({
            displayName: newDisplayName
          })
          .then(() => {
            console.log("Display name updated successfully");
          })
          .catch((error) => {
            console.error("Error updating display name:", error);
          });
      }
    }

    
     
   
    
  return (
    <div className=" bg-black flex justify-center">
      <img className='w-96' src="https://th.bing.com/th/id/OIP.yKDmgX_VQKhjMZJuxV864wHaKU?pid=ImgDet&rs=1" alt="" />
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-white w-96 justify-center items-center gap-5  p-10'>
      {/* register your input into the hook by invoking the "register" function */}
      <input type='text' className="input input-bordered bg-black" placeholder='Enter username'  {...register("username")} />
      <input type='text' className="input input-bordered bg-black" placeholder='Enter photo url'  {...register("photoUrl")} />
      
      <input type='email' className="input input-bordered bg-black" placeholder='Enter email'  {...register("email")} />


      {/* include validation with required or other standard HTML validation rules */}
      <p className=' text-red-600'>{error}</p>
      <input placeholder='Enter password' type='password' className="input input-bordered bg-black" {...register("password", { required: true })} />
      <small>Already have an account? <Link className='font-bold text-error' to="/login">Login</Link></small> 
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}


      <input className='btn-error btn btn-outline' type="submit" />
    </form>
    {
      user?(<Navigate to="/login"/>):( <div className=""></div> )
    }
    </div>
  )
}

export default Signup