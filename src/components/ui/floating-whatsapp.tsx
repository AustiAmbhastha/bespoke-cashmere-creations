import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
}

const FloatingWhatsApp = ({ 
  phoneNumber, 
  message = "Hello! I'm interested in your bespoke cashmere services."
}: FloatingWhatsAppProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse hover:animate-none p-0"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};

export default FloatingWhatsApp;