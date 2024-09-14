import React from 'react';

const UserMessage = ({ message }) => (
  <div className="flex justify-end mb-4">
    <div className="bg-gray-700 rounded-lg p-3 max-w-3/4">
      <p>{message}</p>
    </div>
  </div>
);

export default UserMessage;