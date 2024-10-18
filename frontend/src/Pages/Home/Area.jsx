import React from 'react'
function Area() {
    const areaDetails = [
        { imageURL: '/assets/images/place/lagos.jpg', title: "Lagos", agentList: 1000, delay: "250" },
        { imageURL: '/assets/images/place/ibadan.jpg', title: "Ibadan", agentList: 1000, delay: "350" },
        { imageURL: '/assets/images/place/AB.jpg', title: "Abeokuta", agentList: 1000, delay: "450" },
        { imageURL: '/assets/images/place/Ondo.jpg', title: "Ondo", agentList: 1000, delay: "550" },
        { imageURL: '/assets/images/place/PH.jpg', title: "Port Harcourt", agentList: 1000, delay: "650" },
        { imageURL: '/assets/images/place/Abuja.jpg', title: "Abuja", agentList: 1000, delay: "750 " },
        { imageURL: '/assets/images/place/osun.jpg', title: "Osun", agentList: 1000, delay: "850" },
        { imageURL: '/assets/images/place/ilorin.jpg', title: "ilorin", agentList: 1000, delay: "950 " },
      ]
    const AreaCard = (props) => (
        <div className="relative overflow-hidden rounded-lg group" data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay={props.delay}
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          <img
            alt={props.title}
            width={600}
            height={400}
            src={props.imageURL}
    
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{props.title}</h3>
            <p className="text-sm">{props.agentList} agent avialable</p>
          </div>
        </div>
      )
    
  return (
    <div className="container mx-auto px-4 py-8"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="150"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out" id="region">
        <div className="w-full msx-auto text-center">
          <h1 className="text-[30px] text-black font-semibold h1">Search rental by area</h1>
          <p className="text-gray-400 font-medium p">Find Your dream House</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {areaDetails.map((areaDetail, index) => (

            <AreaCard key={index} imageURL={areaDetail.imageURL} title={areaDetail.title} agentList={areaDetail.agentList} />
          ))}

        </div>
      </div>
  )
}

export default Area