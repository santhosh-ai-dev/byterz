"use client";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import ChatIcon from "@mui/icons-material/Chat"; // Chatbot Icon
import CloseIcon from "@mui/icons-material/Close"; // Close Icon
import { useEffect, useRef, useState } from "react";

const ScrollTop = () => {
  const arrow = useRef();
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([{ type: "bot", text: "Welcome! How can I help you today?" }]);
  const [inputValue, setInputValue] = useState("");

  const GEMINI_API_KEY ="AIzaSyA24FQxCGq-bF5vxTw-4dfjIQTKdPH22EI";
  const GEMINI_API_URL ="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA24FQxCGq-bF5vxTw-4dfjIQTKdPH22EI";

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= 200) {
        arrow.current.classList.add("right-8");
      } else {
        arrow.current.classList.remove("right-8");
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message to the chat
    setMessages([...messages, { type: "user", text: inputValue }]);

    try {
      // Call Gemini API to generate a response
      const response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GEMINI_API_KEY}`,
        },
        body: JSON.stringify({
          message: inputValue,
        }),
      });

      const data = await response.json();

      // Add bot response to the chat
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
    }

    // Clear input field
    setInputValue("");
  };

  return (
    <div className="overflow-hidden">
      {/* Scroll to Top Button */}
      <button
        aria-label="scroll-to-top"
        className={`fixed bottom-20 -right-full transition-all duration-500 shadow-2xl shadow-black text-gray-500 bg-white hover:bg-[#ececec] p-2 rounded`}
        onClick={scrollToTop}
        ref={arrow}
      >
        <NorthRoundedIcon />
      </button>

      {/* Chatbot Button */}
      <button
        aria-label="chatbot"
        className="fixed bottom-4 right-4 md:right-8 z-50 transition-all duration-500 shadow-2xl shadow-black text-gray-500 bg-white hover:bg-[#ececec] p-3 rounded-full"
        onClick={toggleChat}
      >
        {chatVisible ? <CloseIcon /> : <ChatIcon />}
      </button>

      {/* Chatbot Window */}
      {chatVisible && (
        <div className="fixed bottom-20 md:bottom-24 right-4 md:right-8 w-[90%] md:w-80 h-[70vh] md:h-96 bg-white shadow-2xl rounded-lg border border-gray-300 flex flex-col overflow-hidden z-50">
          {/* Chatbot Header with Icon */}
          <div className="bg-[#ececec] p-4 flex items-center justify-between border-b border-gray-300">
            <div className="flex items-center">
              <img
                src="/favicon.ico" // Replace with your logo's path
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

export default ScrollTop;
