import React from 'react'
import { Search, Banknote, HeartHandshake,  MapPinHouse } from 'lucide-react';
function HowTo() {
    const steps = [
        {
            icon: <Search className="w-8 h-8 text-sky-400" />,
            title: 'Describe Your Rental Needs',
            description: 'Fill out your property preferences (type, budget, location, etc.) and a description of the apartment you are looking for.',
            delay:"250"
        },
        {
            icon: <HeartHandshake className="w-8 h-8 text-sky-400" />,
            title: 'Get Matched with an Agent',
            description: 'Get matched with a professional agent in your desired location.',
            delay:"350"
        },
        {
            icon: <Banknote className="w-8 h-8 text-sky-400" />,
            title: 'Pay and Connect',
            description:'Connect with professional agents for just ₦2000, tailored to your rental needs.',
            delay:"450"
        },
        {
            icon: <MapPinHouse className="w-8 h-8 text-sky-400" />,
            title: 'Go on Property Tours',
            description: 'Visit properties with the agent and choose your ideal rental.',
            delay:"450"
        }
    ];
    const StepsCard = ({ icon, title, description, delay }) => (
        <div className="bg-white p-6 rounded-lg shadow-md"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay={delay}
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <div className="w-12 h-1 bg-sky-400 mb-4"></div>
            <p className="text-gray-600">{description}</p>
        </div>
    );
  return (

    <div id="#service">
    <div className="bg-sky-100 py-16 px-4"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">How To</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Find your desired apartment with these simple steps
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
           >
                {steps.map((service, index) => (
                    <StepsCard key={index} {...service}
                />
                ))}
            </div>
        </div>
    </div>

</div>
  )
}

export default HowTo