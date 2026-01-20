import { Code, Database, Globe, Terminal, Shield } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Code },
  { name: 'JavaScript / TypeScript', icon: Code },
  { name: 'HTML / CSS', icon: Globe },
  { name: 'Flask', icon: Code },
  { name: 'SQL / PostgreSQL', icon: Database },
  { name: 'REST APIs', icon: Globe },
  { name: 'Git & GitHub', icon: Code },
  { name: 'Bash / Command Line', icon: Terminal },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Skills
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I work with daily
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="bg-slate-800 p-6 rounded-xl text-center hover:bg-slate-700 transition-colors border border-slate-700">
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-white">
                  {skill.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
