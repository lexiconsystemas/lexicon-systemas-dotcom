import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Lexicon Systemas · Built by Simone Lawson
          </p>

          <div className="flex gap-6">
            <a 
              href="mailto:simonerlawson@gmail.com" 
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/simonerlawson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/studiosaturnent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
