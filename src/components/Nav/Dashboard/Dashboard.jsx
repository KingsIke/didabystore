import React from 'react';
// import Dogo from '../../images/didaylogo.jpg';
// import { FaGooglePlusG } from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { FaQuestionCircle } from 'react-icons/fa';
// import { BiSolidCart } from 'react-icons/bi';



function Dashboard() {
  return (
   <>
   <div className="container">

<div className="bg-[#b1b0b0] fixed w-full z-20 top-0 left-0 px-0 py-0 text-justify">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto">

    <p className="self-center text-xs font-bold whitespace-nowrap dark:text-white ml-4">
      <FaMicrophone className="inline-block mr-1" />(01)-57293221
    </p>
    <p className="self-center text-xs font-bold whitespace-nowrap dark:text-white ml-4">
      <AiFillMessage className="inline-block mr-1" />info@didaby.com
    </p>

    <div className="flex ml-auto mr-6">
      <span className="self-center text-xs font-bold whitespace-nowrap dark:text-white ">
        <FaQuestionCircle className="inline-block mr-1" />Help?
      </span>
    </div>

  </div>
</div>

</div>
   </>
  );
}

export default Dashboard;
