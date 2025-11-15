import { Target, Clock, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Strengths = () => {
  const strengths = [
    {
      icon: Clock,
      title: "Reliable and Punctual",
      description: "Consistent delivery and meeting deadlines",
    },
    {
      icon: Target,
      title: "Highly Focused",
      description: "Strong concentration on tasks and details",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick adaptation to new systems and tools",
    },
    {
      icon: Users,
      title: "Adaptable",
      description: "Flexible approach to changing requirements",
    },
  ];

  return (
    <section id="strengths" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Target className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold text-foreground">Strengths</h2>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-primary/20"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
