import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "£25",
      period: "/month",
      features: [
        "4 classes per month",
        "Group (max 5 students)",
        "Recorded sessions",
        "Email support",
      ],
      isPopular: false,
    },
    {
      name: "Popular",
      price: "£35",
      period: "/month",
      features: [
        "8 classes per month",
        "Group (max 5 students)",
        "Recorded sessions",
        "Weekly quizzes",
        "Priority support",
      ],
      isPopular: true,
    },
    {
      name: "Premium",
      price: "£150",
      period: "/month",
      features: [
        "4x 1:1 private sessions",
        "Personal tutor",
        "Custom schedule",
        "Priority support",
        "Progress reports",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Start free, upgrade anytime. No hidden fees.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-background rounded-3xl p-8 ${
                plan.isPopular
                  ? "border-4 border-primary scale-105 shadow-2xl"
                  : "border border-border"
              } hover:shadow-xl transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="bg-primary text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  ⭐ MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.isPopular ? "default" : "secondary"}
                className="w-full"
                size="lg"
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12 italic">
          Compare: GoStudent £120/mo | Preply £80/mo
        </p>
      </div>
    </section>
  );
};

export default Pricing;
