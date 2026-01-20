import { Code2, Smartphone, Globe, Database, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Next.js, and Vue.js.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Scalable server-side solutions with Node.js, Python, and cloud services.'
  },
  {
    icon: Code2,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs designed for performance and reliability.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your applications with code optimization and best practices.'
  },
  {
    icon: Shield,
    title: 'Security Consulting',
    description: 'Secure your applications with comprehensive security audits and implementations.'
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
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="p-8 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-slate-900">
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
