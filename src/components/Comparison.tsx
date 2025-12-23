import { Check, X, Crown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const competitors = [
  { name: "Leadomail", highlight: true },
  { name: "Mailtrack" },
  { name: "Mailsuite" },
  { name: "Yesware" },
];

const features = [
  { name: "Unlimited email tracking", leadomail: true, mailtrack: false, mailsuite: true, yesware: true },
  { name: "Real-time notifications", leadomail: true, mailtrack: true, mailsuite: true, yesware: true },
  { name: "Link click tracking", leadomail: true, mailtrack: false, mailsuite: true, yesware: true },
  { name: "Email scheduling", leadomail: true, mailtrack: false, mailsuite: true, yesware: true },
  { name: "Email templates", leadomail: true, mailtrack: false, mailsuite: true, yesware: true },
  { name: "Advanced analytics", leadomail: true, mailtrack: false, mailsuite: true, yesware: true },
  { name: "Team collaboration", leadomail: true, mailtrack: false, mailsuite: false, yesware: true },
  { name: "CRM integrations", leadomail: true, mailtrack: false, mailsuite: false, yesware: true },
  { name: "Free plan available", leadomail: true, mailtrack: true, mailsuite: false, yesware: false },
  { name: "No branding on free", leadomail: true, mailtrack: false, mailsuite: false, yesware: false },
  { name: "Privacy-first approach", leadomail: true, mailtrack: false, mailsuite: true, yesware: false },
  { name: "24/7 Support", leadomail: true, mailtrack: false, mailsuite: false, yesware: true },
];

const Comparison = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getFeatureValue = (feature: typeof features[0], index: number) => {
    const keys = ['leadomail', 'mailtrack', 'mailsuite', 'yesware'] as const;
    return feature[keys[index]];
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Comparison
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See how we{" "}
            <span className="text-gradient">stack up</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Leadomail offers more features at a better price than the competition.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card rounded-2xl border border-border/50 shadow-card overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 border-b border-border/50">
              <div className="p-4 md:p-6 bg-muted/30">
                <span className="text-sm font-semibold text-muted-foreground">Features</span>
              </div>
              {competitors.map((competitor, index) => (
                <div
                  key={competitor.name}
                  className={`p-4 md:p-6 text-center transition-all duration-500 ${
                    competitor.highlight 
                      ? 'bg-primary/5 relative' 
                      : 'bg-muted/30'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {competitor.highlight && (
                    <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-full">
                      <div className="mx-auto w-24 h-1 gradient-primary rounded-full" />
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-1">
                    {competitor.highlight && (
                      <Crown className="w-5 h-5 text-accent mb-1 animate-pulse" />
                    )}
                    <span className={`text-sm md:text-base font-bold ${
                      competitor.highlight ? 'text-primary' : 'text-foreground'
                    }`}>
                      {competitor.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border/30">
              {features.map((feature, featureIndex) => (
                <div
                  key={feature.name}
                  className={`grid grid-cols-5 transition-all duration-500 hover:bg-muted/20 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${300 + featureIndex * 50}ms` }}
                >
                  <div className="p-4 md:p-5 flex items-center">
                    <span className="text-sm text-muted-foreground">{feature.name}</span>
                  </div>
                  {competitors.map((competitor, compIndex) => {
                    const hasFeature = getFeatureValue(feature, compIndex);
                    return (
                      <div
                        key={`${feature.name}-${competitor.name}`}
                        className={`p-4 md:p-5 flex items-center justify-center ${
                          competitor.highlight ? 'bg-primary/5' : ''
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                            hasFeature
                              ? competitor.highlight
                                ? 'gradient-primary shadow-soft'
                                : 'bg-accent/20'
                              : 'bg-muted'
                          }`}
                          style={{ 
                            transitionDelay: `${400 + featureIndex * 50 + compIndex * 30}ms`,
                            transform: isVisible ? 'scale(1)' : 'scale(0)'
                          }}
                        >
                          {hasFeature ? (
                            <Check className={`w-4 h-4 ${
                              competitor.highlight ? 'text-primary-foreground' : 'text-accent'
                            }`} />
                          ) : (
                            <X className="w-4 h-4 text-muted-foreground/50" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Table Footer - Summary */}
            <div className="grid grid-cols-5 border-t border-border/50 bg-muted/20">
              <div className="p-4 md:p-6">
                <span className="text-sm font-semibold text-foreground">Total Features</span>
              </div>
              {competitors.map((competitor, index) => {
                const totalFeatures = features.filter(f => getFeatureValue(f, index)).length;
                return (
                  <div
                    key={`total-${competitor.name}`}
                    className={`p-4 md:p-6 text-center ${competitor.highlight ? 'bg-primary/5' : ''}`}
                  >
                    <div className={`text-2xl md:text-3xl font-extrabold transition-all duration-700 ${
                      competitor.highlight ? 'text-primary' : 'text-muted-foreground'
                    } ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                    >
                      {totalFeatures}/{features.length}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Badge */}
          <div className={`mt-8 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1000ms' }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold">
              <Crown className="w-5 h-5" />
              <span>Leadomail offers the most complete solution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
