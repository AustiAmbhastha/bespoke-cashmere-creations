import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hello! I'm interested in your bespoke cashmere services.",
  className 
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`luxury-button bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      size="lg"
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      Chat on WhatsApp
    </Button>
  );
};

export default WhatsAppButton;