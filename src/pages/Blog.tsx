import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Blog = () => {
  const { slug } = useParams();
  // Placeholder blog posts - will be connected to Strapi CMS later
  const blogPosts = [
    {
      title: "The Art of Hand-Embroidered Pet Portraits",
      excerpt: "Discover the intricate process behind transforming your beloved pet's photograph into a stunning cashmere embroidery masterpiece.",
      content: `
        <p>In our atelier, we believe that every beloved pet deserves to be immortalized in luxury. Our hand-embroidered pet portraits represent the pinnacle of personalized artistry, where cutting-edge technology meets traditional craftsmanship.</p>
        
        <h3>The Digital Foundation</h3>
        <p>Each portrait begins with your cherished photograph. Our master artisans carefully analyze the image, considering lighting, texture, and the unique character that makes your pet special. Using specialized software, we create a detailed embroidery map that will guide our skilled craftspeople.</p>
        
        <h3>The Art of Translation</h3>
        <p>Converting a photograph into embroidery requires an artist's eye and years of experience. We carefully select thread colors that capture not just the visual appearance, but the essence of your pet's personality. Each shade is chosen to work harmoniously with our premium cashmere canvas.</p>
        
        <h3>Hand-Guided Precision</h3>
        <p>While we use state-of-the-art embroidery machines for consistency, every piece is hand-guided by our master embroiderers. This ensures that each stitch captures the life and spirit of your beloved companion, creating a piece that's both technically perfect and emotionally resonant.</p>
        
        <p>The result is a timeless heirloom that celebrates the bond between you and your pet, crafted in the world's finest cashmere and designed to be treasured for generations.</p>
      `,
      image: "photo-1581091226825-a6a2a5aee158",
      date: "December 15, 2024",
      category: "Artisan Stories",
      slug: "art-of-pet-portraits"
    },
    {
      title: "Mongolian Cashmere: The World's Finest Fiber",
      excerpt: "Journey with us to the remote highlands of Mongolia where our premium cashmere begins its transformation into luxury heirlooms.",
      content: `
        <p>High in the remote plateaus of Mongolia, where temperatures can plummet to -40°F, lives the Capra hircus goat—the source of the world's most coveted cashmere fiber. This is where our story begins, long before our artisans touch a single thread.</p>
        
        <h3>The Highland Heritage</h3>
        <p>Mongolian cashmere represents less than 1% of the world's total fiber production, making it extraordinarily rare and precious. The extreme climate of the Mongolian highlands forces these goats to develop an incredibly fine, soft undercoat—nature's own luxury insulation.</p>
        
        <h3>Sustainable Sourcing</h3>
        <p>We work directly with nomadic herders who have maintained their traditional practices for centuries. Our commitment extends beyond just sourcing; we ensure fair compensation and support sustainable grazing practices that protect both the animals and their fragile ecosystem.</p>
        
        <h3>The Journey to Luxury</h3>
        <p>Each strand of cashmere fiber is meticulously hand-combed during the goat's natural molting season. The raw cashmere then undergoes a careful cleaning and sorting process, where only the finest fibers—measuring less than 19 microns in diameter—are selected for our creations.</p>
        
        <p>This extraordinary journey from the Mongolian steppes to your hands represents our commitment to sourcing only the world's finest materials for your bespoke pieces.</p>
      `,
      image: "photo-1649972904349-6e44c42644a7",
      date: "December 10, 2024",
      category: "Materials",
      slug: "mongolian-cashmere-finest-fiber"
    },
    {
      title: "Creating Baby Heirlooms: From Hospital Bracelet to Cashmere",
      excerpt: "How we transform precious first moments into generational treasures that families will cherish forever.",
      content: `
        <p>There are few moments more precious than a baby's first breath, first cry, first peaceful sleep. At Cloudspun Cashmere, we specialize in capturing these irreplaceable memories and transforming them into tangible heirlooms that families will treasure for generations.</p>
        
        <h3>The Memory Keepers</h3>
        <p>Our baby heirloom service begins with the smallest details—hospital bracelets, first photographs, birth announcements, or even ultrasound images. These precious mementos become the inspiration for bespoke embroidery that tells your baby's unique story.</p>
        
        <h3>Artisanal Interpretation</h3>
        <p>Our master embroiderers work closely with families to understand the significance of each element. Whether it's recreating the delicate script of a hospital bracelet, the tiny footprints from birth records, or incorporating significant dates and names, every detail is thoughtfully considered.</p>
        
        <h3>Generational Craftsmanship</h3>
        <p>Using techniques passed down through generations, we create pieces designed to last lifetimes. Our cashmere baby blankets, clothing, and accessories are constructed with French seams, hand-finished edges, and the finest materials—ensuring they remain beautiful through years of love and use.</p>
        
        <h3>Legacy in Every Stitch</h3>
        <p>These aren't just baby items; they're future family treasures. Imagine your child, years from now, wrapping their own baby in the same cashmere blanket that welcomed them into the world—a tangible connection across generations, crafted with love and preserved in luxury.</p>
      `,
      image: "photo-1721322800607-8c38375eef04",
      date: "December 5, 2024",
      category: "Baby Collection",
      slug: "baby-heirlooms-hospital-to-cashmere"
    }
  ];

  // Find current blog post if slug exists
  const currentPost = slug ? blogPosts.find(post => post.slug === slug) : null;

  // If viewing individual post
  if (currentPost) {
    return (
      <div className="min-h-screen bg-background">
        <TopHeader />
        <Header />
        
        {/* Blog Post Header */}
        <section className="relative py-16 bg-soft-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button asChild variant="outline" className="mb-8">
                <Link to="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                    {currentPost.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{currentPost.date}</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-primary">
                  {currentPost.title}
                </h1>
                
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${currentPost.image}?w=1200&h=675&fit=crop&crop=center`}
                    alt={currentPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Post Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg max-w-none text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
              />
              
              {/* Call to Action */}
              <div className="mt-16 p-8 bg-soft-gradient rounded-lg text-center">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                  Inspired by Our Story?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let us create something beautiful and meaningful for you. Begin your bespoke journey today.
                </p>
                <Button asChild className="luxury-button">
                  <Link to="/inquiry">Start Your Design</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-luxury-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20 mb-8">
              ✨ Stories of Craftsmanship & Heritage
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-primary mb-6">
              The Aura <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Journal</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Behind-the-scenes stories of our artisan process, the origins of our materials, 
              and the beautiful journeys of families who trust us with their most precious memories.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="luxury-card border-0 overflow-hidden group cursor-pointer">
                <div className="aspect-[4/3]">
                  <img 
                    src={`https://images.unsplash.com/${post.image}?w=400&h=300&fit=crop&crop=center`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CMS Integration Notice */}
      <section className="py-16 bg-soft-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-4">
              Connect with Strapi CMS
            </h2>
            <p className="text-muted-foreground mb-6">
              This blog section is ready to be connected to your Strapi CMS for dynamic content management. 
              The layout and styling are complete and will automatically populate with your blog content.
            </p>
            <div className="bg-card/50 p-6 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">
                "Integration with Strapi CMS will enable dynamic blog post management, 
                categories, tags, and SEO optimization for your content."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;