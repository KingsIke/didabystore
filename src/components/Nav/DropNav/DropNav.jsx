import React,{useState} from 'react'
import "./DropNav.css"
const DropNav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  
  };
  return (

<div className="dropdown" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
      <button className="dropdown-btn">Category</button>
      {menuVisible && (
        <ul className="dropdown-menu">
          
          <li>
            Fashion
            <ul className="sub-menu">
              <li>Clothing</li>
              <li>Bags</li>
              <li>Shoes</li>
              <li>Watch</li>
              <li>Jewelry</li>
              <li>Wedding</li>
              <li>Accessory</li>

            </ul>
          </li>
          <li>Beauty</li>
          <li>Electronics</li>
        </ul>
      )}
    </div>

    // <div>
    //   <select value={selectedCategory} onChange={handleCategoryChange}>
    //     <option value="" placeholder='Category'></option>
    //     <option value="Fashion">Fashion</option>
    //     <option value="Phones">Phones/Tablets</option>
    //     <option value="Beauty">Beauty</option>
    //     <option value="Groceries">Groceries</option>
    //     <option value="Electronics">Electronics</option>
    //     <option value="Laptops">Laptops & Computers</option>
    //     <option value="Health">Health & Fitness</option>
    //     <option value="Babies">Babies & Kids</option>
    //     <option value="Appliances">Appliances</option>


    //   </select>

    //   {selectedCategory === 'Fashion' && (
    //     <div>
         
    //       <select>
    //         <option value=""></option>
    //         <option value="Clothing">Clothing</option>

    //         <option value="Bags">Bags</option>
    //         <option value="Shoes">Shoes</option>
    //         <option value="Watch">Watch</option>
            
    //         <option value="Jewelry">Jewelry</option>
    //         <option value="Wedding">Wedding</option>
    //         <option value="Accessory">Accessory</option>


    //       </select>
    //     </div>
    //   )}

    //   {/* You can add similar logic for Beauty and Electronics here */}
    // </div>
  )
}

export default DropNav
