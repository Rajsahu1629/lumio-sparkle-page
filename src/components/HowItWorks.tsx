import { Calendar, GraduationCap, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Book Demo",
      description: "Choose your subject and schedule a free trial class",
      color: "text-secondary",
    },
    {
      icon: GraduationCap,
      title: "Join Class",
      description: "Meet your tutor and classmates in live sessions",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Watch grades improve with personalized feedback",
      color: "text-accent",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Get Started in 3 Simple Steps
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-background p-8 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ${step.color}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
