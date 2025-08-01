import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Header2 from '../components/Header2';

// Combined component for both login and registration.
export default function loginRegister() {
  // Initialize navigation hook and auth context
  const navigate = useNavigate();
  const { login } = useAuth();
  
  // State to toggle between the 'login' and 'register' forms.
  const [isLoginView, setIsLoginView] = useState(true);

  // State for the form data (email, password).
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // State for handling API response messages and errors.
  const [message, setMessage] = useState('');

  // State for loading indicator.
  const [loading, setLoading] = useState(false);

  // A handler function to update the form data as the user types.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // The async function to handle the registration form submission.
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // *** Using your specific API endpoint for registration. ***
    const apiUrl = 'http://localhost:5019/api/register';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check the response status for a non-success code first.
      if (!response.ok) {
        // If the request was not successful, attempt to get the error message.
        let errorText = 'Registration failed. Please try again.';
        try {
          const errorData = await response.json();
          errorText = errorData.message || errorText;
        } catch (jsonError) {
          // If parsing the error message fails, use the default text.
        }
        throw new Error(errorText);
      }

      // If the request was successful, handle the response body.
      let result = null;
      try {
        // Try to parse the JSON response.
        result = await response.json();
      } catch (jsonError) {
        // If parsing fails, it means there was no JSON body.
        // This is a normal and successful case for status codes like 204.
        console.log('No JSON body in successful response.');
      }

      // Set a success message, using the response message if available.
      setMessage(result?.message || 'User registered successfully! You can now log in.');

      // Clear the form on success and switch to the login view.
      setFormData({ email: '', password: '' });
      setIsLoginView(true);

    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // The async function to handle the login form submission.
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // *** Using your specific API endpoint for login. ***
    const apiUrl = 'http://localhost:5019/api/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check the response status for a non-success code first.
      if (!response.ok) {
        // If the request was not successful, attempt to get the error message.
        let errorText = 'Login failed. Please check your credentials.';
        try {
          const errorData = await response.json();
          errorText = errorData.message || errorText;
        } catch (jsonError) {
          // If parsing the error message fails, use the default text.
        }
        throw new Error(errorText);
      }

      // If the request was successful, handle the response body.
      let result = null;
      try {
        // Try to parse the JSON response.
        result = await response.json();
      } catch (jsonError) {
        // If parsing fails, it means there was no JSON body.
        console.log('No JSON body in successful response.');
      }

      // Handle successful login
      if (result) {
        // Use the auth context to handle login state
        login(result.user || { email: formData.email }, result.token || 'dummy-token');
        
        setMessage(result.message || 'Login successful!');
        
        // Redirect to dashboard after successful login
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        // Fallback for responses without result body
        login({ email: formData.email }, 'dummy-token');
        setMessage('Login successful!');
        // Redirect to dashboard after successful login
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      }

      // Clear the form on success
      setFormData({ email: '', password: '' });

    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header2 />
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {isLoginView ? 'Welcome Back!' : 'Create an Account'}
          </h2>

          {/* Conditional rendering for the forms */}
          {isLoginView ? (
            // --- Login Form ---
            <form onSubmit={handleLogin} className="space-y-6">
              <p className="text-gray-600 mb-6">Please log in to continue.</p>
              <div>
                <label className="block text-left text-gray-700 text-sm font-medium mb-1" htmlFor="loginEmail">
                  Email Address
                </label>
                <input
                  type="email"
                  id="loginEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 text-sm font-medium mb-1" htmlFor="loginPassword">
                  Password
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? 'Logging In...' : 'Log In'}
              </button>
            </form>
          ) : (
            // --- Registration Form ---
            <form onSubmit={handleRegister} className="space-y-6">
              <p className="text-gray-600 mb-6">Create a new account to get started.</p>
              <div>
                <label className="block text-left text-gray-700 text-sm font-medium mb-1" htmlFor="registerEmail">
                  Email Address
                </label>
                <input
                  type="email"
                  id="registerEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 text-sm font-medium mb-1" htmlFor="registerPassword">
                  Password
                </label>
                <input
                  type="password"
                  id="registerPassword"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
            </form>
          )}

          {/* Display the message from the API response */}
          {message && (
            <div className={`mt-6 p-4 rounded-lg text-center font-medium ${message.startsWith('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message}
            </div>
          )}

          {/* Link to toggle between login and register views */}
          <p className="mt-6 text-sm text-gray-600">
            {isLoginView ? (
              <>
                Don't have an account? <a href="#" onClick={(e) => {e.preventDefault(); setIsLoginView(false); setMessage('')}} className="text-blue-600 hover:underline">Register now</a>
              </>
            ) : (
              <>
                Already have an account? <a href="#" onClick={(e) => {e.preventDefault(); setIsLoginView(true); setMessage('')}} className="text-blue-600 hover:underline">Log in</a>
              </>
            )}
          </p>
        </div>
      </div>
    </>
  );
};