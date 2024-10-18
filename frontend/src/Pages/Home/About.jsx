import React from 'react'


function About() {
    const stats = [
        { number: '1+', label: 'years', description: 'of shaping rentals landscapes', delay: "250" },
        // { number: '100+', label: 'Projects', description: 'successfully delivered with excellence', delay:250 },
        { number: '50+', label: 'Agents', description: 'diverse agent in different state', delay: "250" },
        { number: '99%', label: 'Happy Clients', description: 'satisfying our customers to the fullest', delay: "250" },
      ];
  return (
   
    <div className="about mt-4" id="about">

    <div className="bg-white p-8 rounded-3xl shadow-lg max-w-full md:max-w-[90%] mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 pr-8"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="250"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          <p className="text-xl md:text-3xl font-bold text-gray-400 ">About us</p>
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4 p">Better lives with better homes</h2>
          <p className="text-gray-700 mb-8">
            Agentwaka is a platform that connects house seekers with trusted local agents for a nominal fee.
            We match clients with multiple agents operating in their desired location, ensuring personalized service
            tailored to their rental needs. Once a match is made, and payment is completed, clients gain access to agent
            details, and their rental requirements are sent to the agents via WhatsApp and SMS. Our goal is to simplify
            the search process, giving both clients and agents the flexibility to finalize the terms that best suit them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="mb-4"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay={stat.delay}
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <div className="flex items-baseline mb-1">
                  <span className="text-2xl font-bold text-gray-900 mr-2">{stat.number}</span>
                  <span className="text-lg text-gray-700">{stat.label}</span>
                </div>
                <div className="h-1 w-12 bg-sky-500 mb-2"></div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="350"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          <img
            src="/assets/images/slider/about.jpg"
            alt="Team meeting in a modern office"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default About