import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with payment integration, inventory management, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1627599936744-51d288f89af4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg4NjI1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and progress with social features.',
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njg4MDQ4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React Native', 'Firebase', 'Redux'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization, user management, and reporting features.',
    image: 'https://images.unsplash.com/photo-1508361727343-ca787442dcd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODc2MTQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A selection of recent work showcasing my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
            >
              <div className="relative h-48 bg-slate-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-3 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
