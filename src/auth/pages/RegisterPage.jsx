import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <AuthLayout>
      <div className="relative -mt-16 block">
        <h2 className="mt-2 text-2xl font-bold text-gray-700 sm:text-3xl md:text-4xl">Sign Up</h2>
        <p className="mt-4 leading-relaxed text-gray-500">
          Fill this form with your data and get into the site
        </p>
      </div>
      <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={(e) => handleSubmit(e)}>
        <div className="col-span-12">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            id="fullName"
            name="first_name"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-12">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="text"
            id="email"
            name="first_name"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-12">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            id="password"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-12 sm:flex sm:items-center sm:gap-4">
          <button
            className="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-500"
            onClick={() => setIsLoading(!isLoading)}>
            <span className="absolute right-0 -translate-x-4">
              {!isLoading ? (
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              ) : (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
            </span>

            <span className="text-sm font-medium mr-4">Sign Up</span>
          </button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            Already have an account? {' '}
            <Link to="/auth/login">
              <a className="text-gray-700 underline">Log in</a>.
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};
