// import React from 'react'
import React from "react";
import Shoes from '../../../../images/fashionAccessory.png'


import { AiOutlineHeart } from "react-icons/ai";

const Accessory = () => {
  return (
    <div className="newArrivalsVar border-solid border-2 border-orange-400 mt-1">





    <div className="headerArrivalVar ">

        <p className=" newPageVar ">Accessory</p>
        <p className="Var">View all</p>
    </div>
           <div className="arrivalContainerVar mt-3">




<div className="   border-solid border-2 border-blue-400">


    <div className="imageArrivalVar ">

        <span>
            <AiOutlineHeart class="imageSpanVar text-black  " />
        </span>
        <img src={Shoes} alt="Avatar" className=" rounded-[12px] " />
    </div>

    <div className="priceTitleVar flex justify-between mt-3 ">
        <p className="titlePVar">
           Brown Belts
        </p>
        <p className="pricePVar pt-1">N50,000</p>

    </div>



</div>
<div className="   border-solid border-2 border-blue-400">


    <div className="imageArrivalVar ">

        <span>
            <AiOutlineHeart class="imageSpanVar text-black  " />
        </span>
        <img src={Shoes} alt="Avatar" className=" rounded-[12px] " />
    </div>

    <div className="priceTitleVar flex justify-between mt-3 ">
        <p className="titlePVar">
            Sunshades
        </p>
        <p className="pricePVar pt-1">N10,000</p>

    </div>



</div>
<div className="   border-solid border-2 border-blue-400">


    <div className="imageArrivalVar ">

        <span>
            <AiOutlineHeart class="imageSpanVar text-black  " />
        </span>
        <img src={Shoes} alt="Avatar" className=" rounded-[12px] " />
    </div>

    <div className="priceTitleVar flex justify-between mt-3 ">
        <p className="titlePVar">
            Bridal Belt
        </p>
        <p className="pricePVar pt-1">N1,000</p>

    </div>



</div>
<div className="   border-solid border-2 border-blue-400">


    <div className="imageArrivalVar ">

        <span>
            <AiOutlineHeart class="imageSpanVar text-black  " />
        </span>
        <img src={Shoes} alt="Avatar" className=" rounded-[12px] " />
    </div>

    <div className="priceTitleVar flex justify-between mt-3 ">
        <p className="titlePVar">
            Black belts
        </p>
        <p className="pricePVar pt-1">N2,500,000</p>

    </div>



</div>


</div>
    </div>
  )
}

export default Accessory