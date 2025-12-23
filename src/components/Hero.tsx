import { Button } from "@/components/ui/button";
import { CheckCircle2, Chrome, Star, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Star className="w-4 h-4 fill-current" />
            <span>Trusted by 2M+ professionals worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight animate-slide-up">
            Know when your emails are{" "}
            <span className="text-gradient">opened & read</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Leadomail gives you real-time email tracking, scheduling, and analytics 
            directly in Gmail & Outlook. Close more deals with perfect timing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Chrome className="w-5 h-5" />
              Add to Chrome — It's Free
            </Button>
            <Button variant="glass" size="xl" className="w-full sm:w-auto">
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span>2M+ active users</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>Works with Gmail & Outlook</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Mockup */}
        <div className="mt-16 md:mt-20 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            {/* Main Dashboard Preview */}
            <div className="bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden">
              <div className="bg-muted/50 px-4 py-3 border-b border-border/50 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-background rounded-md px-4 py-1 text-xs text-muted-foreground">
                    mail.google.com
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 bg-gradient-to-b from-card to-background">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Email List Preview */}
                  <div className="md:col-span-2 space-y-4">
                    {[
                      { name: "Sarah Chen", subject: "Re: Q4 Proposal Review", status: "opened", opens: 5, time: "2 min ago" },
                      { name: "Michael Ross", subject: "Partnership Discussion", status: "opened", opens: 3, time: "15 min ago" },
                      { name: "Emily Johnson", subject: "Contract Amendment", status: "sent", opens: 0, time: "1 hour ago" },
                    ].map((email, i) => (
                      <div key={i} className="bg-background/80 rounded-xl p-4 border border-border/30 hover:border-primary/30 transition-colors cursor-pointer group">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-foreground">{email.name}</span>
                              {email.status === "opened" && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                                  <CheckCircle2 className="w-3 h-3" />
                                  Opened {email.opens}x
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{email.subject}</p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{email.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats Preview */}
                  <div className="space-y-4">
                    <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                      <p className="text-sm text-muted-foreground mb-1">Emails Tracked</p>
                      <p className="text-3xl font-bold text-foreground">1,247</p>
                      <p className="text-xs text-accent mt-1">+12% this week</p>
                    </div>
                    <div className="bg-accent/5 rounded-xl p-4 border border-accent/10">
                      <p className="text-sm text-muted-foreground mb-1">Open Rate</p>
                      <p className="text-3xl font-bold text-foreground">68%</p>
                      <p className="text-xs text-accent mt-1">Above average</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Notification */}
            <div className="absolute -right-4 top-1/4 bg-card rounded-xl shadow-elevated border border-border/50 p-4 animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email Opened!</p>
                  <p className="text-xs text-muted-foreground">Sarah just viewed your email</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -left-4 bottom-1/4 bg-card rounded-xl shadow-elevated border border-border/50 p-4 animate-float-delayed hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">3 Opens Today</p>
                  <p className="text-xs text-muted-foreground">Proposal.pdf attached</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
