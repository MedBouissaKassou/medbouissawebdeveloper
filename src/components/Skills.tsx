import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 88 },
        { name: 'Vue.js', level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Express', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 87 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 94 },
        { name: 'Docker', level: 82 },
        { name: 'AWS', level: 80 },
        { name: 'Firebase', level: 88 },
        { name: 'REST APIs', level: 95 },
      ],
    },
  ];

  const technologies = [
    { name: 'React', color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', color: 'from-green-500 to-green-600' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-700' },
    { name: 'MongoDB', color: 'from-green-600 to-green-700' },
    { name: 'PostgreSQL', color: 'from-blue-500 to-blue-600' },
    { name: 'Next.js', color: 'from-gray-800 to-gray-900' },
    { name: 'Tailwind', color: 'from-cyan-400 to-blue-500' },
    { name: 'Express', color: 'from-gray-700 to-gray-800' },
    { name: 'Docker', color: 'from-blue-500 to-blue-600' },
    { name: 'AWS', color: 'from-orange-500 to-orange-600' },
    { name: 'Git', color: 'from-orange-600 to-red-600' },
    { name: 'Firebase', color: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Skills & Tech Stack
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg transition-all duration-1000 hover:shadow-2xl ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-1500 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${
                            categoryIndex * 200 + skillIndex * 100
                          }ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`px-6 py-3 bg-gradient-to-r ${tech.color} text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all transform hover:scale-110 cursor-pointer`}
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.6s ease-out ${index * 0.05}s both`
                    : 'none',
                }}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
