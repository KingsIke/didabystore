// import React from 'react'
import React from "react";
import Lady from '../../../../images/productionJewelry.png'
import Men from '../../../../images/productionJewelry.png'


import { AiOutlineHeart } from "react-icons/ai";

const Jewelry = () => {
  return (
    <div className="newArrivalsVar border-solid border-2 border-orange-400 mt-1">





    <div className="headerArrivalVar ">

        <p className=" newPageVar ">Jewelry</p>
        <p className="Var">View all</p>
    </div>
           <div className="arrivalContainerVar mt-3">




<div className="   border-solid border-2 border-blue-400">


    <div className="imageArrivalVar ">

        <span>
            <AiOutlineHeart class="imageSpanVar text-black  " />
        </span>
        <img src={Lady} alt="Avatar" className=" rounded-[12px] " />
    </div>

    <div className="priceTitleVar flex justify-between mt-3 ">
        <p className="titlePVar">
            Gold Chain Necklace
        </p>
        <p className="pricePVar pt-1">N50,000</p>

    </div>



</div>
<div className="   border-solid border-2 border-blue-400">


    <div className="imageArrivalVar ">

        <span>
            <AiOutlineHeart class="imageSpanVar text-black  " />
        </span>
        <img src={Men} alt="Avatar" className=" rounded-[12px] " />
    </div>

    <div className="priceTitleVar flex justify-between mt-3 ">
        <p className="titlePVar">
            Diamond earing
        </p>
        <p className="pricePVar pt-1">N10,000</p>

    </div>



</div>
<div className="   border-solid border-2 border-blue-400">


    <div className="imageArrivalVar ">

        <span>
            <AiOutlineHeart class="imageSpanVar text-black  " />
        </span>
        <img src={Lady} alt="Avatar" className=" rounded-[12px] " />
    </div>

    <div className="priceTitleVar flex justify-between mt-3 ">
        <p className="titlePVar">
            Gold Bracelet
        </p>
        <p className="pricePVar pt-1">N1,000</p>

    </div>



</div>
<div className="   border-solid border-2 border-blue-400">


    <div className="imageArrivalVar ">

        <span>
            <AiOutlineHeart class="imageSpanVar text-black  " />
        </span>
        <img src={Men} alt="Avatar" className=" rounded-[12px] " />
    </div>

    <div className="priceTitleVar flex justify-between mt-3 ">
        <p className="titlePVar">
            Fashion Ring
        </p>
        <p className="pricePVar pt-1">N2,500,000</p>

    </div>



</div>


</div>
    </div>
  )
}

export default Jewelry