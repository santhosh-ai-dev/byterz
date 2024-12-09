"use client";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

const ChatBot = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [chatButtonVisible, setChatButtonVisible] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Welcome! How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const GEMINI_API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA24FQxCGq-bF5vxTw-4dfjIQTKdPH22EI";

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 200) {
        setChatButtonVisible(true);
      } else {
        setChatButtonVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message to the chat
    setMessages((prev) => [...prev, { type: "user", text: inputValue }]);

    try {
      // API Call
      const response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: inputValue, // Assuming the API accepts 'prompt'
        }),
      });

      const data = await response.json();

      // Add bot response to the chat
      if (data && data.choices && data.choices[0].message) {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: data.choices[0].message.content },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: "Sorry, I couldn't process that." },
        ]);
      }
    } catch (error) {
      console.error("Error with Gemini API:", error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "An error occurred. Please try again later." },
      ]);
    }

    // Clear input field
    setInputValue("");
  };

  return (
    <div className="overflow-hidden">
      {/* Chatbot Button */}
      <button
  aria-label="chatbot"
  className={`fixed bottom-4 right-4 md:right-8 z-50 transition-all duration-500 shadow-2xl shadow-black text-gray-500 bg-white hover:bg-[#ececec] p-3 rounded-full ${
    chatButtonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
  onClick={toggleChat}
  style={{ pointerEvents: chatButtonVisible ? "auto" : "none" }}
>
  {chatVisible ? (
    <CloseIcon /> // Existing close icon logic
  ) : (
    <img
      src="/chatbot_17115944.png" // Path to your uploaded image
      alt="Chatbot"
      className="w-10 h-10 object-contain" // Ensure the image fits properly
    />
  )}
</button>



      {/* Chatbot Window */}
      {chatVisible && (
        <div className="fixed bottom-20 md:bottom-24 right-4 md:right-8 w-[90%] md:w-80 h-[70vh] md:h-96 bg-white shadow-2xl rounded-lg border border-gray-300 flex flex-col overflow-hidden z-50">
          {/* Chatbot Header with Icon */}
          <div className="bg-[#ececec] p-4 flex items-center justify-between border-b border-gray-300">
            <div className="flex items-center">
              <img
                src="/favicon.ico"
                alt="Chatbot Logo"
                className="w-8 h-8 rounded-full mr-2"
                onError={(e) => (e.target.style.display = "none")} // Hide if not found
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

export default ChatBot;
