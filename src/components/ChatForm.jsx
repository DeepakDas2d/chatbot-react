import React, { useEffect, useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Update chat history with the user's message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // Add a "Thinking..." placeholder for the bot's response
    setTimeout(() => {
      setChatHistory((history) => [...history, { role: "model", text: "..." }]);
      // Call the function to generate the bot's response
      generateBotResponse([
        ...chatHistory,
        { role: "user", text: userMessage },
      ]);
    }, 600);
  };
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        ref={inputRef}
        className="message-input"
        placeholder="Message..."
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatForm;
