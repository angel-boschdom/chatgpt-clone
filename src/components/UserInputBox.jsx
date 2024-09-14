import React, { useState } from 'react';
import { Send } from 'lucide-react';
import UserAttachButton from './UserAttachButton';
import { fetchAIResponse } from '../utils/api';

const UserInputBox = ({ messages, setMessages }) => {
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prevMessages) => [...prevMessages, { type: 'user', text: input }]);
    setInput('');

    const aiResponse = await fetchAIResponse();
    setMessages((prevMessages) => [...prevMessages, { type: 'ai', ...aiResponse }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-gray-700 p-4 bg-gray-900">
      <div className="flex items-center bg-gray-800 rounded-lg">
        <UserAttachButton />
        <input
          type="text"
          placeholder="Type your message ..."
          className="flex-grow bg-transparent p-3 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="p-3 text-gray-400 hover:text-white" onClick={handleSend}>
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default UserInputBox;