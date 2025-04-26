import { useState } from 'react';
import { FaCopy, FaSyncAlt } from 'react-icons/fa';

const quotes = [
  "Believe you can and you're halfway there.",
  "Dream big and dare to fail.",
  "Stay hungry, stay foolish.",
  "The best way to get started is to quit talking and begin doing.",
];

export default function QuoteCard() {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote);
    alert("Quote copied!");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md text-center space-y-4 transition-all duration-300">
      <p className="text-xl font-semibold">{quote}</p>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={getNewQuote} className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
          <FaSyncAlt />
        </button>
        <button onClick={copyToClipboard} className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full">
          <FaCopy />
        </button>
      </div>
    </div>
  );
}
