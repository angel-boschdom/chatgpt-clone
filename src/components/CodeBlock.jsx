import React from 'react';
import CopyToClipboardButton from './CopyToClipboardButton';

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

export default CodeBlock;