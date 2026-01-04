import ServiceCard from "@/components/ServiceCard";
import { Calendar, Users, Car } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "test-day",
      icon: <Calendar className="w-7 h-7" />,
      title: "Test Day Hire",
      description:
        "Take your driving test in a car you're comfortable with. Only £80 extra if you want an ADI to accompany you.",
      features: [
        "Full dual controls & insurance",
        "Cheaper pricing with more notice",
        "£80 extra for ADI to accompany",
        "All local test centres covered",
      ],
      price: "From £115*",
      priceLabel: "per test",
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
        "Minimum 2 hours hire",
        "Evenings & weekends available",
        "Safe dual control system",
        "Comprehensive insurance",
        "*Based on full day hire for £150",
      ],
      price: "From £17*",
      priceLabel: "per hour",
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
