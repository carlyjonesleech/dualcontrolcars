import { Shield, Clock, MapPin, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fully Insured",
      description:
        "Comprehensive insurance on all vehicles. Drive with complete peace of mind.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description:
        "Available 7 days a week with early morning and evening collection options.",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Convenient Pickup",
      description:
        "Multiple pickup locations across the area. We'll meet you where it suits.",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Expert Support",
      description:
        "Friendly team ready to help with any questions before, during, or after hire.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
