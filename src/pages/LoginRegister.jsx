import React from 'react'
import Header from '../components/Header';
import Header2 from '../components/Header2';

export default function loginRegister() {
    return (
        <>
            <Header2 />
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
                {/* <Header /> Uncomment if you want the header on the login page */}
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Login / Register</h2>
                    <p className="text-gray-600 mb-6">Welcome! Please log in to continue.</p>
                    {/* Your actual login form would go here */}
                    <form className="space-y-4">
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Log In
                        </button>
                    </form>
                    <p className="mt-6 text-sm text-gray-600">
                        Don't have an account? <a href="#" className="text-blue-600 hover:underline">Register now</a>
                    </p>
                </div>
            </div>
        </>
    );
};