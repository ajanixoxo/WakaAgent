import React from 'react';
import Slider from 'react-slick';
import { MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tortor justo. Vestibulum vitae vulputate lacus. Aliquam sollicitudin mauris odio. Fusce egestas consectetur semper vulputate",
    name: "Esther Howard",
    title: "Internet Security Assistant",
    image: "/assets/images/clients/client1.jpg"
  },
  {
    quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John Doe",
    title: "Software Engineer",
    image: "/assets/images/clients/client1.jpg"
  },
  {
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    name: "Jane Smith",
    title: "Product Manager",
    image: "/assets/images/clients/client1.jpg"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio
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
              <a href="tel:314-555-0123" className="text-sky-500 hover:underline">
                234-555-0123
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;