import React from 'react'
import { NavBar } from '../../Nav/NavBar/NavBar';
import Account from '../../../images/account.png';
import { Link } from "react-router-dom";


const UpdateProfile = () => {
  return (
    <div>
        <NavBar />

        <div className='overflow-hidden  shadow max-w-[600px] h-[435px] bg-white rounded-[15px] mx-auto my-[20px] shadow-4 shadow-y-10 shadow-blur-10 shadow-spread-10 shadow-black'>

            <div className='flex overflow-hidden'>
                    <div className=' overflow-hidden w-[200px] h-[435px] border border-stone-400 rounded-l-lg '>
                        <div className=' w-[150px] items-center mx-auto  mt-4'>

                        <h1 className='text-zinc-950 text-lg font-bold mt-2 '>Account Settings</h1>

                            <img src={Account} alt="" className='w-[100px] h-[100px] rounded-full mt-4 mx-auto'  />
                            <p className='mt-2 mx-auto text-xs text-center hover:font-bold'>Change Picture</p>

        
                            <h2 className='text-sm  ml-4 mt-3  font-semibold hover:font-bold '><Link to="/profile"> Update Profile</Link></h2>
                            <h2 className='text-sm w ml-4 mt-3 font-semibold hover:font-bold'>  <Link to="/password">Change Password</Link></h2>
                            <h2 className='text-sm ml-4 mt-3 font-semibold hover:font-bold'>Log Out</h2>

                        </div>

                    </div>
                    <div>


                        <div className='overflow-hidden w-[400px] h-[0px] border  border-stone-400 mt-[50px]'></div>
                      
                        <form action="" className=" w-[330px] mx-auto mt-5 items-center ">
 
                        <div className="mb-3 font-semibold ">
   <label htmlFor="" >Name/Business Name</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Name"
      className="w-full border px-3 py-2 h-[40px] rounded-[5px]"
      required
    />
  </div>
 
  <div className="mb-3 font-semibold">
   <label htmlFor="">Phone Number </label>
    <input
      type="tel"
      id="name"
      name="name"
      placeholder="07011221122"
      className="w-full border px-3 py-2 h-[40px] rounded-[5px]"
      required
    />
  </div>
  <div className="mb-3 font-semibold">
   <label htmlFor="">Location</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Lagos"
      className="w-full border px-3 py-2 h-[40px] rounded-[5px]"
      required
    />
  </div> 
   <div className="mb-3 font-semibold">
   <label htmlFor="">Address</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Balogun Market, Eko Lagos"
      className="w-full border px-3 py-2 h-[40px] rounded-[5px]"
      required
    />
  </div>  
 






  <button
  type="submit"
  className="text-center ml-[229px] border border-yellow-700 text-white text-xs w-[100px] h-[35px] rounded-[11px] bg-[#87C505] py-1 mt-3 hover:bg-[#87C505]"
>
  Save Changes
</button>


  {/* <p className="cursor-pointer signUpP">
    <Link to="/">
    Already have an account?  <span>Sign In</span>
    </Link>
  </p> */}
</form> 

                    </div>
            </div>

        </div>
    </div>
  )
}

export default UpdateProfile