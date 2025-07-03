import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does the bespoke process take?",
      answer: "Our typical timeline is 4-6 weeks from deposit to delivery. This includes design consultation, crafting time, and final approval. Rush orders may be accommodated for an additional fee."
    },
    {
      question: "What is your payment structure?",
      answer: "We require a 50% deposit to begin your commission, with the remaining 50% due upon completion and final approval. We accept all major credit cards and bank transfers."
    },
    {
      question: "Can I see my piece during the creation process?",
      answer: "Absolutely! We provide progress updates with photos throughout the crafting process, so you can see your vision coming to life."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide with full insurance and tracking. Shipping costs vary by location and are calculated at checkout."
    },
    {
      question: "What if I'm not satisfied with the final piece?",
      answer: "Your satisfaction is our priority. We work closely with you throughout the process to ensure the final piece meets your expectations. Minor adjustments can be made before final payment."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
                Frequently Asked Questions
              </h1>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="luxury-card border-0">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;