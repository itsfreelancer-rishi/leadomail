import { Chrome, Mail, Eye, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Chrome,
    title: "Install the Extension",
    description: "Add Leadomail to Chrome or Edge in just one click. No complicated setup required."
  },
  {
    number: "02",
    icon: Mail,
    title: "Compose Your Email",
    description: "Write emails as usual in Gmail or Outlook. Tracking is automatically enabled."
  },
  {
    number: "03",
    icon: Eye,
    title: "Get Notified Instantly",
    description: "Receive real-time notifications when your email is opened, wherever you are."
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Analyze & Optimize",
    description: "Use detailed analytics to improve your email strategy and close more deals."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start tracking in{" "}
            <span className="text-gradient">under 60 seconds</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Setting up Leadomail is incredibly simple. No technical skills required.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 -translate-y-1/2 z-0" />
                )}

                {/* Step Card */}
                <div className="relative z-10 text-center">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-card border border-border/50 shadow-card group-hover:shadow-elevated transition-all duration-300 group-hover:-translate-y-2 mb-6">
                    <div className="relative">
                      <step.icon className="w-10 h-10 text-primary" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full gradient-primary text-xs font-bold text-primary-foreground flex items-center justify-center">
                        {step.number.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl">
            <Chrome className="w-5 h-5" />
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
