import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import ContactInformation from "@/components/order/ContactInformation";
import ProductSelection from "@/components/order/ProductSelection";
import DesignPreferences from "@/components/order/DesignPreferences";
import OrderTimeline from "@/components/order/OrderTimeline";
import OrderSummary from "@/components/order/OrderSummary";
import { useOrderForm } from "@/hooks/useOrderForm";
import { useCurrency } from "@/contexts/CurrencyContext";

const CustomInquiry = () => {
  const { formData, handleSubmit, isSubmitting } = useOrderForm();
  const { formatPrice } = useCurrency();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    
    try {
      await handleSubmit(formDataObj);
      // Redirect to payment or success page
    } catch (error) {
      // Error handling is done in the hook
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
                  Begin Your Bespoke Journey
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Begin your bespoke cashmere journey with a <span className="font-semibold text-primary">{formatPrice(50)} deposit</span>. 
                  Choose hand-embroidery, machine embroidery, or both—including beloved pet portraits or custom artwork. 
                  We'll send your personalized estimate within 24 hours.
                </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <Card className="luxury-card border-0">
                  <CardContent className="p-8 md:p-12">
                    <form onSubmit={onSubmit} className="space-y-8">
                      <ContactInformation />
                      <ProductSelection />
                      <DesignPreferences />
                      
                      {/* Your Vision */}
                      <div className="space-y-6">
                        <h2 className="text-2xl font-playfair font-semibold text-primary">
                          Your Vision
                        </h2>
                        
                        <div className="space-y-2">
                          <Label htmlFor="inspiration">Design Inspiration</Label>
                          <Textarea 
                            id="inspiration" 
                            name="inspiration"
                            placeholder="Describe your vision, inspiration, or any specific requirements. What story should this piece tell?"
                            className="min-h-32"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="occasion">Occasion or Purpose</Label>
                          <input 
                            id="occasion" 
                            name="occasion"
                            placeholder="e.g., Wedding gift, baby shower, personal luxury item..."
                            className="h-12 w-full px-3 py-2 border border-input bg-background rounded-md"
                          />
                        </div>
                      </div>
                      
                      <OrderTimeline />

                      {/* Additional Information */}
                      <div className="space-y-6">
                        <h2 className="text-2xl font-playfair font-semibold text-primary">
                          Additional Information
                        </h2>
                        
                        <div className="space-y-2">
                          <Label htmlFor="additionalNotes">Additional Notes</Label>
                          <Textarea 
                            id="additionalNotes" 
                            name="additionalNotes"
                            placeholder="Any other details, questions, or special requests..."
                            className="min-h-24"
                          />
                        </div>
                        
                        <div className="space-y-4">
                          <Label>Preferences</Label>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="newsletter" name="newsletter" />
                              <Label htmlFor="newsletter" className="text-sm">
                                Subscribe to our newsletter for updates and exclusive insights
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="process-updates" name="processUpdates" />
                              <Label htmlFor="process-updates" className="text-sm">
                                Receive progress updates during the creation process
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="luxury-button px-12 py-4 text-lg"
                          >
                            {isSubmitting ? "Processing..." : `Submit & Pay ${formatPrice(50)} Deposit`}
                          </Button>
                          <WhatsAppButton 
                            phoneNumber="+919718807399" 
                            message="Hello! I have questions about placing a bespoke cashmere order."
                            className="px-12 py-4 text-lg"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          After submitting, you'll be redirected to secure payment for your {formatPrice(50)} deposit. 
                          We'll send your personalized estimate within 24 hours.
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <OrderSummary formData={formData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-24 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6">
              What Happens Next?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Personal Consultation",
                description: "We'll contact you within 24 hours to discuss your vision and requirements in detail."
              },
              {
                step: "2", 
                title: "Design & Quote",
                description: "Receive a comprehensive proposal with designs, materials, and pricing for your approval."
              },
              {
                step: "3",
                title: "Handcrafted Creation",
                description: "Our artisans begin crafting your bespoke piece with regular progress updates."
              }
            ].map((step, index) => (
              <Card key={index} className="luxury-card border-0 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomInquiry;