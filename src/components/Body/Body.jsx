// import React from 'react';
import Icon1 from '../../images/humanicon.png'
import Icon2 from '../../images/humanicon1.png'

import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
// AiOutlineArrowLeft


// const Body = () => {  

//   return (<>
  
//     <div className="container w-[1035px] h-[412px] flex justify-between bg-[#fec634]">
//       <div className=' flex items-center'>
//         <div className='w-[454px] ml-14'>
//           <h1 className='font-bold text-4xl'>50% Off For Your First <span>Shopping</span></h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus labore omnis quos quo quas debitis, vitae aliquid ducimus pariatur dolor officiis deserunt architecto corrupti reiciendis ipsa! Autem, placeat explicabo!</p>
//           <button className="flex items-center w-[150px] py-2 text-sm font-normal text-black rounded hover:bg-gray-700 border-solid border-2 border-black mt-3 pl-3">
//         Browse Category <AiOutlineArrowRight className="ml-2 text-lg" />
//       </button>
//         </div>
//         <div className='flex ml-14'>
//   <img src={Icon1} alt="" />
//   <img src={Icon2} alt="" className='w-[118px] h-[196px] ml-16 mt-16' /> {/* Add ml-4 for space */}
// </div>



//       </div>
      
//     </div>


//     {/* // SECOND PIX  */}



//     <div className="container w-[1035px] h-[412px] flex justify-between bg-[#fec634]">
//       <div className=' flex items-center'>
//         <div className='w-[454px] ml-14'>
//           <h1 className='font-bold text-4xl'>50% Off For Your First <span>Shopping</span></h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus labore omnis quos quo quas debitis, vitae aliquid ducimus pariatur dolor officiis deserunt architecto corrupti reiciendis ipsa! Autem, placeat explicabo!</p>
//           <button className="flex items-center w-[150px] py-2 text-sm font-normal text-black rounded hover:bg-gray-700 border-solid border-2 border-black mt-3 pl-3">
//         Browse Category <AiOutlineArrowRight className="ml-2 text-lg" />
//       </button>
//         </div>
//         <div className='flex ml-14'>
//   <img src={Icon1} alt="" />
//  {/* Add ml-4 for space */}
// </div>



//       </div>
      
//     </div>



//     {/* // THIRD PIX  */}


//     <div className="container w-[1035px] h-[412px] flex justify-between bg-[#fec634]">
//       <div className=' flex items-center'>
//         <div className='w-[454px] ml-14'>
//           <h1 className='font-bold text-4xl'>100% Off For Your First <span>Shopping</span></h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus labore omnis quos quo quas debitis, vitae aliquid ducimus pariatur dolor officiis deserunt architecto corrupti reiciendis ipsa! Autem, placeat explicabo!</p>
//           <button className="flex items-center w-[150px] py-2 text-sm font-normal text-black rounded hover:bg-gray-700 border-solid border-2 border-black mt-3 pl-3">
//         Browse Category <AiOutlineArrowRight className="ml-2 text-lg" />
//       </button>
//         </div>
//         <div className='flex ml-14'>
  
//   <img src={Icon2} alt="" className='w-[118px] h-[196px] ml-16 mt-16' /> {/* Add ml-4 for space */}
// </div>



//       </div>
      
//     </div>




//   </>


    
//   );
// };

// export default Body;



import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselData = [
  {
    title: '50% Off For Your First Shopping',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus labore omnis quos quo quas debitis, vitae aliquid ducimus pariatur dolor officiis deserunt architecto corrupti reiciendis ipsa! Autem, placeat explicabo!',
    buttonText: 'Browse Category',
    image1: Icon1, // Add image1 and image2 properties
    image2: Icon2,
  },
  {
    title: '50% Off For Your First Shopping',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    buttonText: 'Browse Category',
    image: Icon2,
  },
  {
    title: '100% Off For Your First Shopping',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    buttonText: 'Browse Category',
    image: Icon2,
  },
];

const Carousel = () => {
  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Loop the carousel
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <AiOutlineArrowRight />, // Custom next arrow
    prevArrow: <AiOutlineArrowLeft />, // Custom previous arrow
  };

  return (
    // <div className=' w-[1035px]'>
    //   <Slider {...settings}>
    //     {carouselData.map((item, index) => (
    //       <div key={index} className="container h-[412px] flex justify-between bg-[#fec634]">
    //         <div className=' flex items-center'>
    //           <div className='w-[454px] ml-14 mt-14'>
    //             <h1 className='font-bold text-4xl'>{item.title}</h1>
    //             <p>{item.text}</p>
    //             <button className="flex items-center w-[150px] py-2 text-sm font-normal text-black rounded hover:bg-gray-700 border-solid border-2 border-black mt-3 pl-3">
    //               {item.buttonText} <AiOutlineArrowRight className="ml-2 text-lg" />
    //             </button>
    //           </div>
    //           <div className='flex ml-14'>
    //             <img src={item.image} alt="" className='w-[118px] h-[196px] ml-16 mt-16' /> {/* Add ml-4 for space */}
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
    // </div>

    <div className='w-[1035px] h-[412px] relative'> 
    <Slider {...settings}>
      {carouselData.map((item, index) => (
        <div key={index} className="container h-[412px] flex justify-between bg-[#fec634] relative">
          <div className=' flex items-center'>
            <div className='w-[454px] ml-14 mt-14'>
              <h1 className='font-bold text-4xl'>{item.title}</h1>
              <p>{item.text}</p>
              <button className="flex items-center w-[150px] py-2 text-sm font-normal text-black rounded hover:bg-gray-700 border-solid border-2 border-black mt-3 pl-3">
                {item.buttonText} <AiOutlineArrowRight className="ml-2 text-lg" />
              </button>
            </div>
            <div className='flex ml-14 mt-6'>
                <img src={item.image1} alt=""  />
                <img src={item.image2} alt="" className='w-[118px] h-[196px] ml-16 mt-16' /> {/* Add ml-4 for spacing */}
              </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default Carousel;
