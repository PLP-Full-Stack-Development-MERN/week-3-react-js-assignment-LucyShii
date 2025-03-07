import React, { useState } from 'react';

function Profile({ user, onUpdateName }) {
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      onUpdateName(newName);
      setNewName('');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      <div className="mb-4 p-4 bg-gray-50 rounded-md">
        <p className="mb-2">
          <span className="font-medium">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-medium">Email:</span> {user.email}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Update Name
          </label>
          <input
            type="text"
            id="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter new name"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;