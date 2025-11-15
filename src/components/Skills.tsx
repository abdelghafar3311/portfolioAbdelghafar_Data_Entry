import { Award, Code2, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const essentialSkills = [
    "Fast and accurate typing",
    "Error detection and data organization",
    "Proficient in Excel and Word",
    "Strong computer and digital tools usage",
    "High attention to detail",
    "Strong written communication",
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Good – Reading & Writing" },
  ];

  const technicalSkills = [
    "React.js – Next.js",
    "Node.js – Express.js",
    "Prisma – Mongoose",
    "Tailwind CSS – Bootstrap",
    "Working with APIs",
    "Creating CRUD systems",
  ];

  return (
    <section id="skills" className="py-20 bg-section-bg-alt">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Award className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold text-foreground">Skills</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Essential Skills */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <CheckCircle2 className="h-6 w-6" />
                Essential Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {essentialSkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground">{skill}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-card-foreground mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {lang.name} – {lang.level}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Code2 className="h-6 w-6" />
                Supporting Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Technical background that enhances digital tool proficiency
              </p>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
