import React, { useState } from "react";
import axios from "axios";
import { backendURL } from "../App";
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onHandleSubmit = (e) => {
        e.preventDefault();

        axios.post(backendURL + '/api/user/admin', { email, password })
            .then((response) => {
                // console.log(response);
                if (response.data.success) {
                    setToken(response.data.token)
                    toast.success("Welcome Admin !!")
                } else {
                    toast.error(response.data.message)
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error(error.message + ", You Are Not Authenticated !!")
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={onHandleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-5xl gap-4 text-black p-2 rounded-2xl shadow-lg" >
                <div className="inline-flex items-center gap-2 mb-6 mt-2">
                    <p className="prata-regular text-3xl text-gray-500">Log - In</p>
                    <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
                </div>
                <>
                    {/* Login Form */}
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className="border border-gray-500 bg-gray-600 rounded py-1.5 w-full sm:w-3/4 md:w-2/3 px-3 text-black" type="email" placeholder="Email : johndoe@example.com" required />
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className="border border-gray-500 bg-gray-600 rounded py-1.5 w-full sm:w-3/4 md:w-2/3 px-3 text-black" type="password" placeholder="Password : ********" autoComplete="on" required />
                    <div className="w-full sm:w-3/4 md:w-2/3 flex justify-between text-sm mt-[-8px] text-gray-500">
                        <p className="cursor-pointer">Forgot Your Password ?</p>
                    </div>
                </>
                <button className='btn bg-black border-gray-500 border-1 text-white px-20 text-sm mb-2'>Log In</button>
            </form>
        </div>
    );
};

export default Login;
