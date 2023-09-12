import React, { useState } from 'react';
import { Chat } from 'react-chat-popup'; // Create this component
import { Credentials } from './dialogflow-credentials'; // Path to your Dialogflow JSON credentials

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleUserMessage = async (messageText) => {
    setMessages([...messages, { type: 'user', text: messageText }]);
    try {
      const response = await fetchDialogflow(messageText);
      setMessages([...messages, { type: 'bot', text: response }]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDialogflow = async (messageText) => {
    const credentials = Credentials; // Import your Dialogflow credentials
    const projectId = credentials.project_id;
    const sessionClient = new dialogflow.SessionsClient({ credentials });

    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      'unique-session-id'
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: messageText,
          languageCode: 'en-US',
        },
      },
    };

    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    return result.fulfillmentText;
  };

  return (
    <Chat
      title="Chatbot"
      messages={messages}
      onSendMessage={handleUserMessage}
    />
  );
};

export default Chatbot;
