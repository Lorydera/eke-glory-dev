const technicalSkills = [
  { name: 'JavaScript (ES6+)', level: 85 },
  { name: 'React.js', level: 80 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'Bootstrap', level: 85 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'REST APIs', level: 75 },
  { name: 'Responsive Design', level: 92 },
  { name: 'Accessibility (WCAG)', level: 78 },
];

const softSkills = [
  'Problem-solving & Analytical Thinking',
  'Attention to Detail',
  'Team Collaboration (Agile/Scrum)',
  'Time Management & Organization',
  'Communication & Research Skills',
  'Adaptability & Continuous Learning',
];

const tools = [
  'VS Code',
  'Chrome DevTools',
  'Figma',
  'GitHub',
  'Netlify',
  'Vercel',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            My Technical Arsenal
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="lg:col-span-2 bg-card rounded-2xl p-6 md:p-8 card-shadow">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Technical Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Tools */}
          <div className="space-y-6">
            {/* Soft Skills */}
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Soft Skills
              </h3>
              <div className="space-y-2">
                {softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
