import { DollarSign, Users, BookOpen, Video, HelpCircle, Gamepad2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: "70% Cheaper",
      description: "£25/month vs £100+ traditional tutoring",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Max 5 students for personal attention",
      color: "text-secondary",
    },
    {
      icon: BookOpen,
      title: "UK Syllabus",
      description: "AQA, Edexcel, OCR aligned",
      color: "text-accent",
    },
    {
      icon: Video,
      title: "Recorded Sessions",
      description: "Rewatch classes anytime",
      color: "text-destructive",
    },
    {
      icon: HelpCircle,
      title: "Live Doubt Solving",
      description: "Ask questions in real-time",
      color: "text-primary",
    },
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      description: "Earn badges and track streaks",
      color: "text-secondary",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Why Students Love LumioLearn
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Everything you need to succeed, all in one place
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-2xl hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-primary transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
