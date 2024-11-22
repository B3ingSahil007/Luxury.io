import React, { useState, useEffect } from "react";
import UserModal from "../components/UserModal";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Fetch users from the API
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        // Mock fetch logic, replace with actual API call
        const response = await fetch("http://localhost:4000/api/user/allusers");
        const data = await response.json();
        setUsers(data);
    };

    const handleEdit = (user) => {
        setCurrentUser(user);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            // Delete user API call
            await fetch(`/api/users/${id}`, { method: "DELETE" });
            fetchUsers();
        }
    };

    const handleAdd = () => {
        setCurrentUser(null);
        setShowModal(true);
    };

    return (
        <div>
            <h2 className="text-2xl mb-4">All Users</h2>
            <div className="overflow-x-auto shadow-md border rounded-lg">
                <table className="min-w-full table-auto border-collapse">
                    <thead className="bg-gray-700 text-white">
                        <tr>
                            <th className="text-center px-4 py-2">Sr No</th>
                            <th className="text-center px-4 py-2">First Name</th>
                            <th className="text-center px-4 py-2">Last Name</th>
                            <th className="text-center px-4 py-2">Email</th>
                            <th className="text-center px-4 py-2">Mobile Number</th>
                            <th className="text-center px-4 py-2">Apartment</th>
                            <th className="text-center px-4 py-2">Street</th>
                            <th className="text-center px-4 py-2">City</th>
                            <th className="text-center px-4 py-2">State</th>
                            <th className="text-center px-4 py-2">Zipcode</th>
                            <th className="text-center px-4 py-2">Country</th>
                            <th className="text-center px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id || index} className="border-b hover:bg-gray-600 hover:text-black transition-all ease-linear">
                                <td className="px-4 text-center">{index + 1}</td>
                                <td className="px-4 text-center">{user.firstname}</td>
                                <td className="px-4 text-center">{user.lastname}</td>
                                <td className="px-4 text-center">{user.email}</td>
                                <td className="px-4 text-center">{user.mobileNumber}</td>
                                <td className="px-4 text-center">{user.apartment}</td>
                                <td className="px-4 text-center">{user.street}</td>
                                <td className="px-4 text-center">{user.city}</td>
                                <td className="px-4 text-center">{user.state}</td>
                                <td className="px-4 text-center">{user.zipCode}</td>
                                <td className="px-4 text-center">{user.country}</td>
                                <td className="px-4 flex gap-2 mt-3">
                                    <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-200" onClick={() => handleEdit(user)} >
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200" onClick={() => handleDelete(user.id)} >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <UserModal user={currentUser} onClose={() => setShowModal(false)} onSave={fetchUsers} />
            )}
        </div>

    );
};

export default AllUsers;
