import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export interface OrderFormData {
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Product Selection
  productType: string;
  
  // Design Preferences
  colorPreferences: string;
  sizeRequirements: string;
  personalization: string;
  embroideryType: string;
  
  // Vision
  inspiration: string;
  occasion: string;
  
  // Timeline & Budget
  timeline: string;
  budget: string;
  
  // Additional
  additionalNotes: string;
  newsletter: boolean;
  processUpdates: boolean;
}

export const useOrderForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<OrderFormData>>({});
  
  const updateFormData = (field: keyof OrderFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Convert FormData to OrderFormData
      const orderData: Partial<OrderFormData> = {};
      for (const [key, value] of data.entries()) {
        if (key === 'newsletter' || key === 'processUpdates') {
          (orderData as any)[key] = value === 'on';
        } else {
          (orderData as any)[key] = value as string;
        }
      }
      
      // Simulate API call - replace with actual order submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store order data locally for now
      const orderId = `ORDER-${Date.now()}`;
      const orderWithId = { 
        id: orderId, 
        ...orderData, 
        status: 'pending',
        createdAt: new Date().toISOString(),
        depositAmount: 50
      };
      
      localStorage.setItem(`order-${orderId}`, JSON.stringify(orderWithId));
      
      toast({
        title: "Order Submitted Successfully!",
        description: `Order ${orderId} created. We'll contact you within 24 hours.`,
      });
      
      return orderId;
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return {
    formData,
    updateFormData,
    handleSubmit,
    isSubmitting
  };
};