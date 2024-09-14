import React, { useState, useEffect, useRef } from 'react';
import { Paperclip, Copy, Send } from 'lucide-react';

// Chat container for messages
const ChatContainer = ({ children }) => (
  <div className="flex flex-col h-screen bg-gray-900 text-white">
    <div className="flex-1 overflow-y-auto p-4" id="chatMessagesContainer">
      {children}
    </div>
  </div>
);

// Component for displaying user messages
const UserMessageComponent = ({ message }) => (
  <div className="flex justify-end mb-4">
    <div className="bg-gray-700 rounded-lg p-3 max-w-3/4">
      <p>{message}</p>
    </div>
  </div>
);

// Component for displaying code blocks
const CodeBlock = ({ code, language }) => (
  <div className="bg-gray-900 rounded mt-2 p-2 relative">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm text-gray-400">{language}</span>
      <CopyToClipboardButton code={code} />
    </div>
    <pre className="text-sm">
      <code>{code}</code>
    </pre>
  </div>
);

// Copy to clipboard button
const CopyToClipboardButton = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className="text-gray-400 hover:text-white relative">
      <Copy size={16} />
      {copied && (
        <span className="absolute -top-5 right-0 text-xs text-green-500">Copied!</span>
      )}
    </button>
  );
};

// Component for displaying AI messages with optional code blocks
const AIMessageComponent = ({ message, codeBlocks = [] }) => (
  <div className="flex mb-4 items-start">
    {/* AI avatar */}
    <div className="flex items-center justify-center w-10 h-10 bg-white text-gray-800 rounded-full mr-3 flex-shrink-0">
      <span className="font-bold">AI</span>
    </div>
    
    {/* Message content */}
    <div className="bg-gray-800 text-white rounded-lg p-3 max-w-3/4">
      <p>{message}</p>
      {codeBlocks.map((block, index) => (
        <CodeBlock key={index} {...block} />
      ))}
    </div>
  </div>
);

// Input box component for sending messages
const UserInputBox = ({ messages, setMessages }) => {
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prevMessages) => [...prevMessages, { type: 'user', text: input }]);
    setInput('');

    const aiResponse = await fetchAIResponse();
    setMessages((prevMessages) => [...prevMessages, { type: 'ai', ...aiResponse }]);
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default behavior like form submission
      handleSend(); // Send the message
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
          onKeyDown={handleKeyDown} // Add keydown listener for Enter key
        />
        <button className="p-3 text-gray-400 hover:text-white" onClick={handleSend}>
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

// Attach button component
const UserAttachButton = () => (
  <button className="p-3 text-gray-400 hover:text-white">
    <Paperclip size={20} />
  </button>
);

// Fetch AI response
const fetchAIResponse = async () => {
  try {
    const response = await fetch('https://catfact.ninja/fact');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return {
      message: data.fact || 'No fact found',
      codeBlocks: [],
      type: 'ai',
    };
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return {
      message: 'Error fetching AI response',
      codeBlocks: [],
      type: 'ai',
    };
  }
};

// ChatApp component
const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="flex-1 overflow-y-auto p-4" id="chatMessagesContainer">
        {messages.map((msg, index) =>
          msg.type === 'user' ? (
            <UserMessageComponent key={index} message={msg.text} />
          ) : (
            <AIMessageComponent key={index} message={msg.message} codeBlocks={msg.codeBlocks} />
          )
        )}
        <div ref={messagesEndRef} />
      </div>
      <UserInputBox messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default ChatApp;