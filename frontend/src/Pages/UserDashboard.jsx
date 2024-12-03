import React, { useState, useEffect } from 'react'
import { useAuthStore } from "../store/authStore";
import { requestMatching } from "../store/requests.m.Store";
import { formatDate } from "../utils/Date";
import toast, { Toaster } from 'react-hot-toast';
import { NotebookText, History, Loader } from 'lucide-react'
import EditModal from '../Components/Modal';



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

function UserDashboard() {
  const { user, logout } = useAuthStore();
  const { matchedAgents, isLoading, fetchMatchedAgents } = requestMatching();
  const [activeTab, setActiveTab] = useState("Matched Requests");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (user?._id) {
      fetchMatchedAgents(user._id); // Fetch matched agents for the logged-in user
    } else {
      toast.error("User not logged in!");
    }
  }, [user, fetchMatchedAgents]);
  console.log("This is fetchedMatchAgents ", matchedAgents);

  const handleAction = (type, phoneNumber) => {
    if (!phoneNumber) {
      alert("Agent number is not available.");
      return;
    }

    const transformedPhoneNumber = phoneNumber.startsWith("0")
      ? `+234${phoneNumber.slice(1)}`
      : `+234${phoneNumber}`;

    if (type === "whatsapp") {
      // Redirect to WhatsApp
      const message = encodeURIComponent(
        "From Trekking Agent: Hello, I see that you have been matched as an agent operating in my area of interest for renting a property. I would like to discuss further details with you. Please let me know how we can proceed."
      );
      const whatsappUrl = `https://wa.me/${transformedPhoneNumber}?text=${message}`;
      window.open(whatsappUrl, "_blank");
    } else if (type === "call") {
      // Redirect to call app
      const callUrl = `tel:${transformedPhoneNumber}`;
      window.location.href = callUrl;
    }
  };
  return (
    <div className="min-h-full">



      <div className="container mx-auto p-4 font-sans">
        <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

        <div className="grid md:grid-cols-[300px_1fr] gap-6">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                  alt="Agent"
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-1">
                  <CheckCircleIcon />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-600">Verified User</p>
                <div className="text-sm space-y-1 text-gray-700">
                  <p>Email: {user.email}</p>
                  <p>Phone Number: {user.phoneNumber}</p>

                </div>
              </div>

              <div className="flex gap-2 w-full">
                {/* <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Edit Profile</button> */}
                <button className="flex-1 px-4 py-2  bg-[#133B5D] text-white rounded hover:bg-[#0f2d47] transition"
                  onClick={openModal}>Edit Profile</button>
              </div>
            </div>
          </div>
          {isModalOpen && (
            <EditModal isOpen={isModalOpen} onClose={closeModal} userID={user._id} />
          )}
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
                  className={`flex gap-3 flex-1 px-4 py-2 text-center ${activeTab === 'Matched Requests' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('Matched Requests')}
                >
                  <NotebookText /> Requests
                </button>
                <button
                  className={` flex gap-3 flex-1 px-4 py-2 text-center ${activeTab === 'Accepted Requests' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('History')}
                >
                  <History /> History
                </button>
              </div>
              <div className="p-4">
                {activeTab === 'Matched Requests' ? (
                  <div>
                    {isLoading ? (
                      <div className="flex justify-center items-center">
                        <Loader />

                      </div>
                    ) : (
                      matchedAgents.length > 0 ? (
                        <div className="grid gap-5">
                          {matchedAgents.map((agent) => (

                            <div key={agent._id} className="p-2  border w-full lg:w-[80%] border-black rounded-lg">
                              <h3 className="text-lg font-semibold mb-4">Agent Details</h3>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="text-sm text-gray-600">Agent Name</h4>
                                  <p className="font-medium">{agent.name}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm text-gray-600">VERIFIED</h4>
                                  <p className="font-medium">{agent.verified === true ? "Yes" : "N0"}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm text-gray-600">LOCATION</h4>
                                  {agent.area.map((item, index) => (
                                    <p key={index} className="font-medium">
                                      {item}
                                    </p>
                                  ))}
                                </div>

                                <div>
                                  <h4 className="text-sm text-gray-600">Contact Info</h4>
                                  <p className="font-medium"><span>Phone Number: </span>{agent.phoneNumber}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm text-gray-600">Agent Touring Fee</h4>
                                  <p className="font-medium"><span> ₦</span>{agent.touringFee}</p>
                                </div>
                              </div>

                              <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <img
                                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                                    alt="Client"
                                    className="w-12 h-12 rounded-full"
                                  />
                                  <span className="font-medium">{agent.name}</span>
                                </div>
                                <div className="flex gap-5 items-center">       
                                  <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                                  onClick={() => handleAction("whatsapp", agent.phoneNumber)}>
                               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png?20200503174721" className="w-7" alt="" />
                                </button>
                                  <button
                                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                                    onClick={() => handleAction("call", agent.phoneNumber)}
                                  >
                                    {/* {console.log(`Users phone numner ${users.user.phoneNumber}`)} */}
                                       <WhatsAppIcon />
                                  </button>
                                  <p className="font-semibold text-red-500 ">Note:The Agents infos will be sent to you via Email</p></div>


                              </div>

                            </div>

                          ))}

                        </div>
                      ) : (
                        <p className="font-semibold text-3xl">No request yet</p>
                      )
                    )}

                  </div>

                ) : (
                  <p className="text-center text-gray-500">No history yet.</p>
                )}
              </div>
            </div>



          </div>
        </div>
      </div>


    </div >
  )
}

export default UserDashboard