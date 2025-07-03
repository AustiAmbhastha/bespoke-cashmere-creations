import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const InspirationGallery = () => {
  const galleryImages = [
    "photo-1649972904349-6e44c42644a7",
    "photo-1581091226825-a6a2a5aee158", 
    "photo-1721322800607-8c38375eef04",
    "photo-1486312338219-ce68d2c6f44d",
    "photo-1526374965328-7f61d4dc18c5",
    "photo-1649972904349-6e44c42644a7",
    "photo-1581091226825-a6a2a5aee158",
    "photo-1721322800607-8c38375eef04"
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Inspiration Gallery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Browse through our past commissions and artistic inspirations. 
              Each piece tells a unique story of craftsmanship and personal vision.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="luxury-card border-0 overflow-hidden group cursor-pointer">
                <div className="aspect-square">
                  <img 
                    src={`https://images.unsplash.com/${image}?w=400&h=400&fit=crop&crop=center`}
                    alt={`Gallery piece ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InspirationGallery;