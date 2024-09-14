import React from 'react';

const ChatContainer = ({ children }) => (
  <div className="flex flex-col h-screen bg-gray-900 text-white">
    <div className="flex-1 overflow-y-auto p-4" id="chatMessagesContainer">
      {children}
    </div>
  </div>
);

export default ChatContainer;