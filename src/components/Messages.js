import React from 'react';
import { Alert } from 'react-bootstrap';
import { useMessages } from '../contexts/MessageContext';
/*
The Messages component displays a list of messages using Bootstrap's
 Alert component, allowing users to dismiss them. It retrieves the
  messages and a function to remove them from the useMessages context.
  */

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
