import React, { useState, useRef } from 'react'
import { NavBar } from '../Nav/NavBar/NavBar';
import { Link } from "react-router-dom";
import { FiUpload } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';


import { IoIosArrowDown } from 'react-icons/io';
import './Sell.css';
import { Categories, Locations, Genders } from '../Category/MenuItems';



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


    const [imagesArray, setImagesArray] = useState([]);

    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const fileObjects = e.target.files;
        const selectedFileArray = Array.from(fileObjects);

        const updatedImagesArray = selectedFileArray.map((file) => {
            return URL.createObjectURL(file);
        });

        //   setImagesArray(updatedImagesArray);
        setImagesArray((previousImage) => previousImage.concat(updatedImagesArray));

    };



    return (
        <div className='h-[600px]'>

            <NavBar />

            <div className='overflow-hidden  shadow max-w-[600px] h-[515px] bg-white rounded-[15px] mx-auto mt-[20px] shadow-4 shadow-y-10 shadow-blur-10 shadow-spread-10 shadow-black'>

                <div className=' overflow-hidden mx-4 w-[550px] border border-red-600 '>
                    <h1 className='pl-3 font-bold'>Sell</h1>





                    <div className=' flex flex-row justify-between  ml-2 mr-3 my-3 category-container '>
                        <div className='category-dropdown' onClick={() => handleToggleClick(0)}>
                            <p>Category</p>
                            <div className='cursor-pointer flex justify-between w-[250px] h-[30px] rounded-[9px] border border-stone-300 text-center'>
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
                            <div className='cursor-pointer flex justify-between w-[250px] h-[30px] rounded-[9px] border border-stone-300 text-center'>
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

                            <input type="text" name="" id="" placeholder='Female High heeled shoe' className='w-[250px] h-[30px] rounded-[9px] text-xs border border-stone-300' />
                        </div>

                        <div className='flex flex-col'>

                            <label htmlFor="">Price</label>

                            <input type="text" name="" id="" placeholder='N25,000' className='w-[250px] h-[30px] rounded-[9px] text-xs border border-stone-300' />
                        </div>






                    </div>


                    <div className=' flex flex-row justify-between  ml-2 mr-3 my-3  '>

                        <div className='flex flex-col'>

                            <label htmlFor="">Size</label>

                            <input type="text" name="" id="" placeholder='40, 41, 42' className='w-[250px] h-[30px] rounded-[9px] text-xs border border-stone-300' />
                        </div>

                        <div className='flex flex-col'>

                            <label htmlFor="">Available Colours</label>

                            <input type="text" name="" id="" placeholder='Black, Brown, White' className='w-[250px] h-[30px] rounded-[9px] text-xs border border-stone-300' />
                        </div>

                    </div>



                    <div className=' flex flex-row justify-between  ml-2 mr-3 my-3  '>


                        <div className='' onClick={() => handleToggleClick(2)}>
                            <p>Gender</p>
                            <div className='cursor-pointer flex justify-between w-[250px] h-[30px] rounded-[9px] border border-stone-300 text-center'>
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

                            <input type="text" name="" id="" className='w-[250px] h-[30px] rounded-[9px] text-xs border border-stone-300' />
                        </div>
                    </div>



                    <div className=' flex flex-row justify-between  ml-2 mr-3 my-3  '>

                        <div className='flex flex-col '>
                            <label htmlFor="">Add Photos</label>
                            <div
                                className=" flex items-center justify-center w-[250px] h-[120px] border border-dashed border-[#868686] rounded-[12px] text-xs"
                                onClick={() => fileInputRef.current.click()}
                            >
                                <div className="overflow-hidden flex flex-col w-full h-full items-center justify-center mt-auto">
                                    {imagesArray.length === 0 && (
                                        <>
                                            <FiUpload className='w-8 h-8 mb-2 font-bold text-gray-500 dark:text-gray-400' />

                                            <p class="overflow-hidden mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span class="font-bold text-[#070707]">Click to upload</span> or drag and drop
                                            </p>
                                            <p class=" overflow-hidden text-[9px] text-gray-500 dark:text-gray-400">Supported formats are .jpg, .gif and .png, 5MB max</p>
                                        </>
                                    )}

                                    <input
                                        type="file"
                                        id="file-input"
                                        multiple
                                        hidden
                                        onChange={handleFileChange}
                                        accept='image/png, image/jpeg, image/gif'
                                        ref={fileInputRef}
                                    />
                                    <br />
                                    {imagesArray.length > 0 && (imagesArray.length > 4 ? (
                                        <button className='overflow-hidden mb-2 '>you can upload only 4 images!{imagesArray.length - 4}</button>
                                    ) : (
                                        <button className='text-green-600'>
                                            Upload
                                        </button>
                                    ))}
                                    <div id="preview" className='flex flex-wrap overflow-hidden'>
                                        {imagesArray && imagesArray.map((image, index) => {
                                            return (
                                                <div key={image}>
                                                    <img src={image} alt="pictures" className='h-[60px] w-[60px]' />
                                                    <button onClick={() => setImagesArray(imagesArray.filter((e) => e !== image))}

                                                    >
                                                        <AiFillDelete className='text-[#e43a94] hover:text-red-500' />
                                                    </button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='flex flex-col '>

                            <label htmlFor="">Description</label>

                            <input type="text" name="" id="" className='w-[250px] h-[120px] rounded-[9px] text-xs border border-stone-300' />
                        </div>
                    </div>


                    {/* BUTTONS  */}
                    <div className=' flex flex-row justify-between  ml-2 mr-3 my-3  '>
                        <div className='flex flex-col '>
                            <button
                                type="submit"
                                className="text-center  border border-yellow-700  text-sm w-[80px] h-[35px] rounded-[11px] bg-[#f8f8f8] py-1 mt-3 hover:bg-[#87C505]"
                            >
                                 <Link to="/home">
  
   
                                Cancel
                                </Link>
                            </button>
                        </div>

                        <div className='flex flex-col '>
                            <button
                                type="submit"
                                className="text-center ml-[229px] font-bold border border-yellow-700 text-white text-xs w-[80px] h-[35px] rounded-[11px] bg-[#87C505] py-1 mt-3 hover:bg-[#fafafa] hover:text-black"
                            >
                                Sell Now
                            </button>
                        </div>




                    </div>


                </div>
            </div>



        </div>
    )
}

export default Sell



