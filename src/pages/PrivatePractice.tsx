import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Car, Clock, MapPin, Phone, Mail, MessageCircle, Users, BookOpen, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendarWidget from "@/components/CalendarWidget";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import comingToRescue from "@/assets/coming-to-rescue.png";

const PrivatePractice = () => {
  const heroFeatures = [
    { icon: <Car className="w-5 h-5" />, text: "Automatic or manual dual-control car" },
    { icon: <Shield className="w-5 h-5" />, text: "Instructor-style safety pedals" },
    { icon: <MapPin className="w-5 h-5" />, text: "Chester & surrounding areas" },
    { icon: <Clock className="w-5 h-5" />, text: "Flexible hire — evenings & weekends" },
  ];

  const whyChooseUs = [
    "Brake & accelerator on the passenger side",
    "Automatic available — no clutch stress",
    "Fully insured for learner drivers",
    "Clean, modern, well-maintained car",
    "Clear guidance before every hire",
  ];

  const safetyFeatures = [
    "Dual controls allow you to intervene if needed",
    "Reduces panic for both parent and learner",
    "Ideal for early learners or confidence-building",
    "Same type of car used by instructors",
  ];

  const howItWorks = [
    { step: "1", title: "Book a session", description: "Choose a time that works for your family." },
    { step: "2", title: "Quick handover & briefing", description: "We explain the dual controls and safety rules." },
    { step: "3", title: "Practice at your pace", description: "Local routes, quiet roads, or test areas." },
    { step: "4", title: "Return the car", description: "No pressure — no rushing." },
  ];

  const perfectFor = [
    "Need more hours between instructor lessons",
    "Are nervous or lack confidence",
    "Are learning automatic",
    "Don't have access to a suitable family car",
    "Want experience in a dual-control vehicle",
  ];

  const faqs = [
    {
      question: "Do I need to be a qualified instructor?",
      answer: "No. Any suitable supervising driver can supervise, as per UK rules.",
    },
    {
      question: "Is the car insured for learner use?",
      answer: "Yes — fully insured for learner drivers with supervision.",
    },
    {
      question: "Can we practice near the test centre?",
      answer: "Yes — local routes can be used where appropriate.",
    },
    {
      question: "What if my child panics?",
      answer: "That's exactly why dual controls help — you can intervene calmly if needed.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="text-primary-foreground/80 text-sm font-medium">Parent-supervised practice</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Safe Dual Control Car Hire for Learner Drivers in Chester
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
              Give your child extra practice — without the stress
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
              {heroFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-primary-foreground/80 justify-center sm:justify-start">
                  <span className="text-secondary">{feature.icon}</span>
                  <span className="text-sm md:text-base">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Check Availability
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://wa.me/message/NMZITS345GOME1" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <span className="px-3 py-1 bg-card/20 rounded-full text-sm text-primary-foreground/70">No long-term commitment</span>
              <span className="px-3 py-1 bg-card/20 rounded-full text-sm text-primary-foreground/70">Evening & weekend availability</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-secondary text-lg mb-2 block">❤️ WHY PARENTS CHOOSE US</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Practice Together. Safely. Confidently.
                </h2>
                <p className="text-muted-foreground text-lg">
                  Learning to drive takes practice — but not every family has a suitable car, or feels comfortable supervising without safety controls.
                </p>
                <p className="text-muted-foreground text-lg mt-4 mb-8">
                  Our dual-control manual and automatic cars allows parents to help their learner practise in a calm, controlled, and safer environment.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-first lg:order-last">
                <img
                  src={comingToRescue}
                  alt="Coming to the rescue - Chester Dual Control"
                  className="w-full max-w-sm mx-auto lg:max-w-none h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-secondary text-lg mb-2 block">🛡 WHAT MAKES IT SAFER</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Safer Than a Normal Car
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-8 text-lg italic">
              Many parents tell us it makes practice less stressful and more productive.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary text-lg mb-2 block">🚗 HOW PRIVATE PRACTICE HIRE WORKS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple. Clear. No pressure.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-secondary">{item.step}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-secondary text-lg mb-2 block">👩‍🎓 PERFECT FOR LEARNERS WHO…</span>
            </div>

            <div className="space-y-4">
              {perfectFor.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-secondary text-lg mb-2 block">💷 PRICING</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Dual Control Learner Car Hire
              </h2>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 text-center">
              <p className="text-lg text-muted-foreground mb-4">Evenings and weekends only</p>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-gradient">£25</span>
                <span className="text-muted-foreground">per hour</span>
              </div>
              <p className="text-secondary font-medium mb-6">Discounted blocks available</p>

              <div className="space-y-3 text-left max-w-sm mx-auto mb-8">
                <p className="font-semibold text-foreground mb-3">Includes:</p>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span className="text-muted-foreground">Fully insured dual-control automatic car</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span className="text-muted-foreground">Parent supervision</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span className="text-muted-foreground">Flexible local routes</span>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 mb-6 text-sm text-muted-foreground">
                <p>📌 Proof of provisional licence required</p>
                <p>📌 Parent/guardian must meet supervision rules</p>
              </div>

              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                View Availability
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-secondary text-lg mb-2 block">❓ PARENTS' FAQs</span>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border border-border px-6">
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Local Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-secondary text-lg mb-2 block">📍 LOCAL, CHESTER-BASED</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We're based locally and understand:
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-foreground font-medium">Chester roads</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-foreground font-medium">Common learner challenges</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <BookOpen className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-foreground font-medium">Test centre areas</p>
              </div>
            </div>

            <p className="text-muted-foreground mt-8 text-lg">
              You're not dealing with a faceless hire company.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Book or Ask a Question
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Helping learners practise safely — and parents feel confident.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/message/NMZITS345GOME1" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="heroOutline" size="xl">
                <Phone className="w-5 h-5" />
                Call Us
              </Button>
              <Button variant="heroOutline" size="xl">
                <Mail className="w-5 h-5" />
                Email
              </Button>
            </div>

            <Button variant="hero" size="xl">
              Check Availability
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Calendar Widget */}
      <CalendarWidget />

      <Footer />
    </div>
  );
};

export default PrivatePractice;
