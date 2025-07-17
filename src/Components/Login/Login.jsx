import React, { useState } from 'react';
import { Link } from 'react-router';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";


const Login = () => {
    const [showPass ,setShowPass]=useState(false)

    const handelUserLogin =(e)=>{
        e.preventDefault()
        const email= e.target.email.value ;
        const password = e.target.password.value;       
        
    }
    return (
        <div className="hero bg-sky-200 ">
            <form onSubmit={handelUserLogin} >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-sky-700" >Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-sky-300 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                
                                <label className="label relative">Password</label>
                                <input name='password' type={showPass ? "text" : "password"} className="input" placeholder="Password" />
                                <div onClick={()=>setShowPass(!showPass)} className='absolute mt-[105px] mx-72 text-xl text-blue-700'>
                                        {
                                            showPass ? <IoEye   /> : <IoMdEyeOff />

                                        }
                                </div>
                                


                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-info mt-4">Login</button>
                                <div>
                                    <h1>You Hove No Account Please <span className='text-sky-800 font-bold underline'><Link to={"/register"}> Register</Link></span> </h1>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;