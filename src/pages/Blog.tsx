import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Blog = () => {
  // Placeholder blog posts - will be connected to Strapi CMS later
  const blogPosts = [
    {
      title: "The Art of Hand-Embroidered Pet Portraits",
      excerpt: "Discover the intricate process behind transforming your beloved pet's photograph into a stunning cashmere embroidery masterpiece.",
      image: "photo-1581091226825-a6a2a5aee158",
      date: "December 15, 2024",
      category: "Artisan Stories",
      slug: "art-of-pet-portraits"
    },
    {
      title: "Mongolian Cashmere: The World's Finest Fiber",
      excerpt: "Journey with us to the remote highlands of Mongolia where our premium cashmere begins its transformation into luxury heirlooms.",
      image: "photo-1649972904349-6e44c42644a7",
      date: "December 10, 2024",
      category: "Materials",
      slug: "mongolian-cashmere-finest-fiber"
    },
    {
      title: "Creating Baby Heirlooms: From Hospital Bracelet to Cashmere",
      excerpt: "How we transform precious first moments into generational treasures that families will cherish forever.",
      image: "photo-1721322800607-8c38375eef04",
      date: "December 5, 2024",
      category: "Baby Collection",
      slug: "baby-heirlooms-hospital-to-cashmere"
    }
  ];

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