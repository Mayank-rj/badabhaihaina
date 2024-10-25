import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'; // Home icon

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-purple-600">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">Oops! Page Not Found</h2>
        <p className="mt-2 text-gray-600">The page you are looking for does not exist.</p>
        <div className="mt-6">
          <Link 
            to="/" 
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition duration-300"
          >
            <AiOutlineHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
