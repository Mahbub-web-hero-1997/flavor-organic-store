import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logo/logo.png'
import Button from './Button';



const Navbar = () => {

    const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Fruits</Link></li>
    <li><Link to='/'>Review</Link></li>
    <li><Link to='/'>About</Link></li>
    <li><Link to='/'>Contact</Link></li>
    </>
   
    return (
        <>       
            <div className="navbar w-full px-10 mx-auto sticky top-0 bg-white z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/'><img src={logo} alt='' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-semibold uppercase">
                      {menuItems}
                    </ul>
                </div>                
                <div className="navbar-end">
                    {/* Cart Item Start */}
                    <div className="dropdown dropdown-end mr-2 lg:mr-5">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <Button>View Cart</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Cart Item end */}
                    {/* Profile start */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='#' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to='#'>Settings</Link>
                            </li>
                            <li><Link to='#'>Logout</Link></li>
                        </ul>
                    </div>  
                     {/* Profile end */}
                </div>                
            </div>
        </>
    );
};

export default Navbar;