import { FolderOpen, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Tager – React CRUDs",
      description: "Platform connecting shop owners with entrepreneurs. Built using React, Express, Next.js, and database tools with full CRUD functionality.",
      links: {
        frontend: "https://github.com/abdelghafar3311/Tager-Frontend",
        backend: "https://github.com/abdelghafar3311/react-cruds-backend---express",
        demo: "https://tager-frontend.vercel.app/",
      },
    },
    {
      title: "React-CRUDs",
      description: "Comprehensive app for managing sales, purchases, and stock. Works like a desktop application with robust data management capabilities.",
      links: {
        demo: "https://react-cruds.vercel.app",
        github: "https://github.com/abdelghafar3311/React-Cruds",
      },
    },
    {
      title: "CRUDS-JS",
      description: "Simple CRUD application using HTML, CSS, and JavaScript. Helps organize and update data easily with a clean interface.",
      links: {
        demo: "https://cruds-js-ft5a.vercel.app/",
        github: "https://github.com/abdelghafar3311/CRUDS-JS",
      },
    },
    {
      title: "Chrome Extension – Links Manager",
      description: "Browser extension that saves important links and creates JSON backups. Solves limitations of the Momentum extension.",
      links: {
        demo: "https://extension-chrome-links-6frc.vercel.app/",
        github: "https://github.com/abdelghafar3311/Extension-Chrome--Links",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg-alt">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <FolderOpen className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold text-foreground">Projects</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-border">
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.links.demo && (
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.links.demo, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.links.github, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                  )}
                  {project.links.frontend && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.links.frontend, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                      Frontend
                    </Button>
                  )}
                  {project.links.backend && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.links.backend, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                      Backend
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
