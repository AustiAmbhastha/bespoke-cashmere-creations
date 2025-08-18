import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useContactForm, ContactFormData } from "@/hooks/useContactForm";

const Contact = () => {
  const { handleSubmit, isSubmitting } = useContactForm();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handleSubmit(formData);
    if (success) {
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ready to begin your bespoke journey? We'd love to hear from you. 
              Let's discuss your vision and create something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're ready to commission a bespoke piece or have questions about our process, 
                  we're here to help. Every conversation begins a new creative journey.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    detail: "hello@auracashmere.com",
                    description: "Send us your inquiry anytime. We respond within 24 hours."
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    detail: "+1 (555) 123-4567",
                    description: "Speak directly with our design consultants."
                  },
                  {
                    icon: MapPin,
                    title: "Visit Our Atelier",
                    detail: "123 Artisan Lane, Creative District",
                    description: "By appointment only. Experience our craft firsthand."
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    detail: "Monday - Friday: 9:00 AM - 6:00 PM EST",
                    description: "Weekend consultations available by appointment."
                  }
                ].map((contact, index) => (
                  <Card key={index} className="luxury-card border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <contact.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-playfair font-semibold text-primary">
                            {contact.title}
                          </h3>
                          <p className="font-medium text-foreground">
                            {contact.detail}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="pt-6">
                <Button asChild className="luxury-button">
                  <Link to="/inquiry">Start Your Custom Inquiry</Link>
                </Button>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="space-y-8">
              <Card className="luxury-card border-0">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-playfair font-semibold text-primary">
                      Quick Contact
                    </h3>
                    <p className="text-muted-foreground">
                      Have a quick question? Send us a message and we'll get back to you soon.
                    </p>
                    
                    <form onSubmit={onSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      
                      <div>
                        <textarea
                          placeholder="Your Message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="luxury-button w-full"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
              
              {/* FAQ Preview */}
              <Card className="luxury-card border-0 bg-soft-gradient">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-playfair font-semibold text-primary">
                      Frequently Asked Questions
                    </h3>
                    <p className="text-muted-foreground">
                      Find answers to common questions about our bespoke process, 
                      timelines, and custom creations.
                    </p>
                    <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/faq">View All FAQs</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Reminder */}
      <section className="py-24 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Ready to Begin?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your bespoke creation is just a conversation away. Let's discuss your vision 
              and bring your dream piece to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Contact Us",
                description: "Reach out via phone, email, or our inquiry form to start the conversation."
              },
              {
                step: "2",
                title: "Consultation",
                description: "We'll discuss your vision, preferences, and create a detailed proposal."
              },
              {
                step: "3",
                title: "Creation Begins",
                description: "Once approved, our artisans begin handcrafting your bespoke piece."
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
          
          <div className="text-center mt-12">
            <Button asChild className="luxury-button">
              <Link to="/inquiry">Start Your Custom Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;