import React from 'react'

import Cloth from '../../../../images/productBag.png'
import './Varities.css'
import { AiOutlineHeart } from "react-icons/ai";

const Bag = () => {
  return (
    <div className="newArrivalsVar border-solid border-2 border-orange-400 mt-1">





    <div className="headerArrivalVar ">

        <p className=" newPageVar ">Bags</p>
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
     Beautiful HandBag
 </p>
 <p className="pricePVar pt-1">N2,500,000</p>

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
     Laptop Bag
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
     Ladies Bag
 </p>
 <p className="pricePVar pt-1">N200</p>

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

export default Bag