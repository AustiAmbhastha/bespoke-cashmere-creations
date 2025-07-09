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
            <div className="space-y-8 text-muted-foreground">
              <p className="text-lg">
                At Cloudspun Cashmere, we respect your privacy and are committed to protecting your personal information.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Information We Collect</h2>
                  <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include your name, email address, shipping address, phone number, and payment information.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">How We Use Your Information</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To process and fulfill your bespoke orders</li>
                    <li>To communicate with you about your orders and our services</li>
                    <li>To provide customer support</li>
                    <li>To send you marketing communications (with your consent)</li>
                    <li>To improve our products and services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Information Sharing</h2>
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Data Security</h2>
                  <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Your Rights</h2>
                  <p>You have the right to access, update, or delete your personal information. You may also opt out of receiving marketing communications from us at any time.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, please contact us at privacy@cloudspuncashmere.com or through our contact page.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;