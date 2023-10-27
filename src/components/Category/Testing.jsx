

// import { Dropdown, Menu } from "antd";
// import React, { useState } from "react";

// const CategoryDropdown = () => {
//   const menu = (
//     <Menu
//       onClick={({ key }) => {
//         console.log("You clicked on", key);
//       }}
//       items={[
//         {
//           label: "Fashion",
//           key: "fashion",
//           children: [
//             {
//               label: "Clothing",
//               key: "cloths",
//             },
//             {
//               label: "Bag",
//               key: "bag",
//             },
//             {
//               label: "Shoe",
//               key: "shoe",
//             },
//             {
//               label: "Watch",
//               key: "watch",
//             },
//             {
//               label: "Jewelry",
//               key: "jewelry",
//             },
//             {
//               label: "Watch",
//               key: "watch",
//             },
//             {
//               label: "Wedding",
//               key: "wedding",
//             },
//             {
//               label: "Accessory",
//               key: "accessorying",
//             },
//           ],
//         },
//       ]}
//     ></Menu>
//   );

//   return (
//     <>
//       <Dropdown
//         overlay={menu}
//         trigger={["contextMenu"]}
//         className="border-solid border-2 border-orange-400 w-[350px] h-[540px]"
//       >
//         <p className="w-[370px] h-[40px] bg-green-500 border-solid border-2 border-blue-400">
//           Category
//         </p>
//       </Dropdown>
//     </>
//   );
// };

// export default CategoryDropdown;



// import { Dropdown, Menu } from "antd";
// import React from "react";

// const CategoryDropdown = () => {
//   const menu = (
//     <Menu
//       onClick={({ key }) => {
//         console.log("You clicked on", key);
//       }}
//     >
//       <Menu.SubMenu title="Fashion" key="fashion">
//         <Menu.Item key="cloths">Clothing</Menu.Item>
//         <Menu.Item key="bag">Bag</Menu.Item>
//         <Menu.Item key="shoe">Shoe</Menu.Item>
//         <Menu.Item key="watch">Watch</Menu.Item>
//         <Menu.Item key="jewelry">Jewelry</Menu.Item>
//         <Menu.Item key="wedding">Wedding</Menu.Item>
//         <Menu.Item key="accessorying">Accessory</Menu.Item>
//       </Menu.SubMenu>
//     </Menu>
//   );

//   return (
//     <>
//       <Dropdown
//         menu={menu} // Use 'menu' instead of 'overlay'
//         trigger={["contextMenu"]}
//         className="border-solid border-2 border-orange-400"
//       >
//         <p
//           style={{ width: "350px", height: "200px", border: "1px solid green" }}
//         >
//           Category
//         </p>
//       </Dropdown>
//     </>
//   );
// };

// export default CategoryDropdown;






// import { Dropdown, Menu } from "antd";
// import React, { useState } from "react";

// const CategoryDropdown = () => {
//   const menu = (
//     <Menu
//       onClick={({ key }) => {
//         console.log("You clicked on", key);
//       }}
   
//     ></Menu>
//   );

//   return (
//     <>
//     <Menu style={{width:'350px',}}
//     // mode="vertical"
//        items={[
//         {
//           label: "Fashion",
//           key: "fashion",
//           children: [
//             {
//               label: "Clothing",
//               key: "cloths",
//             },
//             {
//               label: "Bag",
//               key: "bag",
//             },
//             {
//               label: "Shoe",
//               key: "shoe",
//             },
//             {
//               label: "Watch",
//               key: "watch",
//             },
//             {
//               label: "Jewelry",
//               key: "jewelry",
//             },
//             {
//               label: "Watch",
//               key: "watch",
//             },
//             {
//               label: "Wedding",
//               key: "wedding",
//             },
//             {
//               label: "Accessory",
//               key: "accessorying",
//             },
//           ],
//         },
//         {

//           label: "Phone",
//           key: "phone"
//         }

//       ]}
//     >

//     </Menu>
//     </>
//   );
// };

// export default CategoryDropdown;






// import React from 'react';
// import { Menu } from 'antd';
// // import 'antd/dist/antd.css';

// const { SubMenu } = Menu;
// const ThreeLayerDropdownMenu = () => {
//   const handleMenuItemClick = (e) => {
//     // Handle the click event for menu items as needed
//     console.log(`Clicked on item ${e.key}`);
//   };

//   return (
//     <div style={{ display: 'flex' }}>

//     <Menu mode="inline" onClick={handleMenuItemClick} style={{ width: '200px' }}>
//       <SubMenu key="subMenu1" title="Category">
       
//         <SubMenu key="subMenu2" title="Fashion">
        

//             <Menu.Item key="subitem2-2-1">Subitem 1 - Level 3</Menu.Item>
//             <Menu.Item key="subitem2-2-2">Subitem 2 - Level 3</Menu.Item>
         
//         </SubMenu>
//       </SubMenu>
//     </Menu>
//   </div>
//   );
// };

// export default ThreeLayerDropdownMenu;



import React from 'react';
import { Menu } from 'antd';
// import 'antd/dist/antd.css'; // Import Ant Design styles

const SubMenu = Menu.SubMenu;

const MyMenu = () => {
  const handleMenuItemClick = (e) => {
    // Handle menu item click here
  };

  return (
    <Menu mode="inline" onClick={handleMenuItemClick} style={{ width: '200px' }}>
      <SubMenu key="subMenu1" title="Category">
        <SubMenu key="subMenu2" title="Fashion">
          <Menu.Item key="subitem2-2-1">Subitem 1 - Level 3</Menu.Item>
          <Menu.Item key="subitem2-2-2">Subitem 2 - Level 3</Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  );
};

export default MyMenu;
