import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const OurCreations = () => {
  const collections = [
    {
      title: "Shawls & Wraps",
      description: "Luxury drapes for elegance and warmth, often featuring bespoke embroidery that transforms your most precious memories into wearable art.",
      image: "photo-1581091226825-a6a2a5aee158",
      link: "/creations/shawls",
      investment: "$350 - $1,200",
      products: [
        {
          name: "The Reversible Heirloom Shawl",
          description: "A dual-sided masterpiece woven from two complementary shades of cashmere. Incredibly versatile, offering two distinct looks in one."
        },
        {
          name: "The Artisanal Embroidered Shawl",
          description: "Our signature offering. A classic woven shawl that serves as a canvas for bespoke, hand-guided embroidery, tailored to your vision."
        },
        {
          name: "The Featherlight Lace-Knit Shawl",
          description: "An exquisitely delicate shawl featuring intricate, open-knit patterns. Perfect for temperate evenings or as a sophisticated bridal accessory."
        },
        {
          name: "The Signature Pashmina Stole",
          description: "A timeless, generously sized wrap made from the finest pashmina cashmere, finished with hand-twisted tassels."
        }
      ]
    },
    {
      title: "Blankets & Throws",
      description: "Substantial, soft, and designed to be a centerpiece of comfort in any home. Each piece becomes a treasured family heirloom.",
      image: "photo-1649972904349-6e44c42644a7",
      link: "/creations/blankets",
      investment: "$450 - $1,500",
      products: [
        {
          name: "The Heirloom Woven Blanket",
          description: "A dense, exceptionally soft blanket woven from pure cashmere, featuring a classic border. Designed to be passed down through generations."
        },
        {
          name: "The Classic Cable Knit Throw",
          description: "A thick, cozy blanket featuring traditional cable knit patterns for a touch of rustic elegance and unparalleled warmth."
        },
        {
          name: "The Herringbone Weave Blanket",
          description: "A sophisticated and durable blanket with a timeless herringbone pattern, adding texture and classic style to any interior."
        },
        {
          name: "The Bespoke Monogrammed Blanket",
          description: "A personalized heirloom where clients can have initials, family crests, or significant dates delicately embroidered onto a corner."
        }
      ]
    },
    {
      title: "Baby Blankets",
      description: "The softest touch for the most delicate skin, crafted to become cherished keepsakes that grow with your family's story.",
      image: "photo-1721322800607-8c38375eef04",
      link: "/creations/baby-blankets",
      investment: "$280 - $850",
      products: [
        {
          name: "The Cherish Receiving Blanket",
          description: "A light, breathable, and incredibly soft square blanket, perfect for welcoming a newborn. Often personalized with embroidered initials and birthdate."
        },
        {
          name: "The Dream-Knit Baby Blanket",
          description: "A soft, gently knitted blanket perfect for the crib or stroller, with a simple, elegant stitch that is both beautiful and comforting."
        },
        {
          name: "The Featherlight Cellular Blanket",
          description: "A luxury take on a nursery essential, this cashmere cellular knit provides warmth while ensuring breathability and safety."
        },
        {
          name: "The Personalized Keepsake Blanket",
          description: "A special blanket featuring knitted-in names, dates, or small motifs like stars or hearts, making it a truly unique and beloved gift."
        }
      ]
    },
    {
      title: "Baby Apparel & Gift Sets",
      description: "A collection of foundational pieces for a baby's first wardrobe, embodying purity and softness in every stitch.",
      image: "photo-1486312338219-ce68d2c6f44d",
      link: "/creations/baby-clothes",
      investment: "$150 - $650",
      products: [
        {
          name: "The Welcome Home Set",
          description: "The ultimate heirloom gift including a hand-finished cardigan with mother-of-pearl buttons, matching baby booties, and a classic little bonnet."
        },
        {
          name: "The Heirloom Capelet",
          description: "A beautiful and practical alternative to a coat for special occasions, fastening with a simple ribbon or a single button."
        },
        {
          name: "The Snuggle Romper Suit",
          description: "A one-piece outfit with simple fastenings, enveloping the baby in head-to-toe cashmere comfort."
        },
        {
          name: "Cashmere Baby Accessories",
          description: "Soft socks, booties, and tiny mittens designed to stay on little feet and protect delicate skin with incredible warmth."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-luxury-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-accent/20 rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-primary/20 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-accent/20 rotate-12"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20">
                ✨ Artisan-Crafted Since 2020 • Museum-Quality Precision
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-primary leading-tight">
                Where <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Memories</span>
                <br />
                Become Masterpieces
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                From beloved pets immortalized in cashmere thread to family crests restored with museum-quality precision—
                discover why discerning collectors invest $200-$1,200 in pieces that carry their soul.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">15-25 Hours</div>
                <div className="text-sm text-muted-foreground">Per Hand-Embroidered Portrait</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">Photo-Realistic</div>
                <div className="text-sm text-muted-foreground">Swiss Precision Threading</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">Generational</div>
                <div className="text-sm text-muted-foreground">Heirloom Quality</div>
              </div>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border max-w-3xl mx-auto">
              <p className="text-lg italic text-muted-foreground mb-4">
                "When clients bring us their rescue dog's photo or grandmother's wedding ring pattern, 
                we understand we're not just creating luxury—we're preserving souls in cashmere."
              </p>
              <p className="text-primary font-medium">— Isabella Chen, Master Pet Portrait Artisan</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="luxury-button text-lg px-10 py-6">
                <Link to="/inquiry">Commission Your Masterpiece</Link>
              </Button>
              <Button variant="outline" asChild className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg">
                <Link to="/process">Discover Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Collections */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {collections.map((collection, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                      {collection.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {collection.description}
                    </p>
                    <div className="text-2xl font-playfair font-semibold text-primary">
                      Investment: {collection.investment}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-playfair font-semibold text-primary">Our Signature Pieces:</h3>
                    <div className="space-y-4">
                      {collection.products.map((product, productIndex) => (
                        <div key={productIndex} className="bg-card/30 p-4 rounded-lg border-l-4 border-primary/50">
                          <h4 className="font-semibold text-primary mb-2">{product.name}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="luxury-button">
                      <Link to={collection.link}>Explore Collection</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/inquiry">Commission Custom Piece</Link>
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="luxury-card border-0 overflow-hidden relative">
                    <div className="aspect-[4/3] relative">
                      <img 
                        src={`https://images.unsplash.com/${collection.image}?w=600&h=450&fit=crop&crop=center`}
                        alt={collection.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10"></div>
                      <div className="absolute bottom-4 right-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg">
                        <span className="text-sm font-medium">{collection.products.length} Signature Pieces</span>
                      </div>
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