
import React from 'react';

const WhatsAppButton = () => {
  const whatsappNumber = "5511999907739";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de marketing estratégico.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] p-3.5 rounded-full shadow-lg z-50 hover:scale-110 transition-transform duration-300"
      aria-label="Contato via WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.75 15.94C16.38 17.19 14.32 17.59 13.23 17.29C12.14 16.99 10.05 16.17 8.56 14.69C7.07 13.21 6.19 11.29 5.89 10.2C5.59 9.11 6.14 6.9 7.39 6.53C7.86 6.4 8.59 6.36 8.83 6.88C9.08 7.4 9.72 8.7 9.79 8.89C9.86 9.07 9.8 9.35 9.65 9.56C9.5 9.78 9.16 10.12 8.97 10.35C8.77 10.58 8.56 10.83 8.8 11.21C9.04 11.59 9.7 12.88 10.86 13.9C12.02 14.92 12.94 15.3 13.39 15.48C13.85 15.65 14.09 15.61 14.31 15.36C14.53 15.11 15.12 14.41 15.37 13.95C15.63 13.5 15.91 13.57 16.28 13.69C16.65 13.81 18.11 14.53 18.52 14.74C18.93 14.95 19.19 15.05 19.26 15.23C19.33 15.42 19.33 16.16 18.95 16.94L16.75 15.94Z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
