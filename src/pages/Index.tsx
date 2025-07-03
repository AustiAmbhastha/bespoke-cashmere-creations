import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-luxury-gradient">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-primary leading-tight">
                  Your Vision,
                  <br />
                  <span className="text-muted-foreground">Our Craft</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Experience the luxury of bespoke cashmere. Each piece is meticulously handcrafted 
                  to your unique specifications, creating timeless heirlooms that tell your story.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="luxury-button text-lg px-8 py-6">
                  <Link to="/inquiry">Begin Your Custom Design</Link>
                </Button>
                <Button variant="outline" asChild className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg">
                  <Link to="/process">Discover Our Process</Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex flex-col">
                  <span className="font-semibold text-primary">4-6 Weeks</span>
                  <span>Crafting Time</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-primary">100%</span>
                  <span>Custom Made</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-primary">Worldwide</span>
                  <span>Shipping</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-soft-gradient shadow-luxury overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop&crop=center"
                  alt="Luxurious cashmere crafting process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Bespoke Process Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6">
              The Bespoke Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every creation begins with your vision and evolves through our meticulous four-step process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Inquiry & Consultation",
                description: "Share your vision through our detailed inquiry form and receive personalized guidance"
              },
              {
                step: "02", 
                title: "Design & Quote",
                description: "Receive your custom design proposal and secure your creation with a 50% deposit"
              },
              {
                step: "03",
                title: "Creation & Craftsmanship", 
                description: "Our artisans handcraft your piece with meticulous attention to every detail"
              },
              {
                step: "04",
                title: "Final Approval & Delivery",
                description: "Review your completed piece and receive it beautifully packaged at your door"
              }
            ].map((process, index) => (
              <Card key={index} className="luxury-card border-0 bg-card/50 hover:shadow-luxury transition-all duration-500 group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl font-playfair font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-primary">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4">
              <Link to="/process">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Creations */}
      <section className="py-24 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Our Creations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of bespoke cashmere pieces, each one a unique expression of luxury and craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bespoke Shawls",
                description: "Luxurious shawls tailored to your style and preferences",
                image: "photo-1581091226825-a6a2a5aee158"
              },
              {
                title: "Custom Baby Blankets", 
                description: "Gentle, personalized comfort for life's most precious moments",
                image: "photo-1721322800607-8c38375eef04"
              },
              {
                title: "Personalized Baby Clothes",
                description: "Precious garments crafted with love for precious little ones",
                image: "photo-1486312338219-ce68d2c6f44d"
              }
            ].map((creation, index) => (
              <Card key={index} className="luxury-card border-0 overflow-hidden group cursor-pointer hover:shadow-luxury transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${creation.image}?w=400&h=300&fit=crop&crop=center`}
                    alt={creation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-playfair font-semibold text-primary">
                    {creation.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {creation.description}
                  </p>
                  <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium">
                    Customize This Design →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="luxury-button">
              <Link to="/creations">View All Creations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold">
              Ready to Create Your Masterpiece?
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Begin your journey into bespoke luxury. Share your vision with us and let's create 
              something extraordinary together. Every thread tells a story, and yours is waiting to be woven.
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

export default Index;