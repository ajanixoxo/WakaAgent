import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Navigate } from 'react-router-dom'

import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login'
import RegisterUser from './Pages/RegisterUser'
import VerifyEmail from './Pages/VerifyEmail'
import UserDashboard from './Pages/UserDashboard';
import RegisterAgent from './Pages/RegisterAgent'
import { useAuthStore } from './store/authStore'
import toast,{ Toaster } from 'react-hot-toast';

import './App.css'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  if (!user.isVerified) {
    return <Navigate to='/verify-email' replace />;
  }

  return children;
};
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to='/user-dashboard' replace />;
  }
  

  return children;
};
function App() {
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])
  console.log("isauthenticate", isAuthenticated)
  console.log("user", user)

  return (
    <>

      <Header />
      <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: "",
    duration: 5000,
    style: {
      background: "#87CEEB",
      color: "#fff",
    },
  }}
/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-user" element={
          <RedirectAuthenticatedUser>
            <RegisterUser />
          </RedirectAuthenticatedUser>}
        />
        <Route path="/register-agent" element={
          <RedirectAuthenticatedUser>
            <RegisterAgent />
          </RedirectAuthenticatedUser>}
        />
        <Route path="/login-user" element={
          <RedirectAuthenticatedUser>
            <Login />
          </RedirectAuthenticatedUser>} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/user-dashboard" element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>} />
      </Routes>
      <Footer />


    </>
  )
}

export default App
