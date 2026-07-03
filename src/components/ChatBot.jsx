import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiUser } from 'react-icons/fi';
import { TbRobot } from "react-icons/tb";
import { getBotResponse } from '../data/chatbotKnowledge';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Akhil's AI assistant. Ask me about his work, skills, or services in your own language! 👋", isBot: true, time: new Date() }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: inputValue, isBot: false, time: new Date() }];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay before bot responds
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages((prev) => [...prev, { text: botResponse, isBot: true, time: new Date() }]);
      setIsTyping(false);
    }, 1200);
  };

  const formatTime = (date) => {
    if (!date) return "";
    return new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).format(date);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-[300px] sm:w-[340px] h-[420px] max-h-[75vh] rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] bg-[#1a1d24]/95 border border-[#2e323b] flex flex-col backdrop-blur-xl ring-1 ring-white/5"
          >
            {/* Header */}
            <div className="p-3.5 flex justify-between items-start border-b border-[#2e323b]/80 bg-gradient-to-b from-[#252830]/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-[#0f1115] shadow-lg shadow-emerald-500/20">
                    <TbRobot size={22} strokeWidth={2} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#1a1d24] rounded-full"></span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-slate-100 text-[14px] tracking-wide leading-tight">AI Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[11px] text-emerald-400 font-medium uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={toggleChat}
                className="text-slate-400 hover:text-white hover:bg-white/5 transition-all p-1.5 rounded-lg"
              >
                <FiX size={16} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx}
                  className={`flex flex-col ${msg.isBot ? "items-start" : "items-end"}`}
                >
                  <div className={`flex items-end gap-2 max-w-[85%] ${msg.isBot ? "flex-row" : "flex-row-reverse"}`}>
                    
                    {/* Bot Icon */}
                    {msg.isBot && (
                      <div className="w-6 h-6 rounded-full border border-[#2e323b] bg-[#252830] flex items-center justify-center text-emerald-500 flex-shrink-0 mb-0.5 shadow-sm">
                        <TbRobot size={14} />
                      </div>
                    )}
                    
                    {/* User Icon */}
                    {!msg.isBot && (
                      <div className="w-6 h-6 rounded-full border border-[#2e323b] bg-[#252830] flex items-center justify-center text-slate-400 flex-shrink-0 mb-0.5 shadow-sm">
                        <FiUser size={12} />
                      </div>
                    )}

                    <div 
                      className={`p-3 text-[13.5px] leading-relaxed shadow-sm ${
                        msg.isBot 
                          ? "bg-[#252830] text-slate-200 rounded-2xl rounded-tl-sm border border-[#2e323b]/50" 
                          : "bg-gradient-to-br from-emerald-500 to-emerald-600 text-[#0f1115] font-medium rounded-2xl rounded-tr-sm shadow-[0_4px_14px_0_rgba(16,185,129,0.2)]"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  {/* Timestamp */}
                  {msg.time && (
                    <span className={`text-[10px] text-slate-500 mt-1 px-8 ${msg.isBot ? "self-start" : "self-end"}`}>
                      {formatTime(msg.time)}
                    </span>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-end gap-2 max-w-[85%]"
                >
                  <div className="w-6 h-6 rounded-full border border-[#2e323b] bg-[#252830] flex items-center justify-center text-emerald-500 flex-shrink-0 mb-0.5 shadow-sm">
                    <TbRobot size={14} />
                  </div>
                  <div className="bg-[#252830] p-3.5 rounded-2xl rounded-tl-sm border border-[#2e323b]/50 flex items-center gap-1.5">
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full"></motion.div>
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full"></motion.div>
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full"></motion.div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-[#2e323b]/80 bg-[#1a1d24]">
              <form onSubmit={handleSendMessage} className="relative flex items-center group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-[#252830] text-slate-200 text-[13px] rounded-xl py-2.5 pl-4 pr-12 border border-[#2e323b] focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 placeholder-slate-500 transition-all shadow-inner"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-1.5 p-1.5 bg-emerald-500 hover:bg-emerald-400 text-[#0f1115] rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md active:scale-95"
                >
                  <FiSend size={16} className="-ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="w-12 h-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] flex items-center justify-center text-[#0f1115] bg-gradient-to-br from-emerald-400 to-emerald-600 hover:shadow-emerald-500/30 transition-all relative overflow-hidden"
      >
        {isOpen ? <FiX size={22} /> : <FiMessageSquare size={20} className="fill-current" />}
        
        {/* Notification Dot */}
        {!isOpen && (
          <span className="absolute top-2.5 right-2.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white border-2 border-emerald-500"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
