import React from 'react';
import CodeBlock from './CodeBlock';

const AIMessageComponent = ({ message, codeBlocks = [] }) => (
  <div className="flex mb-4 items-start">
    <div className="flex items-center justify-center w-10 h-10 bg-white text-gray-800 rounded-full mr-3 flex-shrink-0">
      <span className="font-bold">AI</span>
    </div>
    
    <div className="bg-gray-800 text-white rounded-lg p-3 max-w-3/4">
      <p>{message}</p>
      {codeBlocks.map((block, index) => (
        <CodeBlock key={index} {...block} />
      ))}
    </div>
  </div>
);

export default AIMessageComponent;