import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen bg-black">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/Netbg.jpg"
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Login / Sign Up Form */}
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 text-white p-12 w-full max-w-md rounded-md shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 mb-4 bg-gray-900 text-white rounded outline-none focus:ring-2 focus:ring-gray-700 transition-all"
          />
        )}

        <input
          type="email"
          placeholder="Email or phone number"
          className="w-full p-4 mb-4 bg-gray-900 text-white rounded outline-none focus:ring-2 focus:ring-gray-700 transition-all"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-6 bg-gray-900 text-white rounded outline-none focus:ring-2 focus:ring-gray-700 transition-all"
        />

        <button className="w-full bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition-all duration-300">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-gray-500" />
            <span>Remember me</span>
          </label>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>

        <p
          className="mt-6 text-gray-400 text-sm text-center cursor-pointer"
          onClick={toggleSignInForm}
        >
          <span className="text-white cursor-pointer hover:underline">
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already registered? Sign in now."}
          </span>
        </p>

        <p className="mt-4 text-xs text-gray-500 text-center">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Learn more.
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
