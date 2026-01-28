import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '+21653490237';
  const message = 'Hello Mohamed! I would like to discuss a project with you.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />

        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </button>

      {isHovered && (
        <div className="absolute bottom-20 right-0 bg-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap animate-fade-in">
          <p className="text-sm font-medium text-gray-900">Chat on WhatsApp</p>
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </div>
      )}

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
