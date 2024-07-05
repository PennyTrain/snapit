import React from 'react';
import { Alert } from 'react-bootstrap';
import { useMessages } from '../contexts/MessageContext';
import styles from "../styles/Messages.module.css";

/*
The Messages component displays a list of messages using Bootstrap's
 Alert component, allowing users to dismiss them. It retrieves the
  messages and a function to remove them from the useMessages context.
  */

const Messages = () => {
  const { messages, removeMessage } = useMessages();

  return (
    <div className={styles["message-container"]}>
      {messages.map((message, index) => (
        <Alert
          key={index}
          onClose={() => removeMessage(index)}
          dismissible
          className={`${styles.alert} ${styles[`alert-${message.type}`]}`}
        >
          {message.text}
        </Alert>
      ))}
    </div>
  );
};

export default Messages;
