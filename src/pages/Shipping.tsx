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
            <div className="space-y-6 text-muted-foreground">
              <p>We ship worldwide with full insurance and tracking for all our bespoke pieces.</p>
              <p>Typical creation time is 4-6 weeks, with shipping taking an additional 3-7 business days depending on location.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shipping;