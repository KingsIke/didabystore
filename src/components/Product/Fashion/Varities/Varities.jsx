// import React from 'react'
import React from "react";
import { Link } from "react-router-dom";
import Cloth from '../../../../images/productCloth.png'

import { AiOutlineHeart } from "react-icons/ai";

const Varities = () => {
  return (
    <div className="newArrivalsVar border-solid border-2 border-orange-400 mt-1">





    <div className="headerArrivalVar ">

        <p className=" newPageVar ">Clothing</p>
        <p className="Var"><Link to="/clothing">View all</Link></p>
    </div>
           <div className="arrivalContainerVar mt-3">




<div className="   border-solid border-2 border-blue-400">


    <div className="imageArrivalVar ">

        <span>
            <AiOutlineHeart class="imageSpanVar text-black  " />
        </span>
        <img src={Cloth} alt="Avatar" className=" rounded-[12px] " />
    </div>

    <div className="priceTitleVar flex justify-between mt-3 ">
        <p className="titlePVar">
            Women
        </p>
        <p className="pricePVar pt-1">N50,000</p>

    </div>



</div>
<div className="   border-solid border-2 border-blue-400">


    <div className="imageArrivalVar ">

        <span>
            <AiOutlineHeart class="imageSpanVar text-black  " />
        </span>
        <img src={Cloth} alt="Avatar" className=" rounded-[12px] " />
    </div>

    <div className="priceTitleVar flex justify-between mt-3 ">
        <p className="titlePVar">
            Office Shirt
        </p>
        <p className="pricePVar pt-1">N10,000</p>

    </div>



</div>
<div className="   border-solid border-2 border-blue-400">


    <div className="imageArrivalVar ">

        <span>
            <AiOutlineHeart class="imageSpanVar text-black  " />
        </span>
        <img src={Cloth} alt="Avatar" className=" rounded-[12px] " />
    </div>

    <div className="priceTitleVar flex justify-between mt-3 ">
        <p className="titlePVar">
            Beautiful Abayas
        </p>
        <p className="pricePVar pt-1">N1,000</p>

    </div>



</div>
<div className="   border-solid border-2 border-blue-400">


    <div className="imageArrivalVar ">

        <span>
            <AiOutlineHeart class="imageSpanVar text-black  " />
        </span>
        <img src={Cloth} alt="Avatar" className=" rounded-[12px] " />
    </div>

    <div className="priceTitleVar flex justify-between mt-3 ">
        <p className="titlePVar">
            iphone
        </p>
        <p className="pricePVar pt-1">N2,500,000</p>

    </div>



</div>


</div>
    </div>
  )
}

export default Varities