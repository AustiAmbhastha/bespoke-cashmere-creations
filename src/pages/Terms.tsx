import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-8">
              Terms of Service
            </h1>
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">1. Bespoke Commission Agreement</h2>
                <p>All custom creations are made to order based on your specific requirements. Each piece is handcrafted by our master artisans using premium Mongolian cashmere.</p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">2. Payment Terms</h2>
                <p>A 50% deposit is required to begin your commission. The remaining balance is due upon completion and final approval. We accept major credit cards and bank transfers.</p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">3. Timeline & Delivery</h2>
                <p>Standard production time is 4-6 weeks from deposit confirmation. Rush orders may be available for an additional fee. International shipping is fully insured and tracked.</p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">4. Quality Guarantee</h2>
                <p>We guarantee the highest quality materials and craftsmanship. Minor adjustments can be made before final payment to ensure your complete satisfaction.</p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">5. Care Instructions</h2>
                <p>All pieces come with detailed care instructions to preserve their beauty for generations. Professional cleaning is recommended for best results.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;