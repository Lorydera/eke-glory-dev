import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const certifications = [
  {
    title: 'Frontend Developer Certification',
    issuer: 'Kodecamp - Cohort 5.0',
    year: '2025',
    icon: Award,
  },
  {
    title: 'Software Development',
    issuer: 'Women Techsters Initiative',
    year: '2025',
    icon: GraduationCap,
  },
  {
    title: 'Website Development & SEO',
    issuer: 'Digital Marketing Skill Institute',
    year: '2024',
    icon: BookOpen,
  },
];

const experiences = [
  {
    title: 'Hands-on Project Experience',
    description: 'Built multiple real-world projects including e-commerce platforms, recipe sharing apps, and business websites using modern frontend technologies.',
    icon: Briefcase,
  },
  {
    title: 'Collaborative Development',
    description: 'Actively collaborated with team members using Git/GitHub for version control, code reviews, and project management in Agile environments.',
    icon: BookOpen,
  },
  {
    title: 'Continuous Learning',
    description: 'Committed to staying updated with the latest web technologies, best practices, and industry trends through online courses and community engagement.',
    icon: GraduationCap,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Experience & Learning</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            My Journey
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Learning Journey */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="text-primary" size={20} />
              </span>
              Learning Journey
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="relative pl-8 pb-6 border-l-2 border-border last:border-transparent last:pb-0 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="bg-card rounded-xl p-5 card-shadow hover:card-shadow-hover transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <exp.icon className="text-primary" size={18} />
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="text-primary" size={20} />
              </span>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="bg-card rounded-xl p-5 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <cert.icon className="text-primary" size={22} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
