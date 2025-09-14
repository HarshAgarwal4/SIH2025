import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";
import axios from "../services/axios";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "model", parts: [{ text: "Hi! How can I help you today?" }] },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // typing indicator
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user", parts: [{ text: input }] };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Add temporary "typing..." message
    const typingMessage = { role: "model", parts: [{ text: "Typing..." }] };
    setMessages((prev) => [...prev, typingMessage]);

    const obj = { history: [...messages, userMessage], msg: input };

    try {
      const response = await axios.post("/chat", obj);

      // Remove "Typing..." message
      setTimeout(() => {
          setMessages((prev) =>
            prev.filter((msg) => msg.parts[0].text !== "Typing...")
          );
      }, 1000)

      // Add bot response
      const modelMessage = {
        role: "model",
        parts: Array.isArray(response.data.parts)
          ? response.data.parts
          : [{ text: response.data.response }],
      };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Chat API error:", error);

      // Remove "Typing..." message
      setMessages((prev) =>
        prev.filter((msg) => msg.parts[0].text !== "Typing...")
      );

      // Show error message
      setMessages((prev) => [
        ...prev,
        { role: "model", parts: [{ text: "Sorry, something went wrong." }] },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="fixed bottom-4 right-4">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {open && (
        <div className="w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col animate-fade-in">
          <div className="flex justify-between items-center p-3 bg-blue-600 text-white rounded-t-xl">
            <h3 className="text-lg font-semibold">Chatbot</h3>
            <button onClick={() => setOpen(false)} className="hover:text-gray-200 transition">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[70%] ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-gray-800 self-start"
                }`}
              >
                {msg.parts.map((part, idx) => (
                  <span key={idx}>{part.text}</span>
                ))}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 flex border-t">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              className="flex-1 border rounded-lg p-2 mr-2 focus:outline-none resize-none"
              placeholder="Type a message..."
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition disabled:opacity-50"
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
