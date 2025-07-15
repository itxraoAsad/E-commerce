import React from 'react';
import { CgProfile } from "react-icons/cg";


const ProfilePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <CgProfile size={94} />

          <div className="flex-1 w-full ml-60 ">
            <h2 className="text-2xl font-bold text-gray-800">John</h2>
            <p className="text-gray-600 mt-2">John@email.com</p>
            <p className="text-gray-600 mt-1">Lahore, Pakistan</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-700">Orders</h3>
            <p className="text-sm text-gray-600 mt-2">You have 5 recent orders.</p>
            <button className="mt-2 text-blue-500 text-sm">View Orders</button>
          </div>
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-700">Saved Items</h3>
            <p className="text-sm text-gray-600 mt-2">2 items saved for later.</p>
            <button className="mt-2 text-blue-500 text-sm">View Wishlist</button>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800">Account Information</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Full Name</p>
              <p className="text-base text-gray-800 mt-1">John Volture</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="text-base text-gray-800 mt-1">+92 300 1234567</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-base text-gray-800 mt-1">John@email.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="text-base text-gray-800 mt-1">Lahore, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
