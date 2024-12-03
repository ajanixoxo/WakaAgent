import React from 'react';
import Slider from 'react-slick';
import { MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const testimonials = [
  {
    quote: "TrekkingAgent made my house-hunting experience so much easier. I gave them my preferences, and they connected me with agents who truly listened and showed me great options. The whole process was smooth and stress-free. I found my dream home, and I couldn’t be happier!",
    name: "James Okwara",
    title: " Teacher",
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
  },
  {
    quote: "At first, I was skeptical about using TrekkingAgent, but I’m so glad I did! The agents they matched me with were professional and efficient. They guided me to properties that met my exact needs, and I didn’t feel pressured or misled. This service is a lifesaver for anyone looking for a place to stay.",
    name: "Aisha Bello",
    title: "Graphic Designer",
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
  },
  {
    quote: "TrekkingAgent made finding a home so convenient! The agents were responsive and knew the area well, which saved me a lot of time. They helped me narrow down options that perfectly matched my budget and preferences. Highly recommend their service to anyone tired of the usual hassles of house-hunting",
    name:"Chike Udeh",
    title: "Entrepreneur",
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
  }
];

const TestimonialCard = ({ quote, name, title, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <MessageSquare className="w-8 h-8 text-sky-400 mb-4" />
    <p className="text-gray-600 mb-4">"{quote}"</p>
    <div className="flex items-center">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
    </div>
  </div>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 -mt-4 z-10 bg-white rounded-full p-2 shadow-md"
    onClick={onClick}
  >
    <ChevronRight className="w-6 h-6 text-gray-600" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 -mt-4 z-10 bg-white rounded-full p-2 shadow-md"
    onClick={onClick}
  >
    <ChevronLeft className="w-6 h-6 text-gray-600" />
  </button>
);

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">From our happy customers</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Here’s what others have to say about their experience. We take pride in delivering quality service, and these stories reflect our commitment to ensuring satisfaction for every client.
        </p>
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center mt-12">
          <p className="text-lg">
            Become our next customer, and find your dream home{' '}
            <span className="font-semibold">
              Contact us:{' '}
              <a href="tel:+2347065631064" className="text-sky-500 hover:underline">
              +2347065631064
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;