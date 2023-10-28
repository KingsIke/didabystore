// // // import React, { useState } from 'react';
// // // import "./Category.css"
// // // // const Category = () => {
// // // //   const categories = [
// // // //     { name: 'Fashion', subCategories: ['Clothing', 'Bag', 'Shoe', 'Watch', 'Jewelry', 'Wedding', 'Accessory'] },
// // // //     { name: 'Phone', subCategories: [] },
// // // //     { name: 'Beauty', subCategories: [] },
// // // //     // Add more categories here
// // // //   ];

// // // //   const [selectedCategory, setSelectedCategory] = useState(null);

// // // //   // const handleCategoryHover = (category) => {
// // // //   //   setSelectedCategory(category);
// // // //   //   console.log(setSelectedCategory)
// // // //   // };

// // // //   // const handleCategoryLeave = () => {
// // // //   //   setSelectedCategory(null);
// // // //   // };

// // // //   const handleCategoryClick = (category) => {
// // // //     if (selectedCategory === category) {
// // // //       setSelectedCategory(null); // Close the dropdown if it's already open
// // // //     } else {
// // // //       setSelectedCategory(category);
// // // //     }
// // // //   };

// // // //   const handleCategoryLeave = () => {
// // // //     setSelectedCategory(null);
// // // //   };

// // // //   return (
// // // //     <div className="nested-dropdown">
// // // //       <div className="category-container">

// // // //       <ul className="category-list">
// // // //         {categories.map((category, index) => (
// // // //           <li
// // // //           className={`w-[280px] h-[40px] border-solid border-2 border-orange-400 category-item ${category.name === selectedCategory ? 'active' : ''}`}
// // // //             key={index}
// // // //             // onMouseEnter={() => handleCategoryHover(category.name)}
// // // //             onMouseLeave={handleCategoryLeave}
// // // //           >
// // // //             {/* {category.name} */}
// // // //             <div onClick={() => handleCategoryClick(category.name)}>
// // // //                 {category.name}
// // // //               </div>
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //       <div className="sub-category-container">
// // // //           <ul className="sub-category-list">
// // // //             {selectedCategory &&
// // // //               categories.find((cat) => cat.name === selectedCategory).subCategories.map(
// // // //                 (subCategory, subIndex) => (
// // // //                   <li className="sub-category-item" key={subIndex}>
// // // //                     {subCategory}
// // // //                   </li>
// // // //                 )
// // // //               )}
// // // //           </ul>
// // // //         </div>
// // // //       </div>
      
// // // //     </div>
// // // //   );
// // // // };
// // // // const Category = () => {
// // // //   const [selectedCategory, setSelectedCategory] = useState('');
// // // //   const [showSubcategories, setShowSubcategories] = useState(false);

// // // //   const categories = {
// // // //     Fashion: ['Bags', 'Wears', 'Clothes'],
// // // //     Phone: ['Apple', 'Samsung', 'Google'],
// // // //     Electronics: ['Laptops', 'Cameras', 'Headphones'],
// // // //   };

// // // //   const handleCategoryChange = (event) => {
// // // //     setSelectedCategory(event.target.value);
// // // //   };

// // // //   const handleMouseEnter = () => {
// // // //     setShowSubcategories(true);
// // // //   };

// // // //   const handleMouseLeave = () => {
// // // //     setShowSubcategories(false);
// // // //   };

// // // //   return (
// // // //     <div className="category-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
// // // //       <label htmlFor="category">Select a Category:</label>
// // // //       <select
// // // //         id="category"
// // // //         name="Category"
// // // //         value={selectedCategory}
// // // //         onChange={handleCategoryChange}
// // // //         className="w-[280px] h-[40px] border-solid border-2 border-orange-400"
// // // //         required
// // // //       >
// // // //         <option value="" disabled>Category</option>
// // // //         <option value="Fashion">Fashion</option>
// // // //         <option value="Phone">Phone</option>
// // // //         <option value="Electronics">Electronics</option>
// // // //       </select>


// // // //       <p>You selected: {selectedCategory}</p>
// // // //     </div>
// // // //   );
// // // // };
// // // export default Category;



// // // import React, { useState } from 'react';
// // // import { Menu } from 'antd';
// // // import { DownOutlined } from '@ant-design/icons';

// // // // const menuStyle = {
// // // //   display: 'flex',
// // // //   flexDirection: 'row',
// // // //   // width:'370px',
// // // //   // height: '35px'
// // // // };
// // // const menuStyle = {
// // //   width: '350px',
// // //   height: '35px',
// // // };

// // // const Category = () => {
// // //   const [openKeys, setOpenKeys] = useState([]);
// // //   const [selectedKeys, setSelectedKeys] = useState([]);

// // //   const handleMenuClick = (e) => {
// // //     setSelectedKeys([e.key]);
// // //   };

// // //   const handleOpenChange = (keys) => {
// // //     setOpenKeys(keys);
// // //   };

// // //   return (
// // //     <Menu
// // //       mode="inline"
// // //       openKeys={openKeys}
// // //       selectedKeys={selectedKeys}
// // //       onOpenChange={handleOpenChange}
// // //       onClick={handleMenuClick}
// // //     >
// // //      <Menu.SubMenu key="category" title="Category" style={menuStyle}>
// // //         <Menu.SubMenu key="fashion" title="Fashion">
// // //           <Menu.Item key="bags">Bags</Menu.Item>
// // //           <Menu.Item key="wears">Wears</Menu.Item>
// // //           <Menu.Item key="clothes">Clothes</Menu.Item>
// // //         </Menu.SubMenu>
// // //         <Menu.SubMenu key="phone" title="Phone">
// // //           {/* Add Phone Submenu Items here */}
// // //         </Menu.SubMenu>
// // //         <Menu.SubMenu key="beauty" title="Beauty">
// // //           {/* Add Beauty Submenu Items here */}
// // //         </Menu.SubMenu>
// // //       </Menu.SubMenu>
// // //     </Menu>
// // //   );
// // // };

// // // export default Category;

// import React, { useState } from 'react';
// import { Menu } from 'antd';
// import { DownOutlined } from '@ant-design/icons';

// const Category = () => {
//   const [openKeys, setOpenKeys] = useState([]);
//   const [selectedKeys, setSelectedKeys] = useState([]);

//   const handleMenuClick = (e) => {
//     setSelectedKeys([e.key]);
//   };

//   const handleOpenChange = (keys) => {
//     setOpenKeys(keys);
//   };

//   const submenuStyle = {
//     width: '350px', // Set the width of the submenu
//   };

//   const categoryStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//   };

//   const submenuItemStyle = {
//     // display: 'flex',
//     // justifyContent: 'space-between',
//     // flexDirection: 'column',
//     // marginTop: "0"
//   };
  
  

//   return (
    
//     <Menu
//     //   mode="inline"
//       openKeys={openKeys}
//       selectedKeys={selectedKeys}
//       onOpenChange={handleOpenChange}
//       onClick={handleMenuClick}
//       style={{marginTop: "50px"}}
//     >
//       {/* <Menu.SubMenu key="category"  title={
//         <span style={categoryStyle}>
//           Category
//           <DownOutlined />
//          </span>
//       } style={submenuStyle} className='border-solid border-2 border-orange-400'> */}
//         <Menu.SubMenu key="fashion" title="Fashion" style={submenuStyle}  className='border-solid border-2 border-orange-400'>
//           <Menu.Item key="fashion-clothes" style={submenuItemStyle}>
//             Clothing
//           </Menu.Item>
//           <Menu.Item key="fashion-bags" style={{width:"320px"}}>
//             Bags
//           </Menu.Item>
//           <Menu.Item key="fashion-wears" style={submenuItemStyle}>
//             Watch
//           </Menu.Item>
//           <Menu.Item key="fashion-clothes" style={submenuItemStyle}>
//             Jewelry
//           </Menu.Item>
//           <Menu.Item key="fashion-clothes" style={submenuItemStyle}>
//             Wedding
//           </Menu.Item>
//           <Menu.Item key="fashion-clothes" style={submenuItemStyle}>
//             Accessory
//           </Menu.Item>
//         </Menu.SubMenu>
//         <Menu.SubMenu key="phone" title="Phone" style={submenuStyle}>
//         <Menu.Item key="fashion-bags" style={submenuItemStyle}>
//             Apple
//           </Menu.Item>
//           <Menu.Item key="fashion-bags" style={submenuItemStyle}>
//             Oppo
//           </Menu.Item> <Menu.Item key="fashion-bags" style={submenuItemStyle}>
//             Samsung
//           </Menu.Item>
//         </Menu.SubMenu>
//         <Menu.SubMenu key="beauty" title="Beauty" style={submenuStyle}>
//           {/* Add Beauty Submenu Items here */}
//         </Menu.SubMenu>
//       {/* </Menu.SubMenu> */}
//     </Menu>
//   );
// };
// // const menuStyle = {
// //   display: 'flex',
// //   flexDirection: 'row',
// // //   // width:'370px',
// // //   // height: '35px'
// // };
// // // const menuStyle = {
// // //   width: '350px',
// // //   height: '35px',
// // // };


// // const Category = () => {
// //   const [openKeys, setOpenKeys] = useState([]);
// //   const [selectedKeys, setSelectedKeys] = useState([]);

// //   const handleMenuClick = (e) => {
// //     setSelectedKeys([e.key]);
// //   };

// //   const handleOpenChange = (keys) => {
// //     setOpenKeys(keys);
// //   };
// //   const submenuStyle = {
// //     width: '350px', // Set the width of the submenu
// //   };

// //   const categoryStyle = {
// //         display: 'flex',
// //         justifyContent: 'space-between',
// //         // marginLeft:"80px"
// //       };
// // const menuStyle = {
// //   // display:"flex",
// //   // flexDirection: "row",
// //   // width: '320px',
// //   // justifyContent: "space-between",
// //   // position:'absolute',
// //   // overflow:'hidden'

// // }
// //       const submenuItemStyle = {
// //             // display: 'block',
// //             // justifyContent: 'space-between',
// //             // flexDirection: 'column',
// //             // alignItem:'center',
// //             // color:"blue",
// //             // position: 'absolute',
// //             // margin:'auto'
// //           };
// //   return (<>
  
// //     <Menu
// //       mode="inline"
// //       openKeys={openKeys}
// //       selectedKeys={selectedKeys}
// //       onOpenChange={handleOpenChange}
// //       onClick={handleMenuClick}
// //       className='border-solid border-2 border-orange-400'
// //       title={
// //         <span style={categoryStyle}>
// //           Category
// //           <DownOutlined />
// //         </span>
// //       } 
// //     >
// //      {/* <Menu.SubMenu key="category" title={
// //         <span style={categoryStyle}>
// //           Category
// //           <DownOutlined />
// //         </span>
// //       } style={submenuStyle}  className='border-solid border-2 border-blue-400'>*/}
// //          <div style={{display:'flex', flexDirection:"column"}}> 
// //         <Menu.SubMenu key="fashion" title="Fashion"style={menuStyle} className='border-solid border-2 border-green-400'>
// //           <Menu.Item  className='border-solid border-2 border-orange-400' key="bags"style={submenuItemStyle}>Bags</Menu.Item>
// //           <Menu.Item  className='border-solid border-2 border-orange-400' key="wears"style={submenuItemStyle}>Wears</Menu.Item>
// //           <Menu.Item className='border-solid border-2 border-orange-400'  key="clothes"style={submenuItemStyle}>Clothes</Menu.Item>
// //         </Menu.SubMenu>
// //         </div>
       
// //         <Menu.SubMenu key="phone" title="Phone" style={menuStyle}>
// //           {/* Add Phone Submenu Items here */}
// //         </Menu.SubMenu>
// //         <Menu.SubMenu key="beauty" title="Beauty" style={menuStyle}>
// //           {/* Add Beauty Submenu Items here */}
// //         </Menu.SubMenu>
// //     {/* //   </Menu.SubMenu> */}
// //     </Menu>
// //     </>
// //   );
// // };

// export default Category;




import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSubMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOptionHover = (item) => {
    setSelectedItem(item);
    setShowSubMenu(true);
  };

  const handleOptionLeave = () => {
    setShowSubMenu(false);
  };

  const categories = [
    {
      name: 'Item 1',
      items: ['chair', 'table'],
    },
    {
      name: 'Item 2',
      items: ['cup', 'spoon', 'pot'],
    },
  ];

  return (
    <>
      <div className='' onClick={toggleSubMenu}>
        <div className='cursor-pointer flex justify-between w-[330px] h-[40px] rounded-[15px] border border-stone-300 text-center'>
          <h1 className=' text-zinc-500 text-center pl-3 pt-1'>Category</h1>
          <p className='py-2 pr-3'>
            <IoIosArrowDown />
          </p>
        </div>
        <div>
          {showMenu && (
            <div className='flex cursor-pointer mt-8 border border-orange-300 rounded  '>
              <ul  className='w-[330px] border border-blue-300 rounded'>
                {categories.map((category, index) => (
                  <li className='mt-3'
                    key={index}
                    onMouseEnter={() => handleOptionHover(category)}
                    onMouseLeave={handleOptionLeave}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
              {showSubMenu && selectedItem && (
                <div className=' mx-4'>
                  <ul>
                    {selectedItem.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
