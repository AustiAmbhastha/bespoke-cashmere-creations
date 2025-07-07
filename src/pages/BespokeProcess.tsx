import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BespokeProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Soul-Deep Consultation",
      description: "Share your story with us—your beloved pet's quirks, your grandmother's treasured jewelry, or your family's generational patterns. Our heritage design consultant helps translate precious memories into embroidery-ready art.",
      details: [
        "Submit $50 booking deposit to secure consultation slot",
        "Share high-resolution photos and emotional context",
        "Receive personalized artisan assignment within 24 hours", 
        "Discuss hand vs. machine embroidery for your vision"
      ],
      duration: "24-48 hours"
    },
    {
      step: "02",
      title: "Artisan Design & Investment",
      description: "Your assigned master artisan creates detailed sketches showing how your pet's eyes will catch light in thread, or how your family crest will translate to cashmere. Investment ranges $200-$1,200 depending on complexity.",
      details: [
        "Receive hand-drawn design sketches from your artisan",
        "Review detailed quote explaining each artistic element",
        "Choose between hand embroidery (soul) or machine precision (detail)",
        "Approve final design and submit remaining investment"
      ],
      duration: "2-3 days"
    },
    {
      step: "03", 
      title: "Sacred Crafting Period",
      description: "Your artisan enters the sacred space where time stops. Watch through progress photos as your pet's personality emerges in thread, or your family pattern takes shape using techniques passed down through generations.",
      details: [
        "Sourcing ethically-sourced Mongolian cashmere fibers",
        "Hand or machine embroidery by your dedicated artisan",
        "Weekly progress photos showing your story taking form",
        "Quality control by our master craftspeople council"
      ],
      duration: "4-6 weeks"
    },
    {
      step: "04",
      title: "Final Approval & Delivery", 
      description: "Upon completion, we'll send you high-quality photos for final approval. Once confirmed, your beautifully packaged creation will be shipped to your door.",
      details: [
        "Professional photography of completed piece",
        "Final approval and any minor adjustments",
        "Luxury packaging and presentation",
        "Insured worldwide shipping"
      ],
      duration: "3-5 days"
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
              Where Time Becomes Luxury
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              4-6 weeks isn't delay—it's devotion. While fast fashion churns out thousands, our master artisans 
              spend days perfecting a single embroidered whisker on your pet's portrait or matching the exact 
              shade of your grandmother's wedding ring in cashmere thread.
            </p>
            <div className="bg-card/50 p-6 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">
                "Each commission is a sacred trust. When clients bring us their late dog's favorite toy or their 
                newborn's hospital bracelet, we understand we're not just crafting cashmere—we're preserving souls."
              </p>
              <p className="mt-2 text-primary font-medium">— Elena Marchetti, Master Artisan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {processSteps.map((process, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-6xl font-playfair font-bold text-primary/20">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                        {process.title}
                      </h2>
                      <div className="text-sm text-muted-foreground mt-2">
                        Timeline: {process.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                  
                  <div className="space-y-3">
                    {process.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="luxury-card border-0 bg-soft-gradient p-8">
                    <div className="text-center space-y-6">
                      <div className="text-8xl font-playfair font-bold text-primary/10">
                        {process.step}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-playfair font-semibold text-primary">
                          {process.title}
                        </h3>
                        <div className="text-lg text-muted-foreground">
                          {process.duration}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Your Journey Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From inquiry to delivery, your bespoke creation typically takes 5-7 weeks to complete.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-playfair font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.duration}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute w-full h-0.5 bg-primary/20 top-8 left-8 z-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Start your bespoke creation today. Every masterpiece begins with a single step.
            </p>
            <Button asChild variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg">
              <Link to="/inquiry">Start Your Inquiry Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BespokeProcess;