import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {

const {user} = useContext(AuthContext);

    const nav = < >
    <li><Link to="/">Home</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>
    </>

    const nav2 = <>
    <li><Link to="/">My Toys</Link></li>
    <li><Link to="/blogs">Add toys</Link></li>
    <li><Link> Logout</Link></li>
    <img src="" alt="" />
    </>
    return (
        <div>
            <div className="navbar  bg-black h-28">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {nav}
                  </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-4xl">Toy's
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
                      
                  <li><Link to="/">My Toys</Link></li>
                  <li><Link to="/blogs">Add toys</Link></li>
                    </ul>
                  <img src={user.url}alt="" />
                  <div className='navbar-center hidden lg:flex'>
                  <li className='menu menu-horizontal px-1'><Link> Logout</Link></li>
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