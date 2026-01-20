const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML/CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs']
  },
  {
    title: 'Mobile',
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo']
  },
  {
    title: 'Tools & Cloud',
    skills: ['Git', 'Docker', 'AWS', 'Firebase', 'CI/CD', 'Linux']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A diverse toolkit for building modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl mb-6 text-slate-900 border-b border-slate-200 pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
