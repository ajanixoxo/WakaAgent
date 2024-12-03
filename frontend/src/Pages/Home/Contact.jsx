import React from 'react'
import {  MapPin, Phone, Mail, User, AtSign, Building, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <section className="bg-sky-100 py-16 px-4"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" id="contact">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row"
    >
      {/* Left Column */}
      <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0"
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
        <h2 className="text-4xl font-bold mb-4">We provide the most suitable rental service</h2>
        <p className="text-gray-600 mb-8">
          Get in Touch
        </p>
        <div className="space-y-6">
          <div className="flex items-center">
            <MapPin className="w-6 h-6 text-gray-400 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Office address</p>
              <p className="font-medium">2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="w-6 h-6 text-gray-400 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Request a call back</p>
              <p className="font-medium text-sky-500">+2347065631064</p>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="w-6 h-6 text-gray-400 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Email us</p>
              <p className="font-medium text-sky-500">trekkingagent@gmail.com</p>
            </div>
          </div>
        </div>
        {/* <div className="mt-12">
        <img src="/placeholder.svg?height=300&width=400" alt="Smiling person with tablet" className="rounded-lg" />
      </div> */}
        {/* Social Media Links */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Follow us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61567137925008&mibextid=ZbWKwL " className="text-gray-400 hover:text-sky-500">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-500">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/trekkingagent/profilecard/?igsh=MW4zdGEzMnJhczlhZQ==
" className="text-gray-400 hover:text-sky-500">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-500">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg"
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="350"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
        <div className="flex items-center mb-6">
          <h3 className="text-2xl font-bold mr-4">Contact us</h3>
          <Send className="w-6 h-6 text-sky-500" />
        </div>
        <p className="text-gray-600 mb-8">We will respond as soon as we receive your message.</p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your name</label>
            <div className="relative">
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <AtSign className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
                />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <div className="relative">
                <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">Property type</label>
            <div className="relative">
              <Building className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <select
                id="property-type"
                name="property-type"
                className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500 appearance-none"
              >
                <option value="">Choose</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-3 px-6 rounded-md hover:bg-sky-600 transition duration-300 flex items-center justify-center"
          >
            <Send className="w-5 h-5 mr-2" />
            Send request
          </button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contact