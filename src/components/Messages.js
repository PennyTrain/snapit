import React from 'react';
import { Alert } from 'react-bootstrap';
import { useMessages } from '../contexts/MessageContext';

const Messages = () => {
  const { messages, removeMessage } = useMessages();

  return (
    <div className="message-container">
      {messages.map((message, index) => (
        <Alert
          key={index}
          variant={message.type}
          onClose={() => removeMessage(index)}
          dismissible
        >
          {message.text}
        </Alert>
      ))}
    </div>
  );
};

export default Messages;
