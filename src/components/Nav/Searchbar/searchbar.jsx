// import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { SlArrowDown } from 'react-icons/sl';
import { BiSolidCart } from 'react-icons/bi';
import { IoMdContact } from 'react-icons/io';
import { GiSelfLove } from 'react-icons/gi';
import BagLogo from '../../../images/ShoppingBagOutline.png';
import Dashboard from '../Dashboard/Dashboard'

const SearchInput = ({ 
    // onSearch 
}) => {
// const ref = useRef(null);

return (<>    
<Dashboard />
    
<div class="flex items-stretch justify-between b border-double border-4 border-indigo-600 justify-items-center mb-10 py-0 ml-2">
    <div class="flex">
    <h1 class="font-bold text-4xl leading-48 font-display">Didaby</h1>
    <img src={BagLogo} alt="" class="w-10 h-10"/>
    </div>
  
  <form>

    <div class="flex items-center mt-1">

      {/* <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
          <li>
            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
          </li>
          <li>
            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
          </li>
          <li>
            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
          </li>
          <li>
            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
          </li>
        </ul>
      </div> */}
      {/* <div class="relative   w-5/6">
        <input type="search" id="search-dropdown" class=" py-2 pr-10 pl-12 rounded-l-lg bg-gray-100 focus:outline-none focus:ring block p-2.5 w-full z-20 text-sm text-gray-900     dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 " placeholder="search and hit enter  " required />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BsSearch className="text-gray-500" />
        </div>
      </div>
      <button id="dropdown-button" data-dropdown-toggle="dropdown" class="py-2 pr-10 pl-12 bg-gray-100  flex-shrink-0 z-10 inline-flex items-center  px-4 text-sm font-medium text-center border border-gray-300 rounded-r-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 text-gray-400" type="button">All categories
      </button> */}


<div class="relative w-full">
    <input
        type="search"
        id="search-dropdown"
        class="py-2 pr-10 pl-12 rounded-l-lg bg-gray-100 focus:outline-none focus:ring block p-2.5 w-full z-20 text-sm text-gray-900 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        placeholder="search and hit enter"
        required
    />
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <BsSearch class="text-gray-500" />
    </div>
</div>
<button
    id="dropdown-button"
    data-dropdown-toggle="dropdown"
    class="py-2 pr-6 pl-10 bg-gray-100 flex-shrink-0 z-10 inline-flex items-center px-4 text-sm font-medium text-center border border-gray-300 rounded-r-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 text-gray-400"
    type="button"
>
    All categories
</button>

    </div>




  </form>

  <div class="h-10 mr-5">
    <ul class="flex space-x-6 py-1">
        <li class="flex items-center mr-4">
            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-400">
                <IoMdContact class="text-2xl text-black" />
            </div>
            <span class="text-lg ml-1">hi Victor</span>
            <span class="ml-2 flex items-center ">
                <SlArrowDown class="text-base" />
            </span>
        </li>

        <li class="flex items-center">
            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-400">
                <GiSelfLove class="text-2xl text-black" />
            </div>
        </li>
        <li class="flex items-center relative">
            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-400">
                <BiSolidCart class="text-2xl text-black" />
                <span class="absolute inline-flex rounded-full h-4 w-4 bg-red-900 top-0 right-0 items-center justify-center text-white text-xs">
                    4
                </span>
            </div>
        </li>
    </ul>
</div>





</div>


</>

  );
  };

  export default SearchInput;