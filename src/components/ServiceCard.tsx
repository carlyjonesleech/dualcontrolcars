import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  priceLabel: string;
  popular?: boolean;
}

const ServiceCard = ({
  id,
  icon,
  title,
  description,
  features,
  price,
  priceLabel,
  popular = false,
}: ServiceCardProps) => {
  return (
    <div
      id={id}
      className={`relative bg-card rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border ${
        popular ? "border-secondary" : "border-border"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
            Most Popular
          </span>
        </div>
      )}

      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
        popular ? "bg-secondary/20" : "bg-primary/10"
      }`}>
        <div className={popular ? "text-secondary" : "text-primary"}>
          {icon}
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="text-2xl font-bold text-card-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>

      {/* Price */}
      <div className="mb-6">
        <span className="text-3xl font-extrabold text-card-foreground">{price}</span>
        <span className="text-muted-foreground ml-2">{priceLabel}</span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                className="w-3 h-3 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={popular ? "hero" : "outline"}
        size="lg"
        className="w-full"
      >
        Book Now
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ServiceCard;
