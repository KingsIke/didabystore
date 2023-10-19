import React from 'react'
import { Link } from "react-router-dom";
import Dogo from '../../images/didayIcon1.png';
import "./FooterD.css"
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";




import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";


const FooterD = () => {
    return (
        <div className='w-100% h-[327px] bg-black border-solid border-2 border-orange-400'>
                <div className=" mr-4 ml-5 pt-10 ">
            <div className="container mx-auto  ">








            <div className='mr-[25px]'>
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


            <div className='text-white mr-[30px] whitespace-nowrap'>
                <h3 className=' '>Fashion</h3>
                <h3 className='pt-2 '>Laptops & Computers</h3>
                <h3 className='pt-2 '>Groceries</h3>
            </div>

            <div className='text-white mr-[30px] whitespace-nowrap'>
                <h3 className=' '>Beauty</h3>
                <h3 className='pt-2 '>Babies & Kids</h3>
                <h3 className='pt-2 '>Health and Fitness</h3>
            </div>

            <div className='text-white mr-[30px] whitespace-nowrap'>
                <h3 className=' '>Phone & Tablet</h3>
                <h3 className='pt-2 '>Electronics</h3>
                <h3 className='pt-2 '>Appliances</h3>
            </div>
            <div className='text-white  '>
                <p className='whitespace-nowrap text-zinc-100 text-[14px] font-normal tracking-normal'>Get update on our latest deals and discount by subscribing to our newsletter</p>
                <div className='relative mt-5'>
  <input
    type="text"
    name=""
    id=""
    className="w-[420px] h-[46px] bg-zinc-100 rounded-[10px]"
  />
  <button
    className="absolute right-0 top-0 h-[46px] bg-lime-500 rounded-[10px] px-4"
   
  >
    Subscribe
  </button>
</div>


            </div>
            </div>
                </div>


</div>
            // <div className="container mx-auto">



            //     <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
            //         <div>
            //             <p id="Clothing-heading" className="font-medium text-gray-900">
            //                 DIDABY
            //             </p>
            //             <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
            //                 <li className="flex">
            //                     <Link to="#" className="hover:text-gray-800">
            //                         Tops
            //                     </Link>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Dresses</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Pants</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Denim</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Sweaters</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">T-Shirts</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Jackets</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Activewear</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Browse All</a>
            //                 </li>
            //                 {/* Other list items */}
            //             </ul>
            //         </div>
            //         <div>
            //             <p id="Accessories-heading" className="font-medium text-gray-900">
            //                 Accessories
            //             </p>
            //             <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
            //                 <li className="flex">
            //                     <Link to="#" className="hover:text-gray-800">
            //                         Watches
            //                     </Link>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Wallets</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Bags</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Sunglasses</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Hats</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Belts</a>
            //                 </li>
            //                 {/* Other list items */}
            //             </ul>
            //         </div>
            //         <div>
            //             <p id="Brands-heading" className="font-medium text-gray-900">
            //                 Brands
            //             </p>
            //             <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
            //                 <li className="flex">
            //                     <Link to="#" className="hover:text-gray-800">
            //                         Full Nelson
            //                     </Link>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">My Way</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Re-Arranged</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Counterfeit</a>
            //                 </li>
            //                 <li class="flex">
            //                     <a href="#" class="hover:text-gray-800">Significant Other</a>
            //                 </li>
            //                 {/* Other list items */}
            //             </ul>
            //         </div>
            //     </div>
            // </div>
        
    )
}

export default FooterD