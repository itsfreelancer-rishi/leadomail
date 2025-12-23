import { Star } from "lucide-react";

const testimonials = [
  {
    content: "Leadomail completely transformed how I follow up with prospects. I know exactly when to call them — right after they open my email. My close rate increased by 35%.",
    author: "Sarah Chen",
    role: "Sales Director",
    company: "TechCorp",
    avatar: "SC"
  },
  {
    content: "As a recruiter, timing is everything. Leadomail helps me reach candidates at the perfect moment. It's become an essential tool in my workflow.",
    author: "Michael Ross",
    role: "Senior Recruiter",
    company: "TalentFlow",
    avatar: "MR"
  },
  {
    content: "The analytics dashboard gives me insights I never had before. I can see which subject lines work best, optimal send times, and so much more.",
    author: "Emily Johnson",
    role: "Marketing Manager",
    company: "GrowthLab",
    avatar: "EJ"
  },
  {
    content: "We rolled out Leadomail to our entire sales team. The ROI was immediate — everyone could see when prospects were engaged and act accordingly.",
    author: "David Park",
    role: "VP of Sales",
    company: "ScaleUp Inc",
    avatar: "DP"
  },
  {
    content: "Simple, fast, and reliable. Leadomail does exactly what it promises without slowing down my inbox. Highly recommend for any professional.",
    author: "Lisa Martinez",
    role: "Account Executive",
    company: "SalesForce",
    avatar: "LM"
  },
  {
    content: "The real-time notifications are a game changer. I get a ping on my phone the moment someone opens my proposal. Perfect for time-sensitive deals.",
    author: "James Wilson",
    role: "Business Development",
    company: "Enterprise Co",
    avatar: "JW"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Loved by{" "}
            <span className="text-gradient">2M+ professionals</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See why sales teams, recruiters, and professionals worldwide trust Leadomail.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
