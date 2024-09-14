import React, { useState, useEffect, useRef } from 'react';
import ChatContainer from './components/ChatContainer';
import UserMessage from './components/UserMessage';
import AIMessage from './components/AIMessage';
import UserInputBox from './components/UserInputBox';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <ChatContainer>
      {messages.map((msg, index) =>
        msg.type === 'user' ? (
          <UserMessage key={index} message={msg.text} />
        ) : (
          <AIMessage key={index} message={msg.message} codeBlocks={msg.codeBlocks} />
        )
      )}
      <div ref={messagesEndRef} />
      <UserInputBox messages={messages} setMessages={setMessages} />
    </ChatContainer>
  );
};

export default ChatApp;