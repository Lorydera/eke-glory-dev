import { Code2, Palette, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, semantic, and well-structured code',
  },
  {
    icon: Palette,
    title: 'UI/UX Focus',
    description: 'Creating visually appealing and intuitive interfaces',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and smooth user experiences',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'Working effectively in teams using Agile methodologies',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Passionate About Building for the Web
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Junior Frontend Web Developer</span> with 
              strong skills in <span className="text-primary font-medium">React, JavaScript, HTML, CSS, 
              Tailwind CSS, and Bootstrap</span>. I specialize in creating responsive, accessible, and 
              high-performance web applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a background in <span className="text-foreground font-medium">Mass Communication</span>, 
              I bring unique strengths in communication, research, and storytelling to my development work. 
              This helps me understand user needs and translate them into intuitive digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about continuous learning, staying updated with the latest web technologies, 
              and contributing to projects that make a real impact. Currently seeking opportunities to 
              grow and contribute to innovative teams.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`p-6 rounded-xl bg-background card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 animate-fade-in-up opacity-0`}
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
