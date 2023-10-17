import React from 'react';

import SignupImage from "../../images/Group 77.svg";
import { Link } from "react-router-dom";





function Signup() {
  return (






    <div className="flex overflow-hidden signInContainer">
    {/* Left side with image */}
    <div className="flex-1  flex items-center justify-center  w-1/4">
      <img src={SignupImage} alt="SignupImage" class="h-full w-full" />
    </div>

    {/* Right side with sign-up form */}
    <div className="flex-1 flex flex-col items-center justify-center     w-3/4">
      <h3 className="signIn">Create an Account</h3>
      <p className="signInP">Welcome to Didaby store</p>
      <button 
          type="submit"
          className="googleButton w-[463px] h-[50px] mt-2 py-1  hover:bg-[#87C505] "
        >
          Sign In with Google
        </button>
        <div className="container w-[463px] mt-3 mb-3">
  <span className="divider"></span>
  <span>OR</span>
  <span className="divider"></span>
</div>

<form action="" className="signInForm w-[463px] ">
  <div className="mb-3">
   
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Name"
      className="w-full border px-3 py-2 h-[50px] rounded-[15px]"
      required
    />
  </div>

  <div className="mb-3">
  
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email Address"
      className="w-full border px-3 py-2 h-[50px] rounded-[15px]"
      required
    />
  </div>

  <div className="mb-3">
  
    <input
      type="tel"
      id="phone"
      name="phone"
      placeholder="Phone Number"
      className="w-full border px-3 py-2 h-[50px] rounded-[15px]"
      required
    />
  </div>

  <div className="mb-3">
  
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Enter Password"
      className="w-full border px-3 py-2 h-[50px] rounded-[15px]"
      required
    />
  </div>

  <div className="mb-3">
    
    <input
      type="password"
      id="retypePassword"
      name="retypePassword"
      placeholder="Retype Password"
      className="w-full border px-3 py-2 h-[50px] rounded-[15px]"
      required
    />
  </div>

  <div className="mb-3">
    <input
      type="checkbox"
      id="terms"
      name="terms"
      className="border h-[15px] w-[15px] rounded-[5px] pl-2"
      required
    />
   <label htmlFor="">I agree to all terms and conditions</label>

  </div>

  <button
    type="submit"
    className="googleButton w-[463px] h-[50px] bg-[#87C505] py-1 hover:bg-[#87C505]"
  >
    Sign Up
  </button>

  <p className="cursor-pointer signUpP">
    <Link to="/">
    Already have an account?  <span>Sign In</span>
    </Link>
  </p>
</form> 

    </div>
  </div>



 







    // <div className="flex justify-center items-center h-screen bg-['#f3f4f6']">
    //   <div className="bg-['#f3f4f6'] p-8 rounded w-1/2">
    //     <div className="mx-auto max-w-2xl text-center mb-6">
    //       <img className="mx-auto max-w-[200px]" src={Dogo} alt="DidayLogo" />
    //       <h6 className="text-2xl mt-7 font-semibold mb-4">Create New Account</h6>
    //     </div>
   
    //     <form>
    //       <div className="mb-4">
    //         <label htmlFor="firstName" className="block text-sm font-medium mb-1"></label>
    //         <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" className="w-full border px-3 py-2 rounded text-center" required />
    //       </div>
    //       <div className="mb-4">
    //         <label htmlFor="lastName" className="block text-sm font-medium mb-1"></label>
    //         <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" className="w-full border px-3 py-2 rounded text-center" required />
    //       </div>
    //       <div className="mb-4">
    //         <label htmlFor="email" className="block text-sm font-medium mb-1"></label>
    //         <input type="email" id="email" name="email" placeholder="Enter Username / Email Address" className="w-full border px-3 py-2 rounded text-center" required />
    //       </div>
    //       <div className="mb-4">
    //         <label htmlFor="password" className="block text-sm font-medium mb-1"></label>
    //         <input type="password" id="password" name="password" placeholder="Enter Password" className="w-full border px-3 py-2 rounded text-center" required />
    //       </div>
    //       <div className="mb-6">
    //         <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1"></label>
    //         <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" className="w-full border px-3 py-2 rounded text-center" required />
    //       </div>
    //       <button type="submit" className="w-full  bg-[#ffc633] text-black text-lg py-1 rounded hover:bg-[#ffc611] font-semibold ">Getting Started</button>
    //     </form>
  
    //     <div className="text-center">
    //       <button className="w-fixed mt-6 mx-auto bg-[#d40000] text-white rounded-none hover:bg-red-600 font-medium px-1 ">
    //         <FaGooglePlusG className="inline-block mr-1" /> Sign Up with Google
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Signup;
