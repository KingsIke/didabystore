import React from 'react';
import Dogo from '../../images/didaylogo.jpg';
import { FaGooglePlusG } from 'react-icons/fa';

function Signup() {
  return (
    <div className="flex justify-center items-center h-screen bg-['#f3f4f6']">
      <div className="bg-['#f3f4f6'] p-8 rounded w-1/2">
        <div className="mx-auto max-w-2xl text-center mb-6">
          <img className="mx-auto max-w-[200px]" src={Dogo} alt="DidayLogo" />
          <h6 className="text-2xl mt-7 font-semibold mb-4">Create New Account</h6>
        </div>
   
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium mb-1"></label>
            <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" className="w-full border px-3 py-2 rounded text-center" required />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium mb-1"></label>
            <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" className="w-full border px-3 py-2 rounded text-center" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1"></label>
            <input type="email" id="email" name="email" placeholder="Enter Username / Email Address" className="w-full border px-3 py-2 rounded text-center" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1"></label>
            <input type="password" id="password" name="password" placeholder="Enter Password" className="w-full border px-3 py-2 rounded text-center" required />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1"></label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" className="w-full border px-3 py-2 rounded text-center" required />
          </div>
          <button type="submit" className="w-full  bg-[#ffc633] text-black text-lg py-1 rounded hover:bg-[#ffc611] font-semibold ">Getting Started</button>
        </form>
  
        <div className="text-center">
          <button className="w-fixed mt-6 mx-auto bg-[#d40000] text-white rounded-none hover:bg-red-600 font-medium px-1 ">
            <FaGooglePlusG className="inline-block mr-1" /> Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
