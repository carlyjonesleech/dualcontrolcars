import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Car, Shield, Users, Clock, Award, Heart, Network } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "Every vehicle is fully insured, regularly maintained, and equipped with professional He-Man dual controls for maximum safety.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Focused",
      description: "We understand the stress of learning to drive. That's why we make our booking process simple and our service reliable.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible & Reliable",
      description: "Available 7 days a week with flexible booking options to fit around your schedule. We're here when you need us.",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Quality Vehicles",
      description: "Our fleet consists of modern, well-maintained vehicles that are easy to drive and perfect for learners of all experience levels.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Your Local
              <span className="text-gradient block mt-2">Dual Control Specialists</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              Chester Dual Control Car Hire Ltd is a family-run business dedicated to providing safe, 
              reliable dual control vehicles for learner drivers and driving instructors across Chester and the surrounding areas.
            </p>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 55C480 50 600 70 720 75C840 80 960 70 1080 65C1200 60 1320 60 1380 60L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built on Experience, Driven by Service
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Chester Dual Control Car Hire Ltd was founded with a simple mission: to make learning to drive safer and 
                more accessible for everyone in the Chester area. We saw a gap in the market for reliable, affordable 
                dual control car hire and set out to fill it.
              </p>
              <p>
                Whether you're a learner driver preparing for your test, a parent wanting to give your child extra practice, 
                or a driving instructor needing temporary cover, we're here to help. Our vehicles are all fitted with 
                professional He-Man dual controls and are fully insured for learner drivers.
              </p>
              <p>
                Based in Chester, we serve learners and instructors across Cheshire, including Ellesmere Port, Wrexham, 
                and the surrounding areas. We pride ourselves on our personal service and our commitment to helping 
                every customer achieve their driving goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Instructor Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                Meet Your Instructor
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Qualified, Experienced & Patient
              </h2>
            </div>

            <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left side - Main bio */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Award className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">DVSA Approved ADI</h3>
                      <p className="text-secondary font-medium">Green Badge Holder</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    I'm a patient, friendly, and fully qualified DVSA Approved Driving Instructor with over 
                    <span className="font-semibold text-foreground"> 3 years of professional teaching experience </span> 
                    and <span className="font-semibold text-foreground">25 years behind the wheel</span>.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    I understand that every learner is different, which is why I take a calm, encouraging approach 
                    to help you build confidence at your own pace. Whether you need extra practice before your test 
                    or a realistic mock assessment, I'm here to support you every step of the way.
                  </p>
                </div>

                {/* Right side - Credentials */}
                <div className="bg-primary/5 p-8 md:p-10">
                  <h4 className="text-lg font-bold text-card-foreground mb-6">What Sets Us Apart</h4>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                        <Heart className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-card-foreground mb-1">Patient & Supportive</h5>
                        <p className="text-muted-foreground text-sm">A calm, encouraging approach tailored to your individual needs and learning pace.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-card-foreground mb-1">Test Day Expertise</h5>
                        <p className="text-muted-foreground text-sm">Extensive experience sitting in on driving tests and conducting realistic mock assessments.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                        <Network className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-card-foreground mb-1">Trusted Network</h5>
                        <p className="text-muted-foreground text-sm">Connected with a network of qualified instructors for mock tests, test day accompaniment, and pre-test lessons when needed.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything we do is guided by our commitment to safety, reliability, and exceptional customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-4 text-secondary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Proudly Serving Chester & Beyond
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're based in Chester and provide our services across the local area, including all nearby test centres.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>Chester, Cheshire</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:07960268195" className="hover:text-secondary transition-colors">
                  07960 268195
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:carly@chesterdualcontrolcars.com" className="hover:text-secondary transition-colors">
                  carly@chesterdualcontrolcars.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a car for your driving test, private practice, or ADI relief, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/#services">View Our Services</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:07960268195">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
