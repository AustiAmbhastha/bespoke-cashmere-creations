import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PersonalizedBabyClothes = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Personalized Baby Clothes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Dress your little one in personalized luxury. Our baby clothes collection features 
              the softest cashmere crafted into precious garments for precious moments.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="luxury-card border-0 overflow-hidden">
              <div className="aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=450&fit=crop&crop=center"
                  alt="Personalized baby clothes"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                Gentle Luxury
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each garment is designed with your baby's comfort in mind, featuring soft seams, 
                gentle fabrics, and thoughtful details that make dressing easy for parents.
              </p>
              <Button asChild className="luxury-button">
                <Link to="/inquiry">Design Baby Clothes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalizedBabyClothes;