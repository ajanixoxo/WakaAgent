import React, { useState } from 'react'
import { useAuthStore } from "../store/authStore";
import User from '/assets/images/clients/client1.jpg'
import { formatDate } from "../utils/Date";
import toast, { Toaster } from 'react-hot-toast';
import {NotebookText, Handshake, ThumbsUp} from 'lucide-react'
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const EmojiRating = ({ rating }) => {
  const emojis = [
    "😠", // angry
    "👎", // thumbs down
    "🤔", // thinking
    "👍", // thumbs up
    "😄", // very happy
  ];

  return (
    <div className="flex justify-between w-full mb-2">
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className={`text-3xl ${index === rating ? 'scale-125 transform transition-transform' : 'opacity-50'}`}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};
const FeedbackSlider = ({ value, color }) => (
  <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
    <div
      className={`h-full rounded-full transition-all duration-300 ${color}`}
      style={{ width: `${(value + 1) * 20}%` }}
    />
  </div>
);

function AgentDashboard() {

  const { agent, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState('requests');
  const feedbacks = [
    {
      id: 1,
      rating: 0,
      comment: "Very poor Job, work on your mannerism.",
      likes: 2,
      color: "bg-red-500"
    },
    {
      id: 2,
      rating: 4,
      comment: "Excellent job, keep it up.",
      likes: 1,
      color: "bg-green-500"
    }
  ];


  const handleLogout = () => {
    logout();
  };
  return (
    <div className="min-h-full">

      <div className="container mx-auto p-4 font-sans">
        <h1 className="text-2xl font-bold mb-6">Agent Dashboard</h1>

        <div className="grid md:grid-cols-[300px_1fr] gap-6">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <img
                  src={User}
                  alt="Agent"
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-1">
                  <CheckCircleIcon />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">{agent.name}</h2>
                <p className="text-sm text-gray-600"><span className="font-semibold text-black text-xl">Email:</span> {agent.email} </p>

                <p className="text-base text-gray-600">{(agent.verified == true) ? "Verified Agent" : "Fill the required field below to get verified"} </p>
                <div className="text-sm space-y-1 text-gray-700">
                  <p>Age: 34</p>
                  <p>State of Origin: Osun state</p>
                  <p>Operational Base:</p>
                  <p>Lagos Island</p>
                  <p>AJah</p>
                  <p>Maryland</p>
                </div>
              </div>

              <div className="flex gap-2 w-full">
                <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Edit Profile</button>
                <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Edit Profile</button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Ratings */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} />
              ))}
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow">
              <div className="flex border-b">
                <button
                  className={`flex items-center gap-3 flex-1 px-4 py-2 text-center ${activeTab === 'requests' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('requests')}
                >
                <NotebookText />  Requests
                </button>
                <button
                  className={`flex items-center gap-3 flex-1 px-4 py-2 text-center ${activeTab === 'completed' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('completed')}
                >
                 <Handshake />  Completed
                </button>
                <button
                  className={`flex items-center gap-3 flex-1 px-4 py-2 text-center ${activeTab === 'feedback' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('feedback')}
                >
                 <ThumbsUp /> Feedback
                </button>
              </div>
              <div className="p-4">
                <div className="">
                  {activeTab === 'requests' ? (
                    <div className="grid gap-5">
                      <div className="p-2  border w-full lg:w-[80%] border-black rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Property Description</h3>
                        <div className="p-2 grid  gap-3 md:grid-cols-2">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm text-gray-600">PROPERTY TYPE</h4>
                              <p className="font-medium">Duplex</p>
                            </div>
                            <div>
                              <h4 className="text-sm text-gray-600">ROOMS</h4>
                              <p className="font-medium">8 Bedrooms</p>
                            </div>
                            <div>
                              <h4 className="text-sm text-gray-600">LOCATION</h4>
                              <p className="font-medium">Lagos Island</p>
                            </div>
                            <div>
                              <h4 className="text-sm text-gray-600">AMENITIES</h4>
                              <p className="font-medium">All inclusive</p>
                            </div>

                          </div>
                          <div className=" flex md:flex-col gap-5 items-center justify-between">
                            <div className="flex md:flex-col items-center gap-2">
                              <img
                                src={User}
                                alt="Client"
                                className="w-12 h-12 rounded-full"
                              />
                              <span className="font-medium text-sm">EMMANUEL JAMES</span>
                            </div>
                            <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
                              <WhatsAppIcon />
                            </button>
                          </div>

                        </div>
                      </div>
                      <div className="p-2 border w-full lg:w-[80%] border-black rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Property Description</h3>
                        <div className="p-2 grid md:grid-cols-2 ">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm text-gray-600">PROPERTY TYPE</h4>
                              <p className="font-medium">Duplex</p>
                            </div>
                            <div>
                              <h4 className="text-sm text-gray-600">ROOMS</h4>
                              <p className="font-medium">8 Bedrooms</p>
                            </div>
                            <div>
                              <h4 className="text-sm text-gray-600">LOCATION</h4>
                              <p className="font-medium">Lagos Island</p>
                            </div>
                            <div>
                              <h4 className="text-sm text-gray-600">AMENITIES</h4>
                              <p className="font-medium">All inclusive</p>
                            </div>

                          </div>
                          <div className=" flex  md:flex-col gap-5 items-center justify-between">
                            <div className="flex md:flex-col items-center gap-2">
                              <img
                                src={User}
                                alt="Client"
                                className="w-12 h-12 rounded-full"
                              />
                              <span className="font-medium text-sm">EMMANUEL JAMES</span>
                            </div>
                            <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
                              <WhatsAppIcon />
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  ) : activeTab === 'completed' ? (
                    <p className="text-center text-gray-500">No completed requests yet.</p>
                  ) : (
                    <div className="space-y-6">
                      {feedbacks.map((feedback) => (
                        <div key={feedback.id} className="bg-gray-50 rounded-lg p-4">
                          <EmojiRating rating={feedback.rating} />
                          <FeedbackSlider value={feedback.rating} color={feedback.color} />

                          <div className="flex items-start justify-between">
                            <p className="text-gray-700">{feedback.comment}</p>
                            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                                />
                              </svg>
                              <span className="text-sm">{feedback.likes}</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Subscription Plan */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold mb-4">SUBSCRIPTION PLAN</h3>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="w-[90%] md:w-1/2 h-32 bg-gray-200 rounded-lg"></div>
                <div className="w-[] md:w-1/2 flex flex-col items-center gap-4">
                  <div className="w-full h-24 bg-gray-200 rounded-lg"></div>
                  <button className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentDashboard