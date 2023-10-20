import React from 'react';
import Cloth from '../../../images/newArrivals.png'

import Shoe from '../../../images/bestSales.png'
// import Perfume from '../../../images/bestsale1.png'
import { AiOutlineHeart } from "react-icons/ai";
// import { AiFillHeart } from "react-icons/ai"

const Fashion = () => {
    return (
        <div>
            <div className="flex flex-row justify-between  mt-1 mb-2">
                <p className="  text-zinc-950 text-3xl font-bold font-['Mada']">Fashion</p>
                <p className=" pt-2">View all</p>
            </div>
            <div className='flex flex-row justify-between'>


            <div className="  w-[212px] border-solid border-2 border-blue-400">
                <div className="imageFashion flex justify-between w-[210px] h-[210px] rounded-[12px]">

                    <span>
                        <AiOutlineHeart class="imageSpan text-[20px] text-black p-[6px] m-0 " />
                    </span>
                    <img src={Shoe} alt="Avatar" className=" rounded-[12px] " />
                </div>

                <div className="priceTitle flex justify-between mt-3 ">
                    <p className="titleP">
                        Men's Sneakers
                    </p>
                    <p className="priceP pt-1">N2,500,000</p>

                </div>



            </div>
            </div>
        </div>
    )
}

export default Fashion