import { useContext, useState } from "react"
import { useForm }  from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider"
import useTitle from "../../hooks/useTitle"


export default function AddToys() {
  useTitle('Add Toys')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const {user} = useContext(AuthContext);
  const [ok, setOk] = useState(false)
  

  const onSubmit = (data) => {
    console.log(data)
    
    const options = {method: 'POST', body: data};

    fetch('https://assignment11-server-green.vercel.app/upload', {
      method: 'POST',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response =>{ console.log(response)
        if(response.insertedId){
          setOk(true)
        }

      })
      
      .catch(err => console.error(err));
    

      
      


  }

    const name = user?.displayName;
    const email = user?.email;


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-20 justify-center items-center">
      {/* register your input into the hook by invoking the "register" function */}
      < input required className=" input input-primary w-80" type="text" value={name}{...register("sellerName")} />
      < input required className=" input input-primary w-80" type="email" value={email} {...register("sellerEmail")} />
      < input required className=" input input-primary w-80" placeholder="Enter the toy photo url" {...register("pictureUrl")} />
      < input required className=" input input-primary w-80" placeholder="Enter your toy name" {...register("toyName")} />
      < input required className=" input input-primary w-80" type="number" placeholder="Enter price" {...register("price")} />
      < input required className=" input input-primary w-80" type="number" max={5} min={0}  placeholder="Enter rating" {...register("rating")} />
      <select  {...register("subCategory")}  className="select select-primary  w-full max-w-xs">
        
        <option>Marvel</option>
        <option>Transformers</option>
        <option>Avengers</option>
      </select>
      < input required className=" input input-primary w-80" type="number" placeholder="Enter quantity available" {...register("availableQuantity")} />


      {/* include validation with required or other standard HTML validation rules */}
      < input required className=" input input-primary w-80" placeholder="Enter description" {...register("description", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}


      < input className="btn btn-primary btn-outline" type="submit" />
      {
                ok?(
                  <div className="toast toast-top toast-end">
                      
                  <div className="alert alert-success">
                    <span>New toy added successfully.</span>
                  </div>
                </div>
                  
                ):(
                 <div className=""></div>
                )
              }
    </form>
  )
}