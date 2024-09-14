import React, { useState } from 'react';
import { Copy } from 'lucide-react';

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

export default CopyToClipboardButton;