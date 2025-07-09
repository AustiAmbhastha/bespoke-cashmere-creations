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
            <div className="space-y-8 text-muted-foreground">
              <p className="text-lg">
                We stand behind the quality of our bespoke cashmere pieces and want you to be completely satisfied with your purchase.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Bespoke Items</h2>
                  <p>Due to the custom nature of our bespoke pieces, all sales are final. Each item is individually crafted to your specifications and cannot be resold. However, if there is a manufacturing defect or the item does not match your approved design, we will work with you to make it right.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Quality Guarantee</h2>
                  <p>If your item arrives with a manufacturing defect or damage during shipping, please contact us within 7 days of delivery. We will arrange for repair, replacement, or refund at no cost to you.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Design Approval Process</h2>
                  <p>To ensure your complete satisfaction, we provide detailed mockups and require your approval before beginning production. Once you approve the design, changes cannot be made, and the order cannot be cancelled.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Cancellation Policy</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Orders can be cancelled within 24 hours of placement for a full refund</li>
                    <li>Orders cancelled after design approval but before production begins may incur a 25% cancellation fee</li>
                    <li>Orders cannot be cancelled once production has begun</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Exceptional Circumstances</h2>
                  <p>We understand that exceptional circumstances may arise. If you have concerns about your order, please contact us directly. We will work with you to find a fair solution.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Contact Us</h2>
                  <p>For any questions about returns or refunds, please contact us at orders@cloudspuncashmere.com or through our contact page. We typically respond within 24 hours.</p>
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

export default ReturnRefund;