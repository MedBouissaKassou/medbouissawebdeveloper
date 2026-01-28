import { User, Award, Target, Briefcase } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  const stats = [
    { icon: Briefcase, label: 'Projects Completed', value: '50+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: User, label: 'Happy Clients', value: '30+' },
    { icon: Target, label: 'Success Rate', value: '98%' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Hello!</h3>
              <p className="text-lg leading-relaxed mb-4">
                I'm Mohamed Bouissa, a passionate Full Stack Developer with expertise in building
                modern web and mobile applications. I specialize in creating scalable, user-friendly
                solutions that solve real-world problems.
              </p>
              <p className="text-lg leading-relaxed">
                With a strong foundation in both frontend and backend technologies, I bring ideas
                to life through clean code, elegant design, and innovative thinking. I'm committed
                to staying current with the latest technologies and best practices in the ever-evolving
                world of web development.
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={`bg-white rounded-2xl p-8 shadow-xl transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900">What I Do</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">UI/UX Design</h4>
              <p className="text-gray-600">
                Creating intuitive and visually appealing interfaces that enhance user experience
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Web Development</h4>
              <p className="text-gray-600">
                Building responsive, performant web applications using modern frameworks and tools
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Mobile Apps</h4>
              <p className="text-gray-600">
                Developing cross-platform mobile applications with native-like performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
