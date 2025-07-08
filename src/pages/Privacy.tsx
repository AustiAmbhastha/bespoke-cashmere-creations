import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-8">
              Privacy Policy
            </h1>
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Information We Collect</h2>
                <p>We collect information you provide when commissioning bespoke pieces, including contact details, design preferences, and payment information. We also collect usage data to improve our services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">How We Use Your Information</h2>
                <p>Your information is used solely to fulfill your custom orders, provide customer service, and share updates about your commission. We never share personal information with third parties except as required for order fulfillment.</p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Data Security</h2>
                <p>We implement industry-standard security measures to protect your personal information. All payment processing is handled through secure, encrypted systems.</p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Your Rights</h2>
                <p>You have the right to access, update, or delete your personal information at any time. Contact us directly for any privacy-related requests.</p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Contact Us</h2>
                <p>For any questions about this privacy policy, please contact us at privacy@auracashmere.com or through our WhatsApp chat.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;