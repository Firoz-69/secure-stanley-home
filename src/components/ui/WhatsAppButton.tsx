import { FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon

export const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open("https://web.whatsapp.com", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition-transform transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="font-medium">Chat</span>
    </button>
  );
};
