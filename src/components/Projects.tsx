import { Code, Zap, Rocket } from 'lucide-react';

const projects = [
  {
    icon: Zap,
    title: 'Automation & Workflow Systems',
    description: 'Internal tools and automation pipelines designed to reduce manual tasks and improve operational efficiency. Includes API integrations, data processing, and AI-assisted logic.'
  },
  {
    icon: Code,
    title: 'Web Applications',
    description: 'Full-stack applications built with a focus on usability, maintainability, and performance.'
  },
  {
    icon: Rocket,
    title: 'Client Prototypes & MVPs',
    description: 'Early-stage builds and proof-of-concept systems created to validate ideas quickly and safely.'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
