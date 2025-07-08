import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-luxury-gradient min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                  ✨ Artisan-Crafted Luxury Since 2020
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-primary leading-tight">
                  Where
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Memory</span>
                  <br />
                  Meets Mastery
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  Transform your most precious memories into luxury cashmere heirlooms. From beloved pet portraits to 
                  family crests, our master artisans create pieces that carry your soul—one thread at a time.
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-playfair font-bold text-primary">$200-$1,200</div>
                    <div className="text-sm text-muted-foreground">Investment Range</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-playfair font-bold text-primary">4-6 Weeks</div>
                    <div className="text-sm text-muted-foreground">Crafting Time</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-playfair font-bold text-primary">Worldwide</div>
                    <div className="text-sm text-muted-foreground">Shipping</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-center text-muted-foreground">
                    Begin with a <span className="font-semibold text-primary">$50 deposit</span> for your personalized design proposal
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild className="luxury-button text-lg px-10 py-6 shadow-lg">
                  <Link to="/inquiry">Start Your Legacy</Link>
                </Button>
                <Button variant="outline" asChild className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg">
                  <Link to="/creations">View Masterpieces</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative lg:order-last">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury group">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=center"
                      alt="Pet portrait embroidery"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-luxury group">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&crop=center"
                      alt="Baby clothes craftsmanship"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-luxury group">
                    <img 
                      src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop&crop=center"
                      alt="Custom baby blankets"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury group">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop&crop=center"
                      alt="Cashmere crafting detail"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl -z-10"></div>
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

      {/* Artisan Stories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Stories Woven in Thread
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every thread tells a story. Every stitch preserves a memory. Discover how our artisans transform 
              your most precious moments into timeless cashmere masterpieces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Pet Portrait Shawls",
                subtitle: "Where Love Lives Forever",
                description: "Isabella Chen spends 20+ hours hand-embroidering your beloved companion's portrait with photo-realistic precision. From rescue dogs to family cats—every pet deserves immortality in cashmere.",
                price: "$450 - $1,200",
                image: "photo-1581091226825-a6a2a5aee158",
                story: "\"When Sarah brought me a photo of her rescue dog Max, I saw more than a pet—I saw 12 years of unconditional love that needed preserving forever.\"",
                link: "/creations/shawls"
              },
              {
                title: "Memory Baby Blankets", 
                subtitle: "First Breaths, Forever Treasures",
                description: "Transform hospital bracelets, wedding dress lace, or ultrasound photos into ultra-soft cashmere blankets. Our photo-to-thread technology captures every precious detail.",
                price: "$280 - $850",
                image: "photo-1721322800607-8c38375eef04",
                story: "\"Parents bring us their baby's first photo, and we weave that pure love into cashmere that will comfort generations.\"",
                link: "/creations/baby-blankets"
              },
              {
                title: "Legacy Baby Clothes",
                subtitle: "Generational Love, Miniature Masterpieces", 
                description: "Recreate christening gown details, incorporate family crests, or feature delicate pet silhouettes. Each garment carries the weight of family history.",
                price: "$200 - $650",
                image: "photo-1486312338219-ce68d2c6f44d",
                story: "\"When three generations of a family commissioned matching pieces, I understood we weren't just making clothes—we were creating legacy.\"",
                link: "/creations/baby-clothes"
              }
            ].map((creation, index) => (
              <div key={index} className="group">
                <Card className="luxury-card border-0 overflow-hidden hover:shadow-luxury transition-all duration-500 h-full">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={`https://images.unsplash.com/${creation.image}?w=500&h=400&fit=crop&crop=center`}
                      alt={creation.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium opacity-90">{creation.subtitle}</div>
                      <div className="text-2xl font-playfair font-bold">{creation.price}</div>
                    </div>
                  </div>
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-playfair font-bold text-primary">
                        {creation.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {creation.description}
                      </p>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-sm italic text-muted-foreground">
                        {creation.story}
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button asChild className="luxury-button flex-1">
                        <Link to={creation.link}>Explore Collection</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Link to="/inquiry">Customize</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild className="luxury-button text-lg px-10 py-6">
              <Link to="/creations">View All Masterpieces</Link>
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