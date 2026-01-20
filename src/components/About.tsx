import { Award, Users, Clock, Heart } from 'lucide-react';

const stats = [
  { icon: Clock, value: '8+', label: 'Years Experience' },
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Award, value: '100+', label: 'Projects Completed' },
  { icon: Heart, value: '100%', label: 'Client Satisfaction' }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I'm a passionate software engineer with over 8 years of experience building
                web and mobile applications. I specialize in creating performant, scalable
                solutions that solve real-world problems.
              </p>
              <p>
                My journey in software development started with a curiosity about how things work,
                which evolved into a career dedicated to continuous learning and innovation.
                I believe in writing clean, maintainable code and following best practices.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects,
                mentoring aspiring developers, or exploring new technologies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-800 p-8 rounded-xl text-center hover:bg-slate-700 transition-colors border border-slate-700"
                >
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl mb-2 text-white">
                    {stat.value}
                  </div>
                  <div className="text-slate-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
