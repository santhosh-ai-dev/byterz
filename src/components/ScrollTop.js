"use client";
import CloseIcon from "@mui/icons-material/Close"; // Close Icon
import { useEffect, useRef, useState } from "react";


const Chatbot = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Welcome! How can I assist you today?" },
  ]); // Initial greeting message
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showChatButton, setShowChatButton] = useState(false);

  useEffect(() => {
    // Show chatbot button when user scrolls down
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowChatButton(true);
      } else {
        setShowChatButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Add user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: inputValue },
    ]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();

      if (data.reply) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", text: data.reply },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", text: "Sorry, I couldn't process that." },
        ]);
      }
    } catch (error) {
      console.error("Error with Gemini API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: "An error occurred. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }

    setInputValue("");
  };

  return (
    <div>
      {/* Chatbot Button */}
      {showChatButton && (
        <button
          aria-label="chatbot"
          className={`fixed bottom-4 right-4 md:right-8 z-50 shadow-2xl shadow-black text-gray-500 bg-white hover:bg-[#ececec] p-3 rounded-full ${
            chatVisible ? "animate-slideIn" : ""
          }`}
          onClick={toggleChat}
        >
          {chatVisible ? (
            <CloseIcon />
          ) : (
            <img
              src="chatbot.png" // Replace with the path to your image
              alt="Chatbot Icon"
              className="w-8 h-8"
            />
          )}
        </button>
      )}

      {/* Chatbot Window */}
      {chatVisible && (
        <div className="fixed bottom-20 md:bottom-24 right-4 md:right-8 w-[90%] md:w-80 h-[70vh] md:h-96 bg-white shadow-2xl rounded-lg border border-gray-300 flex flex-col overflow-hidden z-50 animate-slideIn">
          {/* Chatbot Header */}
          <div className="bg-[#ececec] p-4 flex items-center justify-between border-b border-gray-300">
            <div className="flex items-center">
              <img
                src="/favicon.ico" // Replace with the path to your image
                alt="Chatbot Logo"
                className="w-8 h-8 rounded-full mr-2"
              />
              <h2 className="text-gray-700 font-semibold text-base md:text-lg">
                Byterz Tech Bot
              </h2>
            </div>
            <button
              className="text-gray-500 hover:text-black"
              onClick={toggleChat}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700">
            {messages.map((message, index) => (
              <p
                key={index}
                className={`mb-2 ${
                  message.type === "bot" ? "text-left text-blue-500" : "text-right text-black"
                }`}
              >
                {message.text}
              </p>
            ))}
          </div>

          {/* Chat Input */}
<div className="p-2 border-t border-gray-300">
  <input
    type="text"
    placeholder="Type your message..."
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    className="w-full p-2 border rounded focus:outline-none focus:ring"
    style={{
      backgroundColor: "#f5f5f5", // Light gray background
      color: "#333", // Dark text color
      borderColor: "#ddd", // Light border color
      borderWidth: "1px",
    }}
  />
  <button
    onClick={sendMessage}
    className="mt-2 w-full p-2 bg-blue-500 text-white rounded"
  >
    Send
  </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Chatbot;
