import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A journey of passion, craftsmanship, and the timeless art of creating beauty from the finest cashmere.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                Where Dreams Meet Craftsmanship
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Aura Cashmere was born from a simple yet profound belief: that luxury should be deeply personal. 
                  Founded in our small atelier, we began with a vision to create cashmere pieces that tell individual stories.
                </p>
                <p>
                  Our founder, Maria Elena, discovered her passion for textile arts during her travels through the Scottish Highlands, 
                  where she witnessed the ancient art of cashmere weaving. Inspired by the dedication and skill of traditional artisans, 
                  she returned with a mission to bring this level of craftsmanship to bespoke creations.
                </p>
                <p>
                  Every piece we create is a collaboration between your vision and our expertise, resulting in treasures 
                  that can be passed down through generations.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="luxury-card border-0 overflow-hidden">
                <div className="aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=450&fit=crop&crop=center"
                    alt="Our founder working in the atelier"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every stitch, every design decision, and every interaction with our cherished clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Artisanal Excellence",
                description: "Every piece is crafted by hand using traditional techniques passed down through generations, ensuring unmatched quality and attention to detail.",
                icon: "✨"
              },
              {
                title: "Personal Connection",
                description: "We believe luxury is personal. Each creation tells your unique story, reflecting your individual style and meaningful moments.",
                icon: "💝"
              },
              {
                title: "Sustainable Beauty",
                description: "We source only the finest, ethically-produced cashmere and create timeless pieces designed to last generations.",
                icon: "🌿"
              }
            ].map((value, index) => (
              <Card key={index} className="luxury-card border-0 text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-playfair font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Card className="luxury-card border-0 overflow-hidden">
                <div className="aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=450&fit=crop&crop=center"
                    alt="Cashmere crafting tools and materials"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                The Art of Slow Fashion
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In a world of fast fashion, we choose the path of mindful creation. Our made-to-order approach 
                  means zero waste and maximum care in every piece we craft.
                </p>
                <p>
                  Each creation takes 4-6 weeks not because we're slow, but because true luxury cannot be rushed. 
                  From sourcing the finest materials to the final hand-finished details, every moment is dedicated 
                  to perfection.
                </p>
                <p>
                  We believe that when you invest in a bespoke piece, you're not just buying an item – 
                  you're commissioning a work of art that will bring joy for generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Meet Our Artisans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The skilled hands and passionate hearts behind every Aura Cashmere creation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Elena Rodriguez",
                role: "Founder & Master Artisan",
                description: "With over 20 years of experience in luxury textiles, Maria Elena brings traditional craftsmanship into the modern world.",
                image: "photo-1649972904349-6e44c42644a7"
              },
              {
                name: "James Mitchell",
                role: "Design Consultant", 
                description: "Former luxury fashion designer who specializes in translating client visions into stunning, wearable art.",
                image: "photo-1486312338219-ce68d2c6f44d"
              },
              {
                name: "Sophie Chen",
                role: "Quality Specialist",
                description: "Ensures every piece meets our exacting standards before it reaches your hands, maintaining our commitment to excellence.",
                image: "photo-1581091226825-a6a2a5aee158"
              }
            ].map((member, index) => (
              <Card key={index} className="luxury-card border-0 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${member.image}?w=200&h=200&fit=crop&crop=face`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-playfair font-semibold text-primary">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold">
              Become Part of Our Story
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Every commission adds a new chapter to our journey. Let us craft something extraordinary 
              that will become part of your family's story.
            </p>
            <Button asChild variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg">
              <Link to="/inquiry">Begin Your Commission</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;