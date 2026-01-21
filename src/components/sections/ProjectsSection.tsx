import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Recipe Sharing Website',
    description: 'A responsive recipe sharing platform with dynamic content fetched from REST APIs. Features reusable components, lazy loading, and performance optimization.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'REST API'],
    image: '/placeholder.svg',
    github: 'https://github.com/kodecampteam/recipe-sharing-fe',
    live: null,
  },
  {
    title: 'ReVogue E-commerce',
    description: 'A fully functional e-commerce website with product listing, shopping cart with local storage, search & filtering, and checkout form validation.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'REST API'],
    image: '/placeholder.svg',
    github: 'https://github.com/lorydera/ReVogue-ecommerce',
    live: 'https://lorydera.github.io/ReVogue-ecommerce/',
  },
  {
    title: 'Business Development Website',
    description: 'A professional multi-page business website with customized Bootstrap components, responsive design, and SEO-friendly semantic HTML structure.',
    tech: ['HTML', 'Bootstrap', 'CSS'],
    image: '/placeholder.svg',
    github: 'https://github.com/lorydera/bootstrap-website',
    live: 'https://lorydera.github.io/bootstrap-website/',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my frontend development skills and passion for creating responsive, user-friendly web applications.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-background rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/20">{project.title.charAt(0)}</span>
                </div>
                <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="default" size="sm" asChild className="flex-1">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
