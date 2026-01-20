import { Code2, Database, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Automation & AI Workflows',
    description: 'Custom automation using APIs, scripts, and AI-assisted tools to handle follow-ups, intake, and internal processes.'
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Full-stack web applications built with modern, maintainable technologies.'
  },
  {
    icon: Database,
    title: 'Systems Integration',
    description: 'Connecting existing tools, databases, and services into a cohesive workflow.'
  },
  {
    icon: Shield,
    title: 'Technical Consulting',
    description: 'Architecture review, tooling guidance, and implementation support.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Practical automation, AI-assisted workflows, and custom software for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
