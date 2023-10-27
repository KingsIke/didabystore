import React from 'react'
import Cloth from '../../../images/ChildrenCloth.png'
import '../Fashion/Varities/Varities.css'

import { AiOutlineHeart } from "react-icons/ai";

const ChildrenCloth = () => {
  return (

    <div className="newArrivalsVar border-solid border-2 border-orange-400 mt-1">





    <div className="headerArrivalVar ">

        <p className=" newPageVar ">Children Cloth </p>
        <p className="Var">View all</p>
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
      Girls's pink dress
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
        Girls's pink dress
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
        Girls's pink dress
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
        Girls's pink dress
        </p>
        <p className="pricePVar pt-1">N2,500,000</p>

    </div>



</div>


</div>
    </div>
  )
}



export default ChildrenCloth