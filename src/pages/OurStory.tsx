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
              Where Imagination Meets Mastery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              In our atelier, centuries-old traditions merge with boundless creativity. Every thread tells a story, 
              every stitch carries emotion, and every piece becomes a treasured heirloom.
            </p>
            <div className="mt-8 text-sm text-muted-foreground bg-card/50 p-6 rounded-lg border border-border">
              <p className="italic">"We don't just create cashmere. We craft dreams into tangible beauty—from beloved pet portraits 
              to family crests, each piece is a testament to your unique story."</p>
              <p className="mt-2 text-primary font-medium">— Master Artisan, Cloudspun Cashmere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story & Craftsmanship Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-primary text-sm font-medium tracking-wide uppercase">Our Foundation</div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                  Born from Passion, Perfected by Tradition
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Cloudspun Cashmere began in 2019 when our founder discovered that true luxury lies not in mass production, 
                  but in the intimate connection between artisan and client. In a world saturated with generic luxury goods, 
                  we chose a different path—one where your beloved pet's portrait becomes eternal art, where family memories 
                  are woven into cashmere fiber.
                </p>
                <p>
                  <span className="text-primary font-semibold">Why choose us over others?</span> Because we don't just sell cashmere—we 
                  craft emotional connections. Our master artisans combine 200-year-old Scottish Highland techniques with modern 
                  precision machinery, creating pieces that no factory can replicate.
                </p>
                <div className="bg-card/50 p-6 rounded-lg border border-border">
                  <p className="italic text-primary">"When a client brings us a photo of their late grandmother's ring or 
                  their rescue dog's first portrait, we understand the sacred trust they place in our hands. That's when craft 
                  becomes art, and art becomes heirloom."</p>
                  <p className="mt-3 text-sm">— Elena Marchetti, Master Embroidery Artisan</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="luxury-card border-0 overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=450&fit=crop&crop=center"
                    alt="Master artisan hands working with premium cashmere"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cloudspun Difference */}
      <section className="py-24 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary text-sm font-medium tracking-wide uppercase mb-4">The Cloudspun Difference</div>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6">
              What Sets Us Apart in Luxury
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              While others mass-produce, we micro-craft. While others standardize, we personalize. 
              Every thread, every stitch, every detail is intentionally yours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Hand Embroidery Mastery",
                description: "Our artisans can hand-embroider your pet's likeness, family crests, or meaningful symbols with museum-quality precision—a dying art form we keep alive.",
                icon: "🧵",
                price: "Starting $350"
              },
              {
                title: "Machine Precision Art",
                description: "Swiss-engineered embroidery machines create intricate patterns impossible by hand—think photo-realistic pet portraits or complex geometric designs.",
                icon: "⚙️",
                price: "Starting $280"
              },
              {
                title: "Hybrid Craftsmanship",
                description: "Combining both techniques for pieces of unmatched complexity—machine precision for details, hand work for soul and finishing touches.",
                icon: "✨",
                price: "Starting $450"
              },
              {
                title: "Heirloom Consultation",
                description: "We help transform your memories into design—childhood blankets recreated, wedding dress elements incorporated, or generational patterns restored.",
                icon: "💝",
                price: "Included"
              }
            ].map((feature, index) => (
              <Card key={index} className="luxury-card border-0 text-center group hover:shadow-luxury transition-all duration-500">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-lg font-playfair font-semibold text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                  <div className="text-primary font-medium text-sm">{feature.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Craftsmanship Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Card className="luxury-card border-0 overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=450&fit=crop&crop=center"
                    alt="Intricate cashmere weaving patterns and textures"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="text-primary text-sm font-medium tracking-wide uppercase">Our Process</div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                  Where Time Becomes Luxury
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-primary font-semibold">4-6 weeks isn't delay—it's devotion.</span> While fast fashion 
                  churns out thousands of identical pieces, our artisans spend days perfecting a single embroidered petal on your 
                  pet's portrait or ensuring the exact shade of your grandmother's wedding dress is matched in cashmere.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-card/50 p-4 rounded-lg border border-border">
                    <div className="text-primary font-semibold mb-2">Week 1-2</div>
                    <p className="text-sm">Design consultation, material sourcing, and pattern creation based on your personal story</p>
                  </div>
                  <div className="bg-card/50 p-4 rounded-lg border border-border">
                    <div className="text-primary font-semibold mb-2">Week 3-4</div>
                    <p className="text-sm">Hand/machine embroidery phase where your memories take physical form in thread</p>
                  </div>
                  <div className="bg-card/50 p-4 rounded-lg border border-border">
                    <div className="text-primary font-semibold mb-2">Week 5-6</div>
                    <p className="text-sm">Finishing, quality inspection, and heirloom packaging preparation</p>
                  </div>
                  <div className="bg-card/50 p-4 rounded-lg border border-border">
                    <div className="text-primary font-semibold mb-2">Lifetime</div>
                    <p className="text-sm">Complimentary care guidance and repair services to preserve your legacy piece</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary text-sm font-medium tracking-wide uppercase mb-4">Master Craftspeople</div>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6">
              The Artists Behind Your Heirloom
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate artisans who transform your memories into masterpieces. Each brings decades of expertise 
              and an unwavering commitment to perfection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Elena Marchetti",
                role: "Master Hand Embroidery Artisan",
                description: "Third-generation embroidery master specializing in photo-realistic pet portraits and family crest recreation. Elena's work graces European royal collections.",
                image: "photo-1649972904349-6e44c42644a7",
                specialty: "Pet Portraits & Family Crests"
              },
              {
                name: "Marcus Aberdeen", 
                role: "Machine Precision Specialist",
                description: "Former Swiss textile engineer who perfects the marriage of technology and artistry. Transforms complex designs into flawless embroidered reality.",
                image: "photo-1486312338219-ce68d2c6f44d",
                specialty: "Technical Embroidery & Patterns"
              },
              {
                name: "Isabella Chen",
                role: "Heritage Design Consultant",
                description: "Textile historian and designer who helps clients translate family memories into timeless cashmere designs. Expert in generational pattern restoration.",
                image: "photo-1581091226825-a6a2a5aee158",
                specialty: "Memory-to-Design Translation"
              }
            ].map((member, index) => (
              <Card key={index} className="luxury-card border-0 text-center group hover:shadow-luxury transition-all duration-500">
                <CardContent className="p-8 space-y-4">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <img 
                      src={`https://images.unsplash.com/${member.image}?w=200&h=200&fit=crop&crop=face`}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-playfair font-semibold text-primary">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {member.role}
                    </p>
                    <div className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {member.specialty}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Sacred Space Section */}
          <div className="mt-16 text-center">
            <Card className="luxury-card border-0 bg-card/30 p-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=300&fit=crop"
                  alt="Our sacred atelier workspace where dreams become reality"
                  className="w-full h-40 object-cover rounded-lg opacity-60"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-primary-foreground space-y-2">
                    <h3 className="text-xl font-playfair font-bold">Our Sacred Atelier</h3>
                    <p className="text-sm opacity-90">Where centuries-old traditions meet your modern dreams</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold">
              Your Memory Deserves Masterpiece Treatment
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Whether it's your beloved pet's portrait, a family crest passed down through generations, or a design born from your 
              imagination—we transform precious memories into luxury cashmere heirlooms that tell your unique story for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10 py-4 text-lg font-medium">
                <Link to="/inquiry">Start with $50 Deposit</Link>
              </Button>
              <div className="text-primary-foreground/80 text-sm">
                Premium Investment: $200 - $1,200 USD
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;