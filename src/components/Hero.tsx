import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1580894897591-ff1e18c89183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwY29kaW5nfGVufDF8fHx8MTc2ODg0Mzg0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Coding background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm">
          Available for Freelance Work
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-6 text-white">
          Lexicon Systemas
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Practical automation & custom software
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
          Built by Simone Lawson — a software engineer focused on clean systems,
          reliability, and real-world use cases.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#contact"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 text-lg"
          >
            Get in touch
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/lexiconsystemas"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-600 text-lg"
          >
            GitHub
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/lexiconsystemas"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-700/50 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors border border-slate-600"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a 
            href="https://www.linkedin.com/in/simonerlawson"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-700/50 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors border border-slate-600"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a 
            href="mailto:hello@lexiconsystemas.com"
            className="w-12 h-12 bg-slate-700/50 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors border border-slate-600"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full p-1">
          <div className="w-1.5 h-2 bg-slate-400 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
