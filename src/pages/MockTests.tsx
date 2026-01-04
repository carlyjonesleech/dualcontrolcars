import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  Car,
  MapPin,
  ClipboardCheck,
  MessageSquare,
  FileText,
  Shield,
  CheckCircle,
  XCircle,
  Phone,
  Mail,
  AlertTriangle,
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";

const MockTests = () => {
  const whatsIncluded = [
    { icon: <Clock className="w-5 h-5" />, text: "2-hour mock test session" },
    { icon: <MapPin className="w-5 h-5" />, text: "Pick-up and drop-off from home" },
    { icon: <Car className="w-5 h-5" />, text: "Test-style driving route (where possible)" },
    { icon: <ClipboardCheck className="w-5 h-5" />, text: "Independent, test-like assessment" },
    { icon: <MessageSquare className="w-5 h-5" />, text: "Clear verbal feedback at the end" },
    { icon: <FileText className="w-5 h-5" />, text: "Written summary of strengths & areas to improve" },
    { icon: <Car className="w-5 h-5" />, text: "Dual-control vehicle" },
    { icon: <Shield className="w-5 h-5" />, text: "Fully insured" },
  ];

  const howItWorks = [
    { step: 1, title: "Pick-up from home", description: "We collect you from your address" },
    { step: 2, title: "Brief explanation", description: "How the mock test will run" },
    { step: 3, title: "Test-style drive", description: "No coaching unless safety requires it" },
    { step: 4, title: "Full assessment", description: "Manoeuvres, independent driving, and real-world scenarios" },
    { step: 5, title: "Return home", description: "Safe drop-off at your address" },
    { step: 6, title: "Clear feedback", description: "Honest feedback and next steps" },
  ];

  const perfectFor = [
    "The learner is test-ready or nearly test-ready",
    "They want a confidence boost",
    "They want feedback from someone other than their instructor",
    "They feel nervous about the real test",
    "They haven't driven with someone unfamiliar",
    "They want clear, honest feedback",
  ];

  const notSuitableFor = [
    "The learner is very early in training",
    "Basic car control is still developing",
  ];

  const importantNotes = [
    "Mock tests are not lessons — they are assessments",
    "Minimal guidance is given during the drive",
    "Safety interventions may occur if required",
    "Feedback is honest and constructive",
  ];

  const faqs = [
    {
      question: "Is this the same as a driving lesson?",
      answer: "No. Mock tests are assessments, not lessons. We keep intervention to a minimum so the experience feels authentic — just like the real test. You won't receive coaching during the drive unless safety requires it.",
    },
    {
      question: "How long does the mock test take?",
      answer: "The full session is 2 hours, which includes pick-up from home, the test-style drive, manoeuvres, and feedback at the end.",
    },
    {
      question: "Will I get written feedback?",
      answer: "Yes. You'll receive clear verbal feedback immediately after the test, plus a written summary of your strengths and areas to improve that you can share with your instructor.",
    },
    {
      question: "What if I'm not sure if I'm ready?",
      answer: "If you're unsure whether a mock test is right for you, feel free to ask before booking. We're happy to advise whether it's the right time.",
    },
    {
      question: "Do you cover my local test centre routes?",
      answer: "We aim to use test-style routes where possible. If you have a specific test centre in mind, let us know when booking.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl pt-12 md:pt-16">
            <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Mock Driving Tests – Chester
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              A Realistic Test-Day Experience
              <span className="block text-secondary">Before the Real Thing</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Our Mock Driving Tests are designed to replicate the real driving test as closely as possible — helping learners understand exactly where they stand before test day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Book a Mock Test
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              This is ideal for learners who:
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["want a realistic test-style assessment", "feel nervous about the real test", "haven't driven with someone unfamiliar", "want clear, honest feedback"].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                What's Included
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Everything You Need for a Realistic Experience
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {whatsIncluded.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                    {item.icon}
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-muted rounded-2xl text-center">
              <p className="text-lg text-muted-foreground italic">
                The session is structured to feel like: <span className="text-foreground font-medium">Arriving for your test, driving independently, and receiving an honest result.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Your Mock Test Journey
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {howItWorks.map((item) => (
                <div
                  key={item.step}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-primary-foreground/10 rounded-2xl text-center">
              <p className="text-primary-foreground/90">
                We keep intervention to a minimum so the experience feels authentic — <span className="font-semibold text-secondary">just like the real test.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Simple, Transparent Pricing
            </h2>

            <div className="bg-card rounded-2xl border-2 border-secondary p-8 shadow-lg">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
                <Car className="w-5 h-5 text-secondary" />
                <span className="text-secondary font-semibold">Mock Driving Test</span>
              </div>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">£100</span>
                <span className="text-muted-foreground ml-2">/ 2 hours</span>
              </div>

              <p className="text-muted-foreground mb-6">
                Priced the same as a standard 2-hour lesson, with the added benefit of:
              </p>

              <div className="space-y-3 text-left max-w-xs mx-auto mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">A structured assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">Test-day realism</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">Independent feedback</span>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Book Your Mock Test
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                Is This Right For You?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Who This Is For (and Who It Isn't)
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Perfect For */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Perfect if:</h3>
                </div>
                <ul className="space-y-3">
                  {perfectFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Suitable For */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Not suitable if:</h3>
                </div>
                <ul className="space-y-3">
                  {notSuitableFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-muted-foreground text-sm italic">
                  If you're unsure, feel free to ask before booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                <h3 className="text-xl font-bold text-foreground">Important Notes</h3>
              </div>
              <ul className="space-y-3">
                {importantNotes.map((note, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-foreground font-medium">
                The goal is confidence and clarity — not pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Common Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Test Your Skills?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Book your mock driving test today. Home pick-up and drop-off included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Book a Mock Test
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MockTests;
