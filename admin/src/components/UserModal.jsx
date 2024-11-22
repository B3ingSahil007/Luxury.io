import React, { useState } from "react";

const UserModal = ({ user, onClose, onSave }) => {
    const [formData, setFormData] = useState(
        user || { name: "", email: "" }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user) {
            // Update user
            await fetch(`/api/users/${user.id}`, {
                method: "PUT",
                body: JSON.stringify(formData),
            });
        } else {
            // Add new user
            await fetch(`/api/users`, {
                method: "POST",
                body: JSON.stringify(formData),
            });
        }
        onSave();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-600 text-white p-3 rounded-lg w-96">
                <h3 className="text-xl font-bold mb-2">
                    {user ? "Edit User" : "Add New User"}
                </h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className="block font-semibold mb-2">First Name :</label>
                        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className="w-full px-3 py-1 border rounded bg-gray-600" required />
                    </div>
                    <div className="mb-2">
                        <label className="block font-semibold mb-2">Last Name :</label>
                        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="w-full px-3 py-1 border rounded bg-gray-600" required />
                    </div>
                    <div className="mb-2">
                        <label className="block font-semibold mb-2">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-gray-600" required />
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="mr-2 px-4 py-2 bg-gray-300 rounded" onClick={onClose} >
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded" >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;
