import React, { createContext, useContext, useState } from 'react';

// The MessageProvider component manages a context for messages, allowing adding and 
// removing messages from the state. It provides the messages and the functions to 
// manipulate them through the MessageContext, which can be accessed using the useMessages 
// hook.

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const removeMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage, removeMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => useContext(MessageContext);
