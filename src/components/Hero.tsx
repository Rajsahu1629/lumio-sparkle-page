import { Button } from "@/components/ui/button";
import { Star, Users, GraduationCap, DollarSign } from "lucide-react";

const Hero = () => {
  const tutors = [
    {
      name: "Priya Sharma",
      subject: "Mathematics",
      experience: "7 years experience",
      improvement: "+1.2 grades avg",
      rating: 5,
    },
    {
      name: "Rahul Patel",
      subject: "Physics",
      experience: "5 years experience",
      improvement: "+1.5 grades avg",
      rating: 5,
    },
    {
      name: "Ananya Gupta",
      subject: "Chemistry",
      experience: "6 years experience",
      improvement: "+1.3 grades avg",
      rating: 5,
    },
  ];

  const scrollToDemo = () => {
    const element = document.getElementById("demo-form");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-[90px] pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - 60% */}
          <div className="lg:col-span-3 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Ace Your GCSEs with Live, Fun Classes
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-muted-foreground">
              70% cheaper than UK tutors • Expert Indian teachers • Small groups
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={scrollToDemo}>
                Book Free Demo
              </Button>
              <Button variant="outline" size="xl" onClick={scrollToPricing}>
                See Pricing
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              <div className="flex items-center gap-2">
                <Star className="text-accent w-6 h-6" />
                <div className="text-sm">
                  <div className="font-bold text-foreground">4.8/5</div>
                  <div className="text-muted-foreground">rating</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-primary w-6 h-6" />
                <div className="text-sm">
                  <div className="font-bold text-foreground">500+</div>
                  <div className="text-muted-foreground">students</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="text-secondary w-6 h-6" />
                <div className="text-sm">
                  <div className="font-bold text-foreground">UK</div>
                  <div className="text-muted-foreground">syllabus</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="text-primary w-6 h-6" />
                <div className="text-sm">
                  <div className="font-bold text-foreground">£25</div>
                  <div className="text-muted-foreground">/month</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 40% */}
          <div className="lg:col-span-2 relative">
            <div className="space-y-6">
              {tutors.map((tutor, index) => (
                <div
                  key={tutor.name}
                  className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
                      {tutor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground">{tutor.name}</h3>
                      <p className="text-secondary font-semibold">{tutor.subject}</p>
                      <p className="text-sm text-muted-foreground">{tutor.experience}</p>
                      <p className="text-sm text-primary font-semibold">{tutor.improvement}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(tutor.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
