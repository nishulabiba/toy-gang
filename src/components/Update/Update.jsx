import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => { 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const {user} = useContext(AuthContext); 
  const [data, setData] = useState([])
  const {id} = useParams();
  const [ok, setOk] = useState(false)
  console.log(id);

  useEffect(()=> {
    fetch(`http://localhost:5000/toy/${id}`)
    .then(res=> res.json())
    .then(result=> setData(result))
  },[])

    const onSubmit =(data) =>{
      fetch(`http://localhost:5000/update/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response =>{ console.log(response)
        if(response?.modifiedCount > 0) {
         setOk(true)
        }
      })
      .catch(err => console.error(err));
    setTimeout(() => {
        toast.success('Data updated successfully!!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, // Close the toast after 3 seconds
        });
      }, 1000);
    }
    const name = user?.displayName;
    const email = user?.email;
       return (
            
           <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-20 justify-center items-center">
      {/* register your input into the hook by invoking the "register" function */}
      <input aria-label='name' className=" input input-primary w-80" type="text" value={name}{...register("sellerName")} />
      <input className=" input input-primary w-80" type="email" value={email} {...register("sellerEmail")} />
      <input className=" input input-primary w-80" defaultValue={data.pictureUrl} {...register("pictureUrl")} />
      <input className=" input input-primary w-80" defaultValue={data.toyName} {...register("toyName")} />
      <input className=" input input-primary w-80" type="number" defaultValue={data.price} {...register("price")} />
      <input className=" input input-primary w-80" type="number" max={5} min={0}  defaultValue={data.rating} {...register("rating")} />
      <select  {...register("subCategory")} defaultValue={data.subCategory} className="select select-primary  w-full max-w-xs">
        
        <option>Marvel</option>
        <option>Transformers</option>
        <option>Avengers</option>
      </select>
      <input className=" input input-primary w-80" type="number" defaultValue={data.availableQuantity} {...register("availableQuantity")} />


      {/* include validation with required or other standard HTML validation rules */}
      <input className=" input input-primary w-80" defaultValue={data.description} {...register("description", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}


      <button className="btn btn-primary btn-outline" type="submit"> Update </button>
      <ToastContainer/>
    </form>
    
     )
    
};

export default Update;