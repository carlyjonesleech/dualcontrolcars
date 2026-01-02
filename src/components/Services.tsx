import ServiceCard from "@/components/ServiceCard";
import { Calendar, Users, Car } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "test-day",
      icon: <Calendar className="w-7 h-7" />,
      title: "Test Day Hire",
      description:
        "Take your driving test in a car you're comfortable with. Pricing based on notice given. £80 discount without supervising driver.",
      features: [
        "14+ days' notice: £195",
        "7–13 days' notice: £245",
        "Under 7 days' notice: £295",
        "£80 off without supervising driver",
        "Full dual controls & insurance",
      ],
      price: "From £195",
      priceLabel: "with driver",
      popular: true,
    },
    {
      id: "adi-relief",
      icon: <Users className="w-7 h-7" />,
      title: "ADI Relief Hire",
      description:
        "Professional vehicles for driving instructors. Flexible hire when you need cover or extra capacity.",
      features: [
        "Daily, weekly & monthly rates",
        "Fully maintained vehicles",
        "He-Man dual controls",
        "Learner signage included",
        "Breakdown cover included",
      ],
      price: "£60",
      priceLabel: "per day",
    },
    {
      id: "private-practice",
      icon: <Car className="w-7 h-7" />,
      title: "Private Practice",
      description:
        "Extra practice with friends or family. Perfect for building confidence between lessons.",
      features: [
        "Half day (3.5 hrs): £85",
        "Full day hire: £150",
        "Evenings & weekends available",
        "Safe dual control system",
        "Comprehensive insurance",
      ],
      price: "From £85",
      priceLabel: "half day",
    },
  ];

  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Perfect
            <span className="text-gradient block">Hire Option</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From test day nerves to professional needs, we have a solution that fits.
            All our vehicles are fully insured and maintained to the highest standards.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
