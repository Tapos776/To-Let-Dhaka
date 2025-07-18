import React, { useContext  } from 'react';
import { Link, Links, NavLink } from 'react-router';
import "../Style/Style.css"
import { AuthContext } from '../../Private/AuthProvider';

const NavBar = () => {
    const {userLogOut,user}= useContext(AuthContext)
    
    console.log(user);
    
    const navLink = <>
        <li><NavLink className={"text-xl bg-sky-500 mx-1 font-black text-blue-900"} to={"/"}>Home</NavLink></li>
        <li><NavLink className={"text-xl bg-sky-500 mx-1 font-black text-blue-900"} to={"/about"}>About</NavLink></li>
        <li><NavLink className={"text-xl bg-sky-500 mx-1 font-black text-blue-900"} to={"/login"}>Login</NavLink></li>
        <li><NavLink className={"text-xl bg-sky-500 mx-1 font-black text-blue-900"} to={"/register"}>Register</NavLink></li>
    </>

    const logOutUser =()=>{
        userLogOut()
        .then(data=>{
            console.log(data.user);
            
            
        })
        .then(error=>{console.log(error.message);
        })
    }
    return (
        <div>
            <div className="navbar bg-sky-400 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-sky-300">
                                {
                                    navLink
                                }

                        </ul>
                    </div>
                    <a className="btn btn-primary text-2xl">TO-LET</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                                {
                                    navLink
                                }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                       user ? <> <h1>{user.email}</h1> <a onClick={logOutUser} className="btn btn-error">Logout</a>  </> : <> <Link className="btn btn-error" to={"/login"}>Sign In</Link>  </>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;