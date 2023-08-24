import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const navigate = useNavigate()

const {user, logOut} = useContext(AuthContext);


const handleLogout = () => {
  logOut()
    .then()
    navigate("/")

    .catch((err) => {
      console.log(err);
    });
};

    const nav = < >
    <li><Link to="/">Home</Link></li>
    <li><Link to="/alltoys">All toys</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>
    </>

  
    return (
        <div className='w-full'>
            <div className="navbar  bg-black h-28">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  
                  {
                user?.email? (
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {nav}
                  
                
                  <li className='mx-0 px-0'><button className='px-0 mx-0' onClick={handleLogout}>Logout</button></li>

                  </ul>
                  
                ):(
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {nav}

                  </ul>

                )
              }
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-4xl">Toy
                    <img className="w-20" src="hero.png" alt="" /> <span className=' text-amber-600 font-bold'>G</span>ang</Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {nav}
                </ul>
              </div>
              {
                user?.email? (
                  <div className="navbar-center hidden lg:flex">
                    <ul className='menu menu-horizontal px-1'>
                      
                  <li><Link to="/myToys">My Toys</Link></li>
                  <li><Link to="/addToys">Add toys</Link></li>
                  <div className=' flex flex-col justify-center items-center'><img className=' w-12 rounded-full' src={user.photoURL} alt="" />
                  <div className=" text-xs
                  ">{user.displayName}</div></div>
                  
                  
                    </ul>
                  <div className='navbar-center hidden lg:flex'>
                  <li className='menu menu-horizontal px-1 btn btn-error btn-outline ms-20 '><button  onClick={handleLogout}>Logout</button></li>
                  </div>
                 
                  </div>
                  
                ):(
                  <div className="navbar-end">
                <Link to="/login" className="btn bg-transparent bg-stone-900 text-amber-600 btn-error">Login</Link>
              </div>

                )
              }
              
            </div>
        </div>
    );
};

export default Navbar;