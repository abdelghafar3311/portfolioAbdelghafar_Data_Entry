import { Button } from "@/components/ui/button";
import { Download, Mail, FolderOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
            Abdelghafar Nagy Ahmed
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 font-medium mb-6">
            Data Entry Clerk
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            I am a reliable and accurate data entry clerk with strong computer skills and technical background in web development. I excel at managing, organizing, and validating data with a high level of precision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 hover:scale-105 transition-transform"
              onClick={() => window.open("https://drive.usercontent.google.com/download?id=1Lx3TBSUcoMmVOrsE_vsQKh2rd6A4dTb7&export=download&authuser=0&confirm=t&uuid=aa8b6393-86d8-450d-852b-8696ca701a75&at=ALWLOp7LUXPLmJclOolq0E2BSYjT:1763202472372", "_blank")}
            >
              <Download className="h-5 w-5" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20 hover:scale-105 transition-transform"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
