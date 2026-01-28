import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center text-white">
          <div className="animate-fade-in-down">
            <h2 className="text-lg md:text-xl font-semibold mb-2 text-cyan-200">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
              Mohamed Bouissa
            </h1>
            <p className="text-xl md:text-3xl mb-8 text-blue-100">
              Full Stack Web & App Developer
            </p>
          </div>

          <div className="animate-fade-in-up mb-12">
            <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto">
              Crafting digital experiences with modern technologies and creative solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-blue-600 transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-blue-600 transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-blue-600 transition-all transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s backwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.6s backwards;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;
