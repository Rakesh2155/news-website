import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { useNews } from '../context/NewsContext';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'Hello! I am your AI news assistant. Ask me about the latest news or any specific topic you\'re interested in.', isUser: false },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { state } = useNews();

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, isUser: true }]);
    
    // Process the query and generate a response
    const userQuery = input.toLowerCase();
    setInput('');
    
    setTimeout(() => {
      let response = '';
      
      // Simple keyword matching for demo purposes
      // In a real app, this would be connected to a proper NLP service
      if (userQuery.includes('latest') || userQuery.includes('recent') || userQuery.includes('news')) {
        const latestArticle = state.articles[0];
        if (latestArticle) {
          response = `The latest news is: "${latestArticle.title}". Would you like to know more about this?`;
        } else {
          response = "I don't have the latest news at the moment. Please try again later.";
        }
      } else if (userQuery.includes('politics') || userQuery.includes('government') || userQuery.includes('election')) {
        const politicsArticle = state.articles.find(a => a.category === 'politics');
        if (politicsArticle) {
          response = `Here's a politics update: "${politicsArticle.title}". ${politicsArticle.aiSummary}`;
        } else {
          response = "I don't have any politics news at the moment. Please try a different topic.";
        }
      } else if (userQuery.includes('business') || userQuery.includes('economy') || userQuery.includes('market')) {
        const businessArticle = state.articles.find(a => a.category === 'business');
        if (businessArticle) {
          response = `Here's a business update: "${businessArticle.title}". ${businessArticle.aiSummary}`;
        } else {
          response = "I don't have any business news at the moment. Please try a different topic.";
        }
      } else if (userQuery.includes('sports') || userQuery.includes('cricket') || userQuery.includes('game')) {
        const sportsArticle = state.articles.find(a => a.category === 'sports');
        if (sportsArticle) {
          response = `Here's a sports update: "${sportsArticle.title}". ${sportsArticle.aiSummary}`;
        } else {
          response = "I don't have any sports news at the moment. Please try a different topic.";
        }
      } else if (userQuery.includes('trending') || userQuery.includes('popular')) {
        if (state.trending.length > 0) {
          const trendingArticle = state.trending[0];
          response = `Here's what's trending: "${trendingArticle.title}". ${trendingArticle.aiSummary}`;
        } else {
          response = "I don't have trending news at the moment. Please try again later.";
        }
      } else {
        response = "I'm not sure about that. You can ask me about the latest news, politics, business, sports, or trending topics.";
      }
      
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chatbot window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col max-h-[500px]">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">BharatNews Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto max-h-80">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 ${
                  message.isUser ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t p-3 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about the latest news..."
              className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-2 rounded-r-lg hover:bg-blue-700"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;