import React from 'react';
import { Paperclip } from 'lucide-react';

const UserAttachButton = () => (
  <button className="p-3 text-gray-400 hover:text-white">
    <Paperclip size={20} />
  </button>
);

export default UserAttachButton;