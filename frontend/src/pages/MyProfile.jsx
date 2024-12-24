import React, { useEffect } from "react";

const MyProfile = () => {
    useEffect(() => {
        document.title = "My Profile | Work in Progress"; // Set the page title
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white">
            {/* Work in Progress Header */}
            <h1 className="text-4xl font-bold mb-4 text-yellow-400">
                Work in Progress 🚧
            </h1>
            <p className="text-lg text-gray-300 text-center max-w-2xl">
                This page is currently under construction. Stay tuned for a complete profile experience, including the ability to view and update your personal information!
            </p>

            {/* Placeholder for Future Profile Data */}
            <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-2xl font-medium mb-4">Profile Information</h2>
                <ul className="space-y-2">
                    <li className="text-gray-400">Name: Placeholder</li>
                    <li className="text-gray-400">Email: Placeholder</li>
                    <li className="text-gray-400">Phone: Placeholder</li>
                    <p className="text-gray-400">And More . . .</p>
                </ul>
            </div>
        </div>
    );
};

export default MyProfile;
