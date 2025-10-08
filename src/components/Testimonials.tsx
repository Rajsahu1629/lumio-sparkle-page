import { Star, TrendingUp, Award, Users } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "My son went from D to B in just 3 months! Amazing value for money.",
      author: "Sarah M.",
      location: "London",
      rating: 5,
    },
    {
      text: "The tutors are so patient and make learning fun. My daughter actually looks forward to classes!",
      author: "James T.",
      location: "Manchester",
      rating: 5,
    },
    {
      text: "Best decision we made. Small groups mean personalized attention at a fraction of the cost.",
      author: "Priya K.",
      location: "Birmingham",
      rating: 5,
    },
    {
      text: "Recordings are a game-changer. My son can revise anytime before exams.",
      author: "David R.",
      location: "Leeds",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const stats = [
    { icon: TrendingUp, label: "+1.2 grades avg", color: "text-primary" },
    { icon: Award, label: "95% pass rate", color: "text-accent" },
    { icon: Users, label: "500+ UK students", color: "text-secondary" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          What Parents & Students Say
        </h2>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card p-8 rounded-3xl shadow-lg">
                    <div className="flex gap-1 mb-4 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-xl text-foreground text-center mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                        {testimonial.author.split(' ')[0][0]}
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-center gap-3 p-4 bg-card rounded-2xl"
            >
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <span className="font-bold text-lg text-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
