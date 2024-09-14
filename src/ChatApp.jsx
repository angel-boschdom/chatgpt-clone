import React, { useState, useEffect, useRef } from 'react';
import ChatContainer from './components/ChatContainer';
import UserMessage from './components/UserMessage';
import AIMessage from './components/AIMessage';
import UserInputBox from './components/UserInputBox';
import BurgerMenu from './components/BurgerMenu';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const navigationItems = ['Home', 'About Us', 'Contact Us', 'Sign In', 'Sign Up'];
  
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <BurgerMenu navItems={navigationItems}/>
      <div className="flex-1 flex flex-col">
        <ChatContainer>
          {messages.map((msg, index) =>
            msg.type === 'user' ? (
              <UserMessage key={index} message={msg.text} />
            ) : (
              <AIMessage key={index} message={msg.message} codeBlocks={msg.codeBlocks} />
            )
          )}
          <div ref={messagesEndRef} />
        </ChatContainer>
        <UserInputBox messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
};

export default ChatApp;