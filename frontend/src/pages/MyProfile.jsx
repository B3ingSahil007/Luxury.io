import React, { useEffect } from "react";
import { toast } from "react-toastify";

const MyProfile = () => {
    // Simulated data from MongoDB
    const user = {
        firstname: "Sahil",
        lastname: "Miyawala",
        email: "chhipasahil163@gmail.com",
        mobileNumber: "9638473047",
        apartment: "758",
        street: "Ravadiavas, Nr Do Masjid, Panch Pipli, Jamalpur",
        city: "Ahmedabad",
        state: "Gujarat",
        zipCode: "380001",
        country: "India",
        profilePicture: "https://via.placeholder.com/150",
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-700 shadow-md rounded-lg">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-6">
                <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-gray-600"
                />
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-semibold text-gray-400">
                        {user.firstname} {user.lastname}
                    </h1>
                    <p className="text-gray-400">
                        <strong>Email :</strong> {user.email}
                    </p>
                    <p className="text-gray-400">
                        <strong>Phone :</strong> {user.mobileNumber}
                    </p>
                </div>
            </div>

            {/* Address Section */}
            <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-medium text-black mb-4">
                    Shipping Address :
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p className="text-gray-600">
                        <strong>Apartment :</strong> {user.apartment}
                    </p>
                    <p className="text-gray-600">
                        <strong>Street :</strong> {user.street}
                    </p>
                    <p className="text-gray-600">
                        <strong>City :</strong> {user.city}
                    </p>
                    <p className="text-gray-600">
                        <strong>State :</strong> {user.state}
                    </p>
                    <p className="text-gray-600">
                        <strong>Zip Code :</strong> {user.zipCode}
                    </p>
                    <p className="text-gray-600">
                        <strong>Country :</strong> {user.country}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
