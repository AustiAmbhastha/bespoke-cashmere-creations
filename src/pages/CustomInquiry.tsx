import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const CustomInquiry = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "We'll contact you within 24 hours to begin your bespoke journey.",
    });
    
    setIsSubmitting(false);
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
                  Begin your bespoke cashmere journey with a <span className="font-semibold text-primary">US $50 deposit</span>. 
                  Choose hand-embroidery, machine embroidery, or both—including beloved pet portraits or custom artwork. 
                  We'll send your personalized estimate within 24 hours.
                </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card border-0">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-playfair font-semibold text-primary">
                      Contact Information
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required className="h-12" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" className="h-12" />
                      </div>
                    </div>
                  </div>

                  {/* Product Selection */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-playfair font-semibold text-primary">
                      Product Selection
                    </h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="productType">Product Type *</Label>
                      <Select required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select the type of item you'd like to commission" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bespoke-shawl">Bespoke Shawl</SelectItem>
                          <SelectItem value="baby-blanket">Custom Baby Blanket</SelectItem>
                          <SelectItem value="baby-clothes">Personalized Baby Clothes</SelectItem>
                          <SelectItem value="custom-request">Custom Request (Please specify)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Design Preferences */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-playfair font-semibold text-primary">
                      Design Preferences
                    </h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="colorPreferences">Color Preferences</Label>
                      <Input 
                        id="colorPreferences" 
                        placeholder="e.g., Soft ivory, dusty rose, sage green..."
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="sizeRequirements">Size Requirements</Label>
                      <Input 
                        id="sizeRequirements" 
                        placeholder="e.g., Standard adult shawl, newborn blanket 30x40..."
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="personalization">Personalization & Embroidery Details</Label>
                      <Textarea 
                        id="personalization" 
                        placeholder="Hand embroidery, machine embroidery, or both? Include details about beloved pets, family crests, names, dates, or custom artwork you'd like featured..."
                        className="min-h-32"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="embroideryType">Embroidery Preference</Label>
                      <Select>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your preferred embroidery style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hand-embroidery">Hand Embroidery (Traditional Craftsmanship)</SelectItem>
                          <SelectItem value="machine-embroidery">Machine Embroidery (Precise Details)</SelectItem>
                          <SelectItem value="both">Both Hand & Machine Embroidery</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Inspiration & Vision */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-playfair font-semibold text-primary">
                      Your Vision
                    </h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="inspiration">Design Inspiration</Label>
                      <Textarea 
                        id="inspiration" 
                        placeholder="Describe your vision, inspiration, or any specific requirements. What story should this piece tell?"
                        className="min-h-32"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="occasion">Occasion or Purpose</Label>
                      <Input 
                        id="occasion" 
                        placeholder="e.g., Wedding gift, baby shower, personal luxury item..."
                        className="h-12"
                      />
                    </div>
                  </div>

                  {/* Timeline & Budget */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-playfair font-semibold text-primary">
                      Timeline & Investment
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Desired Completion Date</Label>
                        <Input id="timeline" type="date" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select your investment range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="200-400">$200 - $400</SelectItem>
                            <SelectItem value="400-600">$400 - $600</SelectItem>
                            <SelectItem value="600-900">$600 - $900</SelectItem>
                            <SelectItem value="900-1200">$900 - $1,200</SelectItem>
                            <SelectItem value="discuss">Prefer to discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-playfair font-semibold text-primary">
                      Additional Information
                    </h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalNotes">Additional Notes</Label>
                      <Textarea 
                        id="additionalNotes" 
                        placeholder="Any other details, questions, or special requests..."
                        className="min-h-24"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <Label>Preferences</Label>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="newsletter" />
                          <Label htmlFor="newsletter" className="text-sm">
                            Subscribe to our newsletter for updates and exclusive insights
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="process-updates" />
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
                        {isSubmitting ? "Processing..." : "Submit & Pay $50 Deposit"}
                      </Button>
                      <WhatsAppButton 
                        phoneNumber="+919718807399" 
                        message="Hello! I have questions about placing a bespoke cashmere order."
                        className="px-12 py-4 text-lg"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      After submitting, you'll be redirected to secure Stripe payment for your $50 deposit. 
                      We'll send your personalized estimate within 24 hours.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
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