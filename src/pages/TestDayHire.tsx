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
  Car,
  CheckCircle,
  Clock,
  Calendar,
  Shield,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
} from "lucide-react";
import justInTime from "@/assets/just-in-time.png";

const TestDayHire = () => {
  const whatsIncluded = [
    "Automatic or manual dual-control car",
    "Fully insured for test use",
    "Pre-test vehicle checks",
    "Admin & licence checks",
    "Handover and handback at the test centre",
    "Waiting time during the test",
    "Calm, professional support on the day",
  ];

  const pricingTiers = [
    { notice: "14+ days' notice", price: "£195" },
    { notice: "7–13 days' notice", price: "£245" },
    { notice: "Under 7 days' notice", price: "£295" },
  ];

  const idealFor = [
    "You've secured a test but don't have a car",
    "Your instructor is unavailable for test day",
    "You need a calm, reliable alternative at short notice",
  ];

  const faqs = [
    {
      question: "Do I need to bring anything on the day?",
      answer:
        "Yes — bring your provisional driving licence (photocard), your test booking confirmation, and any required documents. We'll confirm everything before the test.",
    },
    {
      question: "What happens if I fail the test?",
      answer:
        "The hire covers the test attempt regardless of outcome. You can book again when you have a new test date.",
    },
    {
      question: "Can I have a warm-up drive before the test?",
      answer:
        "Yes, we arrive early to allow time for you to get comfortable with the car and the controls before your test begins.",
    },
    {
      question: "Is the car automatic or manual?",
      answer:
        "We offer both automatic and manual dual-control cars. Please specify which you need when booking.",
    },
    {
      question: "What if my test is cancelled by the DVSA?",
      answer:
        "If the DVSA cancels your test, we'll work with you to reschedule at no extra charge where possible, subject to availability.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-hero-gradient text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calendar className="w-4 h-4" />
                Test Day Vehicle Hire
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Test Day Car Hire – Chester
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
                Dual-Control Test Car Hire for Learners Without a Car
              </p>
              <p className="text-lg text-primary-foreground/70 mb-8">
                If your learner doesn't have access to a suitable car for their driving test, we offer a fully managed test-day vehicle hire service using modern, dual-control cars, based locally in Chester.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="text-lg px-8">
                  <Calendar className="w-5 h-5 mr-2" />
                  Check Availability
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="https://wa.me/message/NMZITS345GOME1" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img
                src={justInTime}
                alt="Just in time for your driving test - Chester Dual Control"
                className="w-full max-w-md mx-auto lg:max-w-none h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Designed For Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              This Service is Designed For
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Learners whose instructor is unavailable",
                "Learners whose instructor won't provide a car",
                "Parents whose own car isn't suitable for test use",
                "Short-notice or cancellation test slots",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What's Included
              </h2>
              <p className="text-muted-foreground text-lg">
                This is not just car hire — it's a managed test-day service.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {whatsIncluded.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-muted rounded-xl text-center">
              <div className="flex items-center justify-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-semibold">Total time covered: approx. 90 minutes</span>
              </div>
              <p className="text-muted-foreground mt-2">
                (arrival, test, and handback)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Test Day Pricing
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Test-day hire is priced based on the notice given, as this allows us to plan fairly around existing pupils and avoid last-minute lesson cancellations.
              </p>
            </div>

            <div className="bg-background rounded-2xl border border-border overflow-hidden mb-8">
              <div className="grid grid-cols-2 bg-primary text-primary-foreground font-semibold">
                <div className="p-4 border-r border-primary-foreground/20">Notice Period</div>
                <div className="p-4">Price</div>
              </div>
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 ${
                    index !== pricingTiers.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="p-4 border-r border-border font-medium">{tier.notice}</div>
                  <div className="p-4 text-2xl font-bold text-secondary">{tier.price}</div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-secondary/10 border border-secondary/30 rounded-xl">
              <p className="text-foreground text-center">
                <strong>£80 discount</strong> available if you don't need a supervising driver to accompany you to the test.
              </p>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-xl">
              <p className="text-muted-foreground text-center italic">
                Short-notice bookings require diary changes and may result in lost teaching income, which is reflected in the price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pricing Varies Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Why Pricing Varies by Notice
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">We Prioritise</h3>
                <ul className="space-y-3">
                  {[
                    "Fairness to existing learners",
                    "Proper planning",
                    "Calm, organised test days",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">Tiered Pricing Allows Us To</h3>
                <ul className="space-y-3">
                  {[
                    "Keep disruption to a minimum",
                    "Avoid cancelling lessons at short notice",
                    "Still help learners who secure late test slots",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-8">
              Unlike large hire companies, we are a <strong className="text-foreground">local, instructor-led service</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Excess Reduction Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Optional: Excess Reduction (Peace of Mind)
            </h2>
            <p className="text-muted-foreground mb-4">
              Our vehicles are covered by a fleet insurance policy with a standard excess.
            </p>
            <p className="text-foreground">
              For added reassurance, an optional excess reduction waiver may be available on the day, reducing your financial liability in the event of accidental damage.
            </p>
            <p className="text-sm text-muted-foreground mt-4 italic">
              (This is optional and not insurance.)
            </p>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <AlertCircle className="w-8 h-8 text-secondary" />
              <h2 className="text-2xl md:text-3xl font-bold">Important Information</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Vehicles are dual-control and test-ready",
                "Provisional licence holders must be appropriately supervised",
                "Hirer must comply with licence conditions",
                "All tests are subject to availability",
                "Late-notice slots are limited",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Is This Right For You Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-first lg:order-first">
                <img
                  src={justInTime}
                  alt="Just in time for your test - Chester Dual Control"
                  className="w-full max-w-sm mx-auto lg:max-w-none h-auto rounded-2xl shadow-xl"
                />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Is This Right For You?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  This service is ideal if:
                </p>
                <div className="space-y-4 mb-8">
                  {idealFor.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border"
                    >
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  If you're unsure, feel free to get in touch before booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Test Day FAQs
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
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
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Local, Chester-Based
            </h2>
            <p className="text-muted-foreground mb-6">
              We're based locally and understand Chester roads, test centre areas, and common learner challenges.
            </p>
            <p className="text-foreground font-medium">
              You're not dealing with a faceless hire company.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book a Test Day Vehicle
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Advance notice strongly recommended
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Check Availability
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="https://wa.me/message/NMZITS345GOME1" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80">
              <a
                href="tel:+441onal"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
              <a
                href="mailto:carly@chesterdualcontrolcars.com"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>carly@chesterdualcontrolcars.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestDayHire;
