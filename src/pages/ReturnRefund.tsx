import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ReturnRefund = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-8">
              Return & Refund Policy
            </h1>
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Bespoke Nature of Our Products</h2>
                <p>All Aura Cashmere pieces are custom-made to your specifications. Due to the bespoke nature of our creations, we work closely with you throughout the design and approval process to ensure complete satisfaction before final production.</p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Quality Assurance</h2>
                <p>We provide progress photos and detailed consultations during the creation process. Any adjustments or modifications can be made before the final 50% payment to ensure your piece meets your exact vision.</p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Rare Return Circumstances</h2>
                <p>In the unlikely event of a manufacturing defect or significant deviation from approved specifications, we will remake your piece at no additional cost. Returns are evaluated on a case-by-case basis.</p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Damaged in Transit</h2>
                <p>All pieces are fully insured during shipping. If your item arrives damaged, contact us within 48 hours with photos for immediate replacement or repair at no cost to you.</p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Exchange Policy</h2>
                <p>Due to the personalized nature of our embroidery and custom sizing, exchanges are not typically possible. However, we offer complimentary minor alterations within 30 days of delivery.</p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Contact for Concerns</h2>
                <p>If you have any concerns about your piece, please contact us immediately. Our artisan team is committed to your complete satisfaction and will work with you to resolve any issues.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReturnRefund;