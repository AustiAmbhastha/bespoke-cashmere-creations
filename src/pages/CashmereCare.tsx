import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CashmereCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-8">
              Cashmere Care Guide
            </h1>
            <div className="space-y-6 text-muted-foreground">
              <p>Proper care ensures your bespoke cashmere piece will last for generations.</p>
              <p>We provide detailed care instructions with every piece, including washing, storing, and maintenance tips.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CashmereCare;