import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './Category.css';
import { Categories, Locations, Price } from './MenuItems';
import { Link } from 'react-router-dom';

export default function Category() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [showPriceMenu, setShowPriceMenu] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState('Price'); // Initial price text

  const [selectedCategory, setSelectedCategory] = useState('Category'); // Initial category text
  const [selectedLocation, setSelectedLocation] = useState('Location'); // Initial location text




  const toggleStates = [showMenu, showLocationMenu, showPriceMenu];

  const toggleFunctions = [
    setShowMenu,
    setShowLocationMenu,
    setShowPriceMenu
  ];

  const handleToggleClick = (index) => {
    // Close all other open toggles
    const updatedToggleStates = toggleStates.map((state, i) => (i === index ? !state : false));
    toggleFunctions.forEach((setToggle, i) => setToggle(updatedToggleStates[i]));
  };
  // const toggleSubMenu = () => {
  //   setShowMenu(!showMenu);
  // };

  const handleOptionHover = (item) => {
    setSelectedItem(item);
  };

  const handleOptionClick = (item) => {
    setSelectedItem(item);
    setSelectedCategory(item); // Update the selected category text with the clicked item
    // window.location.href = `/category/${item.toLowerCase()}`;

  };

  function formatCategoryForURL(category) {
    // Replace spaces with hyphens and handle other special characters
    const formattedCategory = category
      .toLowerCase()
      .replace(/ /g, '-') // Replace spaces with hyphens
      .replace(/&/g, ''); // Remove ampersands (you can add more replacements as needed)
  
    return formattedCategory;
  }


  const handleSearchClick = () => {
    // Navigate to the formatted category route only if a category is selected
    if (selectedCategory) {
      const formattedCategory = formatCategoryForURL(selectedCategory);
      window.location.href = `/${formattedCategory}`;
    } else {
      // Handle the case when no category is selected
      console.error('Please select a category before clicking search.');
    }
  };

  // const handleSearchClick = () => {
  //   // Navigate to the selected category route only if a category is selected
  //   if (selectedCategory) {
  //     const encodedCategory = encodeURIComponent(selectedCategory.toLowerCase());
  //     window.location.href = `/${encodedCategory}`;
  //   } else {
  //     // Handle the case when no category is selected
  //     console.error('Please select a category before clicking search.');
  //   }
  // };

  // const handleSearchClick = () => {
  //   // Navigate to the selected category route only if a category is selected
  //   if (selectedCategory) {
  //     window.location.href = `/${selectedCategory.toLowerCase()}`;
  //   } else {
  //     // Handle the case when no category is selected
  //     console.error('Please select a category before clicking search.');
  //   }
  // };
  const handleOptionLeave = () => {
    setSelectedItem(null);
  };

  const categories = Categories

  const locations = Locations
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    console.log(
      setSelectedLocation(location)

    )
  };
  const toggleLocationMenu = () => {
    setShowLocationMenu(!showLocationMenu);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    toggleLocationMenu(); // Close the location dropdown when a location is selected
  };
  const prices = Price; 
  const togglePriceMenu = () => {
    setShowPriceMenu(!showPriceMenu);
  };
  const handlePriceClick = (price) => {
    setSelectedPrice(price);
    togglePriceMenu(); // Close the price dropdown when a price is selected
  };

  return (
    <div className=' flex flex-row justify-between ml-2 mr-3 my-3 category-container'>
      <div className='category-dropdown' onClick={() => handleToggleClick(0)}>
        <div className='cursor-pointer flex justify-between w-[330px] h-[40px] rounded-[15px] border border-stone-300 text-center'>
          <h1 className=' text-zinc-500 text-center pl-3 pt-1'>{selectedCategory}</h1>
          <p className='py-2 pr-3'>
            <IoIosArrowDown />
          </p>
        </div>
        <div className='absolute z-[3] bg-white text-black text-lg font-normal'>
          {showMenu && (
            <div className='menuDiv1'>
              <ul className='unlistMenu '>
                {categories.map((category, index) => (
                  <li className='listedMenu pl-2 hover:text-white'
                    key={index}
                    onMouseEnter={() => handleOptionHover(category)}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
              {selectedItem && (
                <div className=' '> 
              
                  <ul className='unlistedSub'>
                    {selectedItem.items && selectedItem.items.map((item, index) => (

                      <li key={index} className='listedSubMenu hover:text-white'
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
        <div className='cursor-pointer flex justify-between w-[330px] h-[40px] rounded-[15px] border border-stone-300 text-center'>
          <h1 className='text-zinc-500 text-center pl-3 pt-1'>{selectedLocation}</h1> {/* Display selected location */}
          <p className='py-2 pr-3'>
            <IoIosArrowDown />
          </p>
        </div>
        <div className='absolute z-[3] bg-white text-black text-lg font-normal'>
          {showLocationMenu && (
            <div className='menuDiv'>
              <ul className='unlistMenu'>
                {locations.map((location, index) => (
                  <li
                    className='listedMenu pl-7 hover:text-white'
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




      {/* PRICE LIST  */}

      <div className='' onClick={() => handleToggleClick(2)}>
        <div className='cursor-pointer flex justify-between w-[330px] h-[40px] rounded-[15px] border border-stone-300 text-center'>
          <h1 className='text-zinc-500 text-center pl-3 pt-1'>{selectedPrice}</h1> {/* Display selected price */}
          <p className='py-2 pr-3'>
            <IoIosArrowDown />
          </p>
        </div>
        <div className='absolute z-[3] bg-white text-black text-lg font-normal'>
          {showPriceMenu && (
            <div className='menuDiv'>
              <ul className='unlistMenu'>
                {prices.map((price, index) => (
                  <li
                    className='listedMenu items-center text-center hover:text-white'
                    key={index}
                    onClick={() => handlePriceClick(price)}
                  >
                    {price}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>



      {/* SEARCH BUTTON  */}
      <div className='border border-blue-500'>
        <button type="submit" className='border border-green-500 w-[100px] h-[40px] rounded-[11px] bg-black text-white' onClick={handleSearchClick}>
          Search
        </button>
      </div>


      

    </div>
  );
}






