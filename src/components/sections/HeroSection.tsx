import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient pt-20">
      <div className="section-container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up opacity-0 stagger-1">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to opportunities
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up opacity-0 stagger-2">
            Junior Frontend
            <br />
            <span className="gradient-text">Web Developer</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up opacity-0 stagger-3">
            Hi, I'm <span className="text-foreground font-semibold">Eke Glory Chidera</span>. 
            I build responsive, user-friendly web experiences with clean code and attention to detail. 
            Passionate about React, JavaScript, and creating beautiful interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0 stagger-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                <ExternalLink className="mr-2" size={18} />
                View Projects
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2" size={18} />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up opacity-0 stagger-5">
            <a
              href="https://github.com/lorydera"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 text-muted-foreground hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/glory-chidera"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 text-muted-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:chideraglory5@gmail.com"
              className="p-3 rounded-full bg-card card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 text-muted-foreground hover:text-primary"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <a href="#about" aria-label="Scroll to about section">
              <ArrowDown className="text-muted-foreground" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
