import React from "react";
import { Link } from "react-router-dom";

const ProductButton = () => {
  return (
    <div className="mt-5 ">
      <button className="text-white text-lg font-normal font-['Mada'] bg-[#87c505] mr-[17px] rounded-[5px] px-2 py-2"> <Link to="/product">ALL</Link></button>
      <button className="text-zinc-800 text-lg font-normal font-['Mada'] bg-[#f3f3f3] hover:bg-[#87c505] mr-[17px] rounded-[5px] px-2 py-2"><Link to="/fashion">Fashion</Link></button>
      <button className="text-zinc-800 text-lg font-normal font-['Mada'] bg-[#f3f3f3] hover:bg-[#87c505] mr-[17px] rounded-[5px] px-2 py-2"><Link to="/beauty">Beauty</Link></button>
      <button className="text-zinc-800 text-lg font-normal font-['Mada'] bg-[#f3f3f3] hover:bg-[#87c505] mr-[17px] rounded-[5px] px-2 py-2"><Link to="/phone">Phones & Tablets</Link></button>
      <button className="text-zinc-800 text-lg font-normal font-['Mada'] bg-[#f3f3f3] hover:bg-[#87c505] mr-[17px] rounded-[5px] px-2 py-2"><Link to="/laptop">Laptops & Computers</Link></button>
      <button className="text-zinc-800 text-lg font-normal font-['Mada'] bg-[#f3f3f3] hover:bg-[#87c505] mr-[17px] rounded-[5px] px-2 py-2"><Link to="/kids">Babies & Kids</Link></button>
      <button className="text-zinc-800 text-lg font-normal font-['Mada'] bg-[#f3f3f3] hover:bg-[#87c505]  mr-[17px] rounded-[5px] px-2 py-2"><Link to="/electronics">Electronics</Link></button>
      <button className="text-zinc-800 text-lg font-normal font-['Mada'] bg-[#f3f3f3] hover:bg-[#87c505] mr-[17px] rounded-[5px] px-2 py-2"><Link to="/groceries">Groceries</Link></button>
      <button className="text-zinc-800 text-lg font-normal font-['Mada'] bg-[#f3f3f3] hover:bg-[#87c505] mr-[17px] rounded-[5px] px-2 py-2"><Link to="/health">Health & Fitness</Link></button>
      <button className="text-zinc-800 text-lg font-normal font-['Mada'] bg-[#f3f3f3] hover:bg-[#87c505] mr-[17px] rounded-[5px] px-2 py-2"><Link to="/appliance">Appliance</Link></button>
    </div>
  );
};

export default ProductButton;
// hover:bg-[#87c505] active:bg-[#87c505] focus:outline-none focus:ring focus:ring-violet-300 
