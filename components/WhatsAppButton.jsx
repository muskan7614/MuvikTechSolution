'use client';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const whatsappNumber = "918252911976";
  const message = "Hi Muvik! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={28} />
      
      {/* Pulse animation */}
      <span className="absolute -top-1 -right-1 h-6 w-6 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
        !
      </span>
    </motion.a>
  );
}