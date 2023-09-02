import React, { useState } from 'react';
import Icon1 from '../../images/humanicon.png';
import Icon2 from '../../images/humanicon1.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { GoDotFill } from 'react-icons/go';

const Body = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Icon1, Icon2];
  const content = [
    {
      title: '50% Off For Your First',
      text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus labore omnis quos quo quas debitis, vitae aliquid ducimus pariatur dolor officiis deserunt architecto corrupti reiciendis ipsa! Autem, placeat explicabo!",
    },
    {
      title: '100% Off For Your First',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    
    {
      title: 'N0 % Off For Your First',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
        title: ' Kings Off For Your First',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit...',
      },
  ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  };
  

  return (
    <div className="carousel-container w-[980px] h-[302px] flex justify-between bg-[#fec634]">
      <div className="carousel-content flex items-center">
        
        <div className="carousel-text w-[430px] ml-10">
          <h1 className="font-bold text-4xl">{content[currentIndex].title}</h1>
          <h1 className="font-bold text-4xl">Shopping</h1>
          <p>{content[currentIndex].text}</p>
          <button className="flex items-center w-[150px] py-2 text-sm font-normal text-black rounded hover:bg-gray-700 border-solid border-2 border-black mt-3 pl-3">
            Browse Category <AiOutlineArrowRight className="ml-2 text-lg" />
          </button>
        </div>
        <div className="carousel-image-container flex ml-14">
          <img className="carousel-image w-[190px] h-[260px]  " src={images[currentIndex]} alt=""  />
          <img className="carousel-image w-[118px] h-[176px] ml-16 mt-11" src={images[(currentIndex + 1) % images.length]} alt="" />
        </div>
      </div>
      <div className="carousel-controls absolute mt-[277px] ml-4 mb-3">
        <button className="carousel-control-button" onClick={prevSlide}>
          <GoDotFill />
        </button>
        <button className="carousel-control-button" onClick={nextSlide}>
          <GoDotFill />
        </button>
      </div>
    </div>
  );
};

export default Body;




// import React, { useState } from 'react';
// import Icon1 from '../../images/humanicon.png';
// import Icon2 from '../../images/humanicon1.png';
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

// const Body = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [Icon1];
//   const pix =[ Icon2]
//   const content = [
//     {
//       title: '50% Off For Your First',
//       text:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus labore omnis quos quo quas debitis, vitae aliquid ducimus pariatur dolor officiis deserunt architecto corrupti reiciendis ipsa! Autem, placeat explicabo.',
//     },
//     {
//       title: '100% Off For Your First',
//       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="carousel-container w-[1035px] h-[412px] flex justify-between bg-[#fec634]">
//       <div className="carousel-content flex items-center">
//         <div className="carousel-controls">
//           <button className="carousel-control-button" onClick={prevSlide}>
//             <AiOutlineArrowLeft />
//           </button>
//         </div>
//         <div className="carousel-text w-[454px] ml-14 ">
//           <h1 className="font-bold text-4xl">{content[currentIndex].title}</h1>
//           <p>{content[currentIndex].text}</p>
//           <button className="flex items-center w-[150px] py-2 text-sm font-normal text-black rounded hover:bg-gray-700 border-solid border-2 border-black mt-3 pl-3">
//             Browse Category <AiOutlineArrowRight className="ml-2 text-lg" />
//           </button>
//         </div>
//         <div className="carousel-image flex ml-14">
//           <img src={images[currentIndex]} alt="" />
//           <img src={pix[currentIndex] } alt=""  className='w-[118px] h-[196px] ml-16 mt-16'  />

//         </div>
//         <div className="carousel-controls">
//           <button className="carousel-control-button" onClick={nextSlide}>
//             <AiOutlineArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Body;