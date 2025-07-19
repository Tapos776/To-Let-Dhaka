

import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Private/AuthProvider';


const Register = () => {
    const {registerUser}=useContext(AuthContext)

    const handelUserRegisters =(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password =e.target.password.value;
        console.log(name,email,photo,password);
        registerUser(email,password)
        .then((data)=>{
            console.log(data.user);
            
        })
        .catch(error=>{console.log(error.message);
        })
     
    }
    return (
        <div className="hero bg-sky-200 ">
            <form onSubmit={handelUserRegisters} >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-sky-700" >Register now!</h1>                      
                    </div>
                    <div className="card bg-sky-300 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" />

                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />

                                <label className="label">Photo</label>
                                <input type="text" name='photo' className="input" placeholder="Photo URL" />

                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-info mt-4 font-bold">Register</button>
                                <div>
                                    <h1>You Hove No Account Please <span className='text-sky-800 font-bold underline'><Link to={"/login"}> Login</Link></span> </h1>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;