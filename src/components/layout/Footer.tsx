import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-background/80">
              © {currentYear} Eke Glory Chidera. All rights reserved.
            </p>
            <p className="text-xs text-background/60 mt-1 flex items-center justify-center md:justify-start gap-1">
              Built with <Heart size={12} className="text-primary" /> for the web
            </p>
          </div>

          {/* Tagline */}
          <p className="text-sm text-background/70 hidden md:block">
            Building clean, responsive, and accessible web experiences.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/lorydera"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-background/10 transition-colors text-background/80 hover:text-background"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/glory-chidera"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-background/10 transition-colors text-background/80 hover:text-background"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:chideraglory5@gmail.com"
              className="p-2 rounded-lg hover:bg-background/10 transition-colors text-background/80 hover:text-background"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
