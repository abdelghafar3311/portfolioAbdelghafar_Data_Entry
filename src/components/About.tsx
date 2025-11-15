import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <User className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">About Me</h2>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
            <p className="text-lg text-card-foreground leading-relaxed">
              I am a dependable data entry specialist with excellent accuracy and strong computer skills. My background in web development has enhanced my ability to work with digital tools, manage structured data, and maintain data integrity with precision.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mt-6">
              My philosophy degree developed my analytical thinking and concentration abilities, which support my capacity to handle repetitive tasks with consistency and high attention to detail. I bring reliability, technical proficiency, and a methodical approach to every project I work on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
