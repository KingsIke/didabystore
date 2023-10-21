import React from 'react'
import { Link } from "react-router-dom";
import Dogo from '../../images/didayIcon1.png';
import "./FooterD.css"
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";



const FooterD = () => {
    return (
        <div className=' w-[100%] h-[327px] bg-black border-solid border-2 border-orange-400'>
            <div className=" ">
                <div className=" flex flex-row  mt-6 ">








                    <div className='mr-[30px] ml-1'>
                        <img className="rounded-[15px] h-[53px] w-[120px] mb-4" src={Dogo} alt="DidayLogo" />
                        <p className='text-zinc-100 text-base font-normal whitespace-nowrap'>Everything you want in one place</p>
                        <div className=' flex flex-row mt-4'>
                            <span className=''>
                                <FiFacebook class="bg-white w-7 h-7 text-[30px] text-black p-1  mr-2 border-solid border-2 border-black rounded-lg " />
                            </span>
                            <span>
                                <FiInstagram class="bg-white w-7 h-7 text-[25px] text-black p-1 mr-2 border-solid border-2 border-black rounded-lg  " />
                            </span>
                            <span>
                                <FiTwitter class="bg-white  w-7 h-7 text-[25px] text-black p-1 mr-2 border-solid border-2 border-black rounded-lg  " />
                            </span>
                            <span>
                                <FaWhatsapp class="bg-white w-7 h-7 text-[25px] text-black p-1 mr-2 border-solid border-2 border-black rounded-lg  " />
                            </span>
                        </div>
                    </div>

                    <div className=' footerDiv mt-5 flex flex-row  justify-between'>



                        <div className='text-white mr-[35px] whitespace-nowrap'>
                            <h3 className=' '>Fashion</h3>
                            <h3 className='pt-2 '>Laptops & Computers</h3>
                            <h3 className='pt-2 '>Groceries</h3>
                        </div>

                        <div className='text-white mr-[35px] whitespace-nowrap'>
                            <h3 className=' '>Beauty</h3>
                            <h3 className='pt-2 '>Babies & Kids</h3>
                            <h3 className='pt-2 '>Health and Fitness</h3>
                        </div>

                        <div className='text-white mr-[35px] whitespace-nowrap'>
                            <h3 className=' '>Phone & Tablet</h3>
                            <h3 className='pt-2 '>Electronics</h3>
                            <h3 className='pt-2 '>Appliances</h3>
                        </div>
                        <div className='text-white  '>
                            <p className='whitespace-nowrap pagingD text-zinc-100 text-[14px]  tracking-normal'>Get update on our latest deals and discount by subscribing to our newsletter</p>
                            <div className=' footerinput relative mt-5'>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="w-[417px] h-[45px] bg-zinc-100 rounded-[10px] rounded-r-lg"
                                />
                                <button
                                    className="absolute right-0 top-0 h-[46px] bg-lime-500 rounded-[10px] px-4  text-zinc-950 text-lg font-semibold m-0"

                                >
                                    Subscribe
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default FooterD