import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const Update = () => { 
  useTitle('Update')
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
      <h1 className='text-2xl font-serif font-semibold'>Update toy information for <span className=' text-yellow-500'>{data.toyName}</span></h1>
      <label className='text-xs text-left ms-0 me-64'>Your Name</label>
      <input aria-label='name' className=" input input-primary w-80" type="text" value={name}{...register("sellerName")} />
      <label className='text-xs text-left ms-0 me-64'>Email</label>
      <input className=" input input-primary w-80" type="email" value={email} {...register("sellerEmail")} />
      <label className='text-xs text-left ms-0 me-64'>PictureUrl</label>
      <input className=" input input-primary w-80" placeholder='Enter picture url ' defaultValue={data.pictureUrl} {...register("pictureUrl")} />
      <label className='text-xs text-left ms-0 me-64'>Toy Name</label>
      <input className=" input input-primary w-80" placeholder='Enter toy name'  defaultValue={data.toyName} {...register("toyName")} />
      <label className='text-xs text-left ms-0 me-64'>Price</label>
      <input className=" input input-primary w-80" placeholder='Enter price'  type="number" defaultValue={data.price} {...register("price")} />
      <label className='text-xs text-left ms-0 me-64'>Rating</label>
      <input className=" input input-primary w-80" placeholder='Enter rating'  type="number" max={5} min={0}  defaultValue={data.rating} {...register("rating")} />
      <label className='text-xs text-left ms-0 me-64'>Sub-Category</label>
      <select  {...register("subCategory")}  defaultValue={data.subCategory} className="select select-primary  w-full max-w-xs">
        
        <option>Marvel</option>
        <option>Transformers</option>
        <option>Avengers</option>
      </select>
      <label className='text-xs text-left ms-0 me-64'>Quantity Available</label>
      <input className=" input input-primary w-80" placeholder='Enter available quantity'  type="number" defaultValue={data.availableQuantity} {...register("availableQuantity")} />


      {/* include validation with required or other standard HTML validation rules */}
      <label className='text-xs text-left ms-0 me-64'>Toy Description</label>
      <input className=" input input-primary w-80" placeholder='Enter description'  defaultValue={data.description} {...register("description", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}


      <button className="btn btn-primary btn-outline" type="submit"> Update </button>
      <ToastContainer/>
    </form>
    
     )
    
};

export default Update;