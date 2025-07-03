import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const OurCreations = () => {
  const creations = [
    {
      title: "Bespoke Shawls",
      description: "Luxurious shawls tailored to your individual style and preferences. Each piece is crafted with the finest cashmere and personalized details.",
      image: "photo-1581091226825-a6a2a5aee158",
      link: "/creations/shawls",
      features: ["Custom Colors", "Personalized Embroidery", "Choice of Patterns", "Premium Cashmere"]
    },
    {
      title: "Custom Baby Blankets",
      description: "Gentle, cloud-soft blankets that provide comfort and warmth for life's most precious moments. Perfect for gifting or treasuring.",
      image: "photo-1721322800607-8c38375eef04",
      link: "/creations/baby-blankets",
      features: ["Ultra-Soft Cashmere", "Custom Sizing", "Personalized Names", "Gift Packaging"]
    },
    {
      title: "Personalized Baby Clothes",
      description: "Exquisite garments for precious little ones, crafted with love and attention to the finest details for ultimate comfort.",
      image: "photo-1486312338219-ce68d2c6f44d",
      link: "/creations/baby-clothes",
      features: ["Gentle Materials", "Custom Fit", "Embroidered Details", "Heirloom Quality"]
    }
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
              Our Creations
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover our collection of bespoke cashmere pieces. Each creation is a unique expression 
              of luxury, crafted entirely to your specifications with uncompromising attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Creations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {creations.map((creation, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                      {creation.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {creation.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {creation.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="luxury-button">
                      <Link to={creation.link}>Explore {creation.title}</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/inquiry">Customize This Design</Link>
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="luxury-card border-0 overflow-hidden">
                    <div className="aspect-[4/3]">
                      <img 
                        src={`https://images.unsplash.com/${creation.image}?w=600&h=450&fit=crop&crop=center`}
                        alt={creation.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Gallery Preview */}
      <section className="py-24 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Inspiration Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our past commissions and artistic inspirations. Every piece tells a unique story.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "photo-1649972904349-6e44c42644a7",
              "photo-1581091226825-a6a2a5aee158", 
              "photo-1721322800607-8c38375eef04",
              "photo-1486312338219-ce68d2c6f44d",
              "photo-1526374965328-7f61d4dc18c5",
              "photo-1649972904349-6e44c42644a7"
            ].map((image, index) => (
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
          
          <div className="text-center">
            <Button asChild className="luxury-button">
              <Link to="/creations/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold">
              Ready to Begin Your Custom Creation?
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Each piece is crafted specifically for you. Share your vision with us and let's create 
              something extraordinary together.
            </p>
            <Button asChild variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg">
              <Link to="/inquiry">Start Your Custom Order</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurCreations;