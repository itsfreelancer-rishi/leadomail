import { 
  Eye, 
  Clock, 
  BarChart3, 
  FileText, 
  Bell, 
  Shield,
  Zap,
  Users
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Real-Time Tracking",
    description: "Know the exact moment your email is opened. Get instant notifications on desktop and mobile.",
    color: "primary"
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "Schedule emails to send at the perfect time. Boost open rates with AI-powered timing suggestions.",
    color: "accent"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into your email performance. Track opens, clicks, locations, and devices.",
    color: "primary"
  },
  {
    icon: FileText,
    title: "Email Templates",
    description: "Save time with reusable templates. Track which templates perform best for your audience.",
    color: "accent"
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Never miss an opportunity. Get real-time alerts when prospects engage with your emails.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Enterprise-grade security. Your data is encrypted and never shared with third parties.",
    color: "accent"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Zero lag email tracking. Our lightweight extension won't slow down your inbox.",
    color: "primary"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share templates and insights with your team. Unified dashboard for team performance.",
    color: "accent"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to{" "}
            <span className="text-gradient">close more deals</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful email tracking tools designed for sales professionals, 
            recruiters, and anyone who needs to know when their emails are read.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${feature.color === 'primary' ? 'gradient-primary' : 'gradient-accent'} flex items-center justify-center mb-5 shadow-soft group-hover:shadow-glow transition-shadow duration-300`}>
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
