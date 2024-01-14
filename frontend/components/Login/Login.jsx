import { useState } from 'react'
import "../../src/App.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function Login()
{
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
  
      const handleChange = (e) =>{
        // console.log(e.target);
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
      const handleSubmit =  async (e) => {
        e.preventDefault();
        console.log("submit working");
        try {
          const response = await fetch('http://localhost:8000/api/v1/users/login',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
          });
          console.log(response);
          const result = await response.json();
          console.log("Response from backend", result);
        } catch (error) {
          console.log('Error', error);
        }
      };
 return (
   <>
        <div className='flex items-center justify-center h-screen'>
            <div className= '@apply w-[700px] h-[700px] bg-[#48484893] mb-24 mt-24 rounded-lg'>
                <div>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white ml-12 mt-8 ">Sign In </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white ml-12 mt-8 ">Please enter your login information</p>
                    <div className='mt-4 ml-12'>
                    <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                        </svg>
                        Sign in with Google
                    </button>
                    <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                        </svg>
                        Sign in with Github
                    </button>
                    </div>
                    {/* horizontal line */}
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '20px',marginBottom:'4px'}}>
                    <div style={{flex: 1, height: '1px', backgroundColor: 'grey',marginLeft:'10px'}} />
                    <div>
                        <p style={{width: '70px', textAlign: 'center',color:'white'}}>or</p>
                    </div>
                    <div style={{flex: 1, height: '1px', backgroundColor: 'grey', marginRight:'10px'}} />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-center ">
                        <div className="flex flex-col items-center">
                        <div className="flex flex-col text-lg font-semibold text-gray-100 ml-12 mt-10 border border-gray-500 rounded-lg w-86">
                        <div className='m-8'>
                            <p className='ml-4'>Username or email </p>
                                <div>
                                    <input type="text" name="email" value={formData.email} onChange={handleChange} className=" border border-gray-600 text-gray-900  bg-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-2 w-50 h-11 mt-2 mr-10" placeholder=" JoeKent or joekent@gmail.com" required/>
                                </div>
                                <p className='mt-8 ml-4'>Password </p>
                                <div>
                                    <input type="text" name="password" value={formData.password} onChange={handleChange} className=" border border-gray-600 text-gray-900  bg-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-2 w-88  mt-2 h-11"  placeholder=" password" required/>
                                </div>
                        </div>
                        </div>
                        </div>
                        </div>
                            <button type="submit" className="bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-10 py-2 text-white inline-flex items-center">
                                <p className='px-2'>Login</p>
                            </button>
                    </form>
                    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginTop:'5px',color:'white'}}>
                    <p>Are you new here? <a href='/' className='hover:underline text-blue-700'>Create an account now</a></p>
                    </div>
                </div>
            </div>
       </div>
   </>
 )
}
//email fullName password usename avatar
export default Login

