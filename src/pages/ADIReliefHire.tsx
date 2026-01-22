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
  Users,
  Shield,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  Wrench,
  FileCheck,
  Calendar,
} from "lucide-react";
import comingToRescue from "@/assets/coming-to-rescue.png";

const ADIReliefHire = () => {
  const situations = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "After an Accident",
      description: "Don't let an accident stop your business. Get back on the road quickly with a fully-equipped replacement vehicle.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Mechanical Breakdown",
      description: "Car in the garage? Keep your diary running and your income flowing while repairs are completed.",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Trainee Licence (Pink Badge)",
      description: "Part-qualified and working towards Part 3? Hire a dual-control vehicle to gain experience and build hours while you train.",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Try Different Vehicles",
      description: "Want to test a different car or transmission before committing? Or let your pupils experience something new? We've got you covered.",
    },
  ];

  const whatsIncluded = [
    "Modern dual-control vehicle",
    "He-Man dual controls fitted",
    "Learner signage included",
    "Fully insured for instruction",
    "Breakdown cover included",
    "Fully maintained vehicle",
    "Flexible hire periods",
  ];

  const pricingOptions = [
    { period: "Daily hire", price: "£60", note: "per day" },
    { period: "Weekly hire", price: "£300", note: "per week" },
    { period: "Monthly hire", price: "£950", note: "per month" },
  ];

  const idealFor = [
    "Your car is off the road after an accident",
    "Awaiting repairs due to mechanical issues",
    "You're on a pink badge and working towards Part 3",
    "Holiday cover or temporary capacity increase",
    "Testing a franchise before committing long-term",
    "Trying a different vehicle or transmission type",
  ];

  const faqs = [
    {
      question: "How quickly can I get a vehicle?",
      answer:
        "We understand emergencies happen. Subject to availability, we can often arrange same-day or next-day collection. Contact us as early as possible for the best availability.",
    },
    {
      question: "What dual controls are fitted?",
      answer:
        "Our vehicles are fitted with He-Man dual controls — the industry standard trusted by driving instructors across the UK.",
    },
    {
      question: "Is insurance included?",
      answer:
        "Yes, the vehicle comes fully insured for driving instruction. You'll need to provide proof of your ADI badge and driving licence.",
    },
    {
      question: "Can I use the car for tests?",
      answer:
        "Yes, our vehicles are suitable for driving tests. Please let us know in advance if you have tests booked during your hire period.",
    },
    {
      question: "What happens if there's a problem with the vehicle?",
      answer:
        "All our vehicles include breakdown cover. In the unlikely event of an issue, we'll work to get you back on the road as quickly as possible.",
    },
    {
      question: "Do I need to return the car with a full tank?",
      answer:
        "Yes, please return the vehicle with the same fuel level as when collected. We provide it with a full tank.",
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
                <Users className="w-4 h-4" />
                ADI Relief Hire
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Keep Teaching, Keep Earning
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
                Dual-Control Vehicle Hire for Driving Instructors
              </p>
              <p className="text-lg text-primary-foreground/70 mb-8">
                When your car is off the road, your income doesn't have to stop. Our relief hire service keeps you teaching — whether you've had an accident, a breakdown, or you're training on a pink badge.
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
                src={comingToRescue}
                alt="Coming to the rescue - Chester Dual Control ADI Relief Hire"
                className="w-full max-w-md mx-auto lg:max-w-none h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Us Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                When You Need Us Most
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We understand that unexpected situations can threaten your livelihood. That's why we're here to help.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {situations.map((situation, index) => (
                <div
                  key={index}
                  className="bg-background p-8 rounded-2xl border border-border text-center"
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                    {situation.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{situation.title}</h3>
                  <p className="text-muted-foreground">{situation.description}</p>
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
                Everything you need to keep your driving school running smoothly.
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
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Flexible Pricing
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Whether you need cover for a day, a week, or longer — we have options to suit your situation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {pricingOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl border border-border p-8 text-center"
                >
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                    {option.period}
                  </h3>
                  <div className="text-4xl font-bold text-secondary mb-2">
                    {option.price}
                  </div>
                  <p className="text-muted-foreground text-sm">{option.note}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-secondary/10 border border-secondary/30 rounded-xl text-center">
              <p className="text-foreground">
                <strong>Longer term hire?</strong> Contact us for bespoke pricing on extended hire periods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainee Licence Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <FileCheck className="w-4 h-4" />
                  Trainee Instructors
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Working Towards Part 3?
                </h2>
                <p className="text-muted-foreground mb-6">
                  If you've passed Part 2 and are on your pink badge, you need a dual-control vehicle to train with pupils while working towards your Part 3 qualification.
                </p>
                <ul className="space-y-3">
                  {[
                    "No need to buy or lease while still training",
                    "Build teaching hours and experience",
                    "Flexible hire while you qualify",
                    "Try different vehicles before committing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <Shield className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-4">Focus on Qualifying</h3>
                <p className="text-muted-foreground">
                  Concentrate on developing your teaching skills and passing Part 3. We handle the vehicle, maintenance, and breakdown cover — you handle the learning.
                </p>
              </div>
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
                  src={comingToRescue}
                  alt="Coming to the rescue - Chester Dual Control"
                  className="w-full max-w-sm mx-auto lg:max-w-none h-auto rounded-2xl shadow-xl"
                />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Is This Right For You?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  ADI Relief Hire is ideal if:
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
                  Get in touch to discuss your requirements — we're here to help.
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
              ADI Relief Hire FAQs
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
              Local, Chester-Based Service
            </h2>
            <p className="text-muted-foreground mb-6">
              We're fellow driving instructors based in Chester. We understand the pressures you face and the importance of keeping your diary running.
            </p>
            <p className="text-foreground font-medium">
              You're dealing with instructors who've been in your shoes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Relief Vehicle?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Don't let your car situation stop your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                variant="hero"
                size="lg"
                className="text-lg px-8"
              >
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
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6 text-secondary" />
                <span className="text-primary-foreground/80">Call Us</span>
                <a
                  href="tel:01onal"
                  className="font-semibold hover:text-secondary transition-colors"
                >
                  Contact for number
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6 text-secondary" />
                <span className="text-primary-foreground/80">Email</span>
                <a
                  href="mailto:carly@chesterdualcontrolcars.com"
                  className="font-semibold hover:text-secondary transition-colors"
                >
                  Get in touch
                </a>
              </div>
              <a href="https://wa.me/message/NMZITS345GOME1" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:text-secondary transition-colors">
                <MessageCircle className="w-6 h-6 text-secondary" />
                <span className="text-primary-foreground/80">WhatsApp</span>
                <span className="font-semibold">Quick responses</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ADIReliefHire;
