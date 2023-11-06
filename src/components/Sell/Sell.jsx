import React, { useState } from 'react'
import { NavBar } from '../Nav/NavBar/NavBar';
// import Account from '../../../images/account.png';
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
// import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './Sell.css';
import { Categories, Locations, Genders } from '../Category/MenuItems';
// import { Link } from 'react-router-dom';


const Sell = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [showLocationMenu, setShowLocationMenu] = useState(false);
    const [showGenderMenu, setShowGenderMenu] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState(''); // Initial category text
    const [selectedLocation, setSelectedLocation] = useState(''); // Initial location text
    const [selectedGender, setSelectedGender] = useState(''); // Initial price text





    const toggleStates = [showMenu, showLocationMenu, showGenderMenu];

    const toggleFunctions = [
        setShowMenu,
        setShowLocationMenu,
        setShowGenderMenu
    ];

    const handleToggleClick = (index) => {

        const updatedToggleStates = toggleStates.map((state, i) => (i === index ? !state : false));
        toggleFunctions.forEach((setToggle, i) => setToggle(updatedToggleStates[i]));
    };


    const handleOptionHover = (item) => {
        setSelectedItem(item);
    };

    const handleOptionClick = (item) => {
        setSelectedItem(item);
        setSelectedCategory(item); // Update the selected category text with the clicked item
    };



    const categories = Categories

    const locations = Locations

    const genders = Genders

    const toggleLocationMenu = () => {
        setShowLocationMenu(!showLocationMenu);
    };

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
        toggleLocationMenu(); // Close the location dropdown when a location is selected
    };


    const toggleGenderMenu = () => {
        setShowGenderMenu(!showGenderMenu);
    };
    const handleGenderClick = (gender) => {
        setSelectedGender(gender);
        toggleGenderMenu(); // Close the price dropdown when a price is selected
    };


    return (
        <div className='h-[600px]'>

            <NavBar />

            <div className='overflow-hidden  shadow max-w-[600px] h-[480px] bg-white rounded-[15px] mx-auto mt-[40px] shadow-4 shadow-y-10 shadow-blur-10 shadow-spread-10 shadow-black'>

                <div className=' overflow-hidden mx-4 w-[550px] border border-red-600 '>
                    <h1>Sell</h1>





                    <div className=' flex flex-row justify-between  ml-2 mr-3 my-3 category-container '>
                        <div className='category-dropdown' onClick={() => handleToggleClick(0)}>
                            <p>Category</p>
                            <div className='cursor-pointer flex justify-between w-[250px] h-[30px] rounded-[15px] border border-stone-300 text-center'>
                                <h1 className=' text-zinc-500 text-center pl-3 pt-1'>{selectedCategory}</h1>
                                <p className='py-2 pr-3 overflow-hidden'>
                                    <IoIosArrowDown />
                                </p>
                            </div>
                            <div className='absolute z-[3] bg-white text-black text-sm font-normal w-[540px]'>
                                {showMenu && (
                                    <div className='menuDivsell'>
                                        <ul className='unlistMenusell '>
                                            {categories.map((category, index) => (
                                                <li className='listedMenusell pl-2 hover:text-white'
                                                    key={index}
                                                    onMouseEnter={() => handleOptionHover(category)}
                                                >
                                                    {category.name}
                                                </li>
                                            ))}
                                        </ul>
                                        {selectedItem && (
                                            <div className=' '>
                                                {/* absolute left-[350px] */}
                                                <ul className='unlistedSubsell'>
                                                    {selectedItem.items && selectedItem.items.map((item, index) => (

                                                        <li key={index} className='listedSubMenusell hover:text-white'
                                                            onClick={() => handleOptionClick(item)}
                                                        >

                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* LOCATION  */}




                        <div className='' onClick={() => handleToggleClick(1)}>
                            <p>Location</p>
                            <div className='cursor-pointer flex justify-between w-[250px] h-[30px] rounded-[15px] border border-stone-300 text-center'>
                                <h1 className='text-zinc-500 text-center pl-3 pt-1'>{selectedLocation}</h1>
                                <p className='py-2 pr-3 overflow-hidden'>
                                    <IoIosArrowDown />
                                </p>
                            </div>
                            <div className='absolute z-[3] bg-white text-black text-xs font-normal'>
                                {showLocationMenu && (
                                    <div className='menuDivsell'>
                                        <ul className='unlistMenusell'>
                                            {locations.map((location, index) => (
                                                <li
                                                    className='listedMenusell pl-7 hover:text-white'
                                                    key={index}
                                                    onClick={() => handleLocationClick(location)}
                                                >
                                                    {location}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>






                    </div>

                    <div className=' flex flex-row justify-between  ml-2 mr-3 my-3  '>
                        <div className='flex flex-col'>

                            <label htmlFor="">Product Name</label>

                            <input type="text" name="" id="" placeholder='Female High heeled shoe' className='w-[250px] h-[30px] rounded-[12px] text-xs border border-stone-300' />
                        </div>

                        <div className='flex flex-col'>

                            <label htmlFor="">Price</label>

                            <input type="text" name="" id="" placeholder='N25,000' className='w-[250px] h-[30px] rounded-[12px] text-xs border border-stone-300' />
                        </div>











                    </div>


                    <div className=' flex flex-row justify-between  ml-2 mr-3 my-3  '>

                        <div className='flex flex-col'>

                            <label htmlFor="">Size</label>

                            <input type="text" name="" id="" placeholder='40, 41, 42' className='w-[250px] h-[30px] rounded-[12px] text-xs border border-stone-300' />
                        </div>

                        <div className='flex flex-col'>

                            <label htmlFor="">Available Colours</label>

                            <input type="text" name="" id="" placeholder='Black, Brown, White' className='w-[250px] h-[30px] rounded-[12px] text-xs border border-stone-300' />
                        </div>











                    </div>



                    <div className=' flex flex-row justify-between  ml-2 mr-3 my-3  '>


                        <div className='' onClick={() => handleToggleClick(2)}>
                            <p>Gender</p>
                            <div className='cursor-pointer flex justify-between w-[250px] h-[30px] rounded-[15px] border border-stone-300 text-center'>
                                <h1 className='text-zinc-500 text-center pl-3 pt-1'>{selectedGender}</h1>
                                <p className='py-2 pr-3 overflow-hidden'>
                                    <IoIosArrowDown />
                                </p>
                            </div>
                            <div className='absolute z-[3] bg-white text-black text-xs font-normal'>
                                {showGenderMenu && (
                                    <div className='menuDivsell'>
                                        <ul className='unlistMenusell'>
                                            {genders.map((gender, index) => (
                                                <li
                                                    className='listedMenusell pl-7 hover:text-white'
                                                    key={index}
                                                    onClick={() => handleGenderClick(gender)}
                                                >
                                                    {gender}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>


                        <div className='flex flex-col'>

                            <label htmlFor="">Brand</label>

                            <input type="text" name="" id="" className='w-[250px] h-[30px] rounded-[12px] text-xs border border-stone-300' />
                        </div>
                    </div>


                
                    <div className=' flex flex-row justify-between  ml-2 mr-3 my-3  '>
    
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 

                </div>
</div>
            </div>
        </div>
    )
}

export default Sell