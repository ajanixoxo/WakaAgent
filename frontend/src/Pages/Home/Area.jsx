/* eslint-disable react/prop-types */ 
import React from 'react';
import { useDispatch } from 'react-redux';

import { setTitle } from '../../store/action';  // Import the action

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
const AreaCard = ({ title, imageURL, agentList, delay }) => {
  const dispatch = useDispatch();

  // handleClick dispatches the title to Redux when a card is clicked
  const handleClick = () => {
    dispatch(setTitle(title));  // Dispatch the title on card click
  };

  return (
    <div 
      className="relative overflow-hidden rounded-lg group" 
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay={delay}
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      onClick={handleClick}  // Corrected onClick syntax
    >
     <div onClick={scrollToTop}> <img
        alt={title}
        width={600}
        height={400}
        src={imageURL}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm">{agentList} agents available</p>
      </div>
    </div>
  );
};

function Area() {
  const areaDetails = [
    { imageURL: '/assets/images/place/lagos.jpg', title: "Lagos", agentList: "100+", delay: "250" },
    { imageURL: '/assets/images/place/ibadan.jpg', title: "Ibadan", agentList: "100+", delay: "350" },
    { imageURL: '/assets/images/place/AB.jpg', title: "Abeokuta", agentList: "100+", delay: "450" },
    { imageURL: '/assets/images/place/Ondo.jpg', title: "Ondo", agentList: "100+", delay: "550" },
    { imageURL: '/assets/images/place/PH.jpg', title: "Port Harcourt", agentList: "100+", delay: "650" },
    { imageURL: '/assets/images/place/Abuja.jpg', title: "Abuja", agentList: "100+", delay: "750" },
    { imageURL: '/assets/images/place/osun.jpg', title: "Osun", agentList: "100+", delay: "850" },
    { imageURL: '/assets/images/place/ilorin.jpg', title: "Ilorin", agentList: "100+", delay: "950" },
  ];

  return (
    <div className="container mx-auto px-4 py-8" data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="150"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out" id="region">
      <div className="w-full mx-auto text-center">
        <h1 className="text-[30px] text-black font-semibold">Search rental by area</h1>
        <p className="text-gray-400 font-medium">Find Your Dream House</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {areaDetails.map((areaDetail, index) => (
          <AreaCard 
            key={index}  
            imageURL={areaDetail.imageURL} 
            title={areaDetail.title} 
            agentList={areaDetail.agentList} 
            delay={areaDetail.delay} 
          />
        ))}
      </div>
    </div>
  );
}

export default Area;
