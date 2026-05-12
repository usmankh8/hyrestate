import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  const phoneNumber = '+923286987365';
  
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber.replace('+', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40"
    >
      <MessageCircle className="text-white w-8 h-8 fill-current" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </motion.a>
  );
}
