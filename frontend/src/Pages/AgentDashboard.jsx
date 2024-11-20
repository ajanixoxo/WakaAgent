import { useState, useEffect } from 'react'
import { useAuthStore } from "../store/authStore";
import { requestMatching } from "../store/otherStore";
import toast from 'react-hot-toast';
import ImageUpload from '../Components/Image-Upload';
import EditModal from '../Components/Modal';
import { NotebookText, Handshake, ThumbsUp, BookOpenText, UserPen, Loader } from 'lucide-react'
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

  const [activeTab, setActiveTab] = useState('Form');
  const [nin, setNin] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState('Nigeria')
  const [areaLocations, setAreaLocations] = useState(['']);
  const { updateAgentProfile, isLoading, agent } = useAuthStore();
  const [imageFile, setImageFile] = useState(null);
  const agentId = agent._id
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { matchedUsers, fetchMatchedUsers } = requestMatching();

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)


  useEffect(() => {
    if (agent?._id) {
      fetchMatchedUsers(agent._id); // Fetch matched agents for the logged-in user
    } else {
      toast.error("User not logged in!");
    }
  }, [agent, fetchMatchedUsers]);
  console.log("This is fetchedMatchAgents ", matchedUsers);


  const handleFileSelect = (file) => {
    setImageFile(file);
  };


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


  const handleAddLocation = () => {
    if (areaLocations.length < 3) {
      setAreaLocations([...areaLocations, '']);
    }
  };

  // Handle removing a location input
  const handleRemoveLocation = (index) => {
    setAreaLocations(areaLocations.filter((_, i) => i !== index));
  };

  // Handle updating area locations on change
  const handleLocationChange = (index, value) => {
    const updatedLocations = [...areaLocations];
    updatedLocations[index] = value;
    setAreaLocations(updatedLocations);
  };

  const handleFormFilling = async (e) => {
    e.preventDefault();
    console.log("Form submitted ", state, country, nin, imageFile, areaLocations, agentId)
    try {
      await updateAgentProfile(country, state, nin, imageFile, areaLocations, agentId)
      toast.success("Successfully update agent profile");
    } catch (error) {
      console.log(error);
      toast.error("Error when updating  agent profile");

    }
  }
  return (
    <div className="min-h-full">

      <div className="container mx-auto p-4 font-sans">
        <h1 className="text-2xl font-bold mb-6">Agent Dashboard</h1>

        <div className="grid md:grid-cols-[300px_1fr] gap-6">
          {/* Profile Section */}
          <div className="bg-white w-full lg:w-full rounded-lg shadow p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <img
                  src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                  alt="Agent"
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                />
                {agent.verified === true ?
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-1">
                    <CheckCircleIcon />
                  </div> :
                  <div className="absolute -bottom-2 -right-6 bg-red-500 rounded p-1">

                    <span className="text-white p-2">Not Verified</span>
                  </div>
                }

              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold">{agent.name}</h2>
                <p className="text-sm text-gray-600"><span className="font-semibold text-black text-xl">Email:</span> {agent.email} </p>

                <p className="text-base text-gray-600">{(agent.verified == true) ? "Verified Agent" : "Fill the required field below to get verified"} </p>
                <div className="text-sm space-y-1 text-gray-700">
                  {/* <p>Age: 34</p> */}
                  <p>State of Origin:{agent.state ? agent.state : "No State of Orgin Provided"}</p>
                  <p >Operational Base:
                    {agent.area.map((item, index) => (
                      <p key={index} style={{ marginRight: "10px" }} className="font-semibold">{item}</p>
                    ))}
                  </p>
                  {/* <p>Lagos Island</p>
                  <p>AJah</p>
                  <p>Maryland</p> */}
                </div>
              </div>

              <div className="flex gap-2 w-full">
                <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                  onClick={openModal}
                >Edit Profile</button>
                <button className="flex-1 px-4 py-2 bg-[#133B5D] text-white rounded hover:bg-blue-700 transition">Suscription</button>
              </div>
            </div>
          </div>
          {isModalOpen && (
            <EditModal isOpen={isModalOpen} onClose={closeModal} />
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
              <div className="flex border-b ">
                {!agent.verified && (
                  <>
                    <button
                      className={`flex flex-col md:flex-row items-center gap-3 flex-1 px-4 py-2 text-center ${activeTab === 'requests' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                      onClick={() => setActiveTab('Form')}
                    >
                      <BookOpenText />Complete form to get verifed
                    </button>
                  </>
                )}
                <button
                  className={`flex flex-col md:flex-row items-center gap-3 flex-1 px-4 py-2 text-center ${activeTab === 'requests' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('requests')}
                >
                  <NotebookText />  Requests
                </button>
                <button
                  className={`flex  flex-col  md:flex-row items-center gap-3 flex-1 px-4 py-2 text-center ${activeTab === 'completed' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('completed')}
                >
                  <Handshake />  Completed
                </button>
                <button
                  className={`flex flex-col md:flex-row items-center gap-3 flex-1 px-4 py-2 text-center ${activeTab === 'feedback' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('feedback')}
                >
                  <ThumbsUp /> Feedback
                </button>
              </div>
              <div className="p-4">
                <div className="">


                  {activeTab === 'Form' && agent.verified === false ? (

                    <div className="w-full flex flex-col gap-5 justify-between items-center">
                      <form onSubmit={handleFormFilling} method="POST" className="space-y-6 p-2 w-[90%] md:w-[100%]">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
                          <div className=" grid w-full md:grid-cols-2  gap-4 place-items-center lg:p-8">
                            <div className="w-full md:w-[50%]">
                              <ImageUpload onFileSelect={handleFileSelect} />
                            </div>
                            <div className="w-full">
                              <div className="w-full md:w-[100%]">
                                <div className="flex items-center justify-between">
                                  <label htmlFor="nin" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                    National Identification Number (NIN)
                                  </label>
                                </div>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <UserPen className="h-5 w-5 text-gray-400" />
                                  </div>
                                  <input
                                    id="nin"
                                    name="nin"
                                    type="text"
                                    required
                                    className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border border-black h-10 rounded-md"
                                    placeholder="Your NIN"
                                    value={nin}
                                    onChange={(e) => setNin(e.target.value)}
                                  />
                                </div>
                                <input type="hidden" value={agentId} />
                              </div>
                              <div className="w-full md:w-[100%]">
                                <div className="flex items-center justify-between">
                                  <label htmlFor="state" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                    State
                                  </label>
                                </div>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <UserPen className="h-5 w-5 text-gray-400" />
                                  </div>
                                  <input
                                    id="state"
                                    name="state"
                                    type="state"
                                    required
                                    className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border border-black h-10 rounded-md"
                                    placeholder="e.g Lagos, Oyo, Abjua"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="w-full md:w-[100%]">
                                <div className="flex items-center justify-between">
                                  <label htmlFor="country" className="block text-sm font-medium leading-6 p-2 text-gray-900">
                                    Country
                                  </label>
                                </div>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <UserPen className="h-5 w-5 text-gray-400" />
                                  </div>
                                  <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    required
                                    className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border border-black h-10 rounded-md"
                                    placeholder="Nigeria"
                                    value={country}

                                    readOnly
                                  />
                                </div>
                              </div>

                              <div className="w-full mt-2 grid gap-4 md:w-[100%]">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Area of Location</label>
                                {areaLocations.map((location, index) => (
                                  <div key={index} className="w-full flex items-center space-x-2">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                      <UserPen className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                      type="text"
                                      placeholder={`e.g Ikorudu, Iwo Road, Egbeda ${index + 1}`}
                                      value={location}
                                      onChange={(e) => handleLocationChange(index, e.target.value)}
                                      className="p-2 focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border border-black h-10 rounded-md"
                                    />
                                    {index > 0 && (
                                      <button
                                        type="button"
                                        onClick={() => handleRemoveLocation(index)}
                                        className="p-2 text-red-500 hover:text-red-700"
                                      >
                                        Remove
                                      </button>
                                    )}
                                  </div>
                                ))}

                                {/* Add location button, limited to 3 locations */}
                                {areaLocations.length < 3 && (
                                  <button
                                    type="button"
                                    onClick={handleAddLocation}
                                    className="mt-2 text-blue-500 hover:text-blue-700"
                                  >
                                    + Add Location
                                  </button>
                                )}
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="">
                          <button
                            type="submit"
                            className="flex w-1/2 lg:w-[30%] lg:p-4 mx-auto bg-[#133B5D] justify-center rounded-md p-2 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            disabled={isLoading}
                          >
                            {isLoading ? <Loader className='animate-spin mx-auto' size={24} /> : "Update"}
                          </button>
                        </div>
                      </form>

                    </div>
                  ) :
                    activeTab === 'requests' ? (
                      <div>
                        {isLoading ? (
                          <div className="flex justify-center items-center">
                            <Loader />

                          </div>
                        ) : (
                          matchedUsers.length > 0 ? (
                            <div className="grid gap-5">
                              {matchedUsers.map((users) => (
                                <div key={agent._id} className="p-2  border w-full lg:w-[80%] border-black rounded-lg">
                                  <h3 className="text-lg font-semibold mb-4">Property Description</h3>
                                  <div className="p-2 grid  gap-3 md:grid-cols-2">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <h4 className="text-sm text-gray-600 ">PROPERTY Description</h4>
                                        {Object.entries(users.requestDetails).map(([key, value], index) => (
                                          <p className="font-medium" key={index}>
                                            <strong>{key}:</strong> {value}
                                          </p>
                                        ))}

                                      </div>
                                      <div>
                                        <h4 className="text-sm text-gray-600">Area </h4>
                                        <p className="font-medium">{users.area}</p>
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
                                      <div className="flex md:flex-col items-center justify-center gap-2">
                                        <img
                                          src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                                          alt="Client"
                                          className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                          <h4 className="text-sm text-gray-600">Client Name</h4>
                                          <p className="font-medium">{users.user.name}</p>
                                        </div>
                                        <div>
                                          <h4 className="text-sm text-gray-600">Client Number</h4>
                                          <p className="font-medium">{users.user.phoneNumber}</p>
                                        </div>

                                      </div>
                                      <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
                                        <WhatsAppIcon />
                                      </button>
                                    </div>

                                  </div>
                                </div>
                              ))}



                            </div>
                          ) : (
                            <p className="font-semibold text-center text-xl">No request yet</p>
                          )


                        )}


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
            {/* <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold mb-4">SUBSCRIPTION PLAN</h3>
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="w-full md:w-1/2 h-32 bg-gray-200 rounded-lg"></div>
                <div className="w-full md:w-1/2 flex flex-col items-center gap-4">
                  <div className="w-full h-24 bg-gray-200 rounded-lg"></div>
                  <button className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">SUBSCRIBE</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentDashboard