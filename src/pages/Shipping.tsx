import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-8">
              Shipping & Timelines
            </h1>
            <div className="space-y-8">
              {/* Overview */}
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">We ship worldwide with full insurance and tracking for all our bespoke pieces.</p>
                <p className="text-muted-foreground">Each creation is carefully packaged in luxury presentation boxes to ensure your piece arrives in perfect condition.</p>
              </div>

              {/* Creation Timeline */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-semibold text-primary">Creation Timeline</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 border border-border rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Design Phase</h3>
                    <p className="text-sm text-muted-foreground">1-2 weeks for consultation, design approval, and material selection</p>
                  </div>
                  <div className="p-6 border border-border rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Creation</h3>
                    <p className="text-sm text-muted-foreground">3-4 weeks for handcrafting, embroidery, and finishing touches</p>
                  </div>
                  <div className="p-6 border border-border rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Delivery</h3>
                    <p className="text-sm text-muted-foreground">3-7 business days depending on your location worldwide</p>
                  </div>
                </div>
              </div>

              {/* Shipping Options */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-semibold text-primary">Shipping Options</h2>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">Standard International Shipping</h3>
                    <p className="text-muted-foreground text-sm mb-2">5-7 business days • Fully insured • Tracking included</p>
                    <p className="text-muted-foreground text-sm">Complimentary for orders over $500</p>
                  </div>
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">Express Shipping</h3>
                    <p className="text-muted-foreground text-sm mb-2">2-3 business days • Fully insured • Priority handling</p>
                    <p className="text-muted-foreground text-sm">Available for urgent requirements</p>
                  </div>
                </div>
              </div>

              {/* Packaging */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-semibold text-primary">Luxury Packaging</h2>
                <p className="text-muted-foreground">Each piece is presented in our signature presentation box with tissue paper, care instructions, and authenticity certificate. Perfect for gifting or safekeeping.</p>
              </div>

              {/* International */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-semibold text-primary">International Customers</h2>
                <p className="text-muted-foreground">We handle all customs documentation. Please note that import duties and taxes may apply depending on your country's regulations. These are the responsibility of the recipient.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shipping;