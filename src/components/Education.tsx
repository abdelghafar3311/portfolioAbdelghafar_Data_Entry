import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold text-foreground">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                    Bachelor of Arts – Philosophy Department
                  </h3>
                  <p className="text-lg text-muted-foreground mb-1">
                    Faculty of Arts, Helwan University
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-3">
                    <span className="flex items-center gap-1">
                      <strong>Graduation:</strong> May 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <strong>Grade:</strong> Good
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
