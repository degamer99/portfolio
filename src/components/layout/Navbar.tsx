import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="glass-nav">
      <div className="max-w-6xl mx-auto px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 flex items-center justify-center text-white font-bold">
            {PORTFOLIO_DATA.name.split(' ').map(n => n[0]).join('')}
          </div>
          <a href="#" className="font-semibold text-lg tracking-tight text-slate-900">
            {PORTFOLIO_DATA.name}
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#" className="btn-primary">
            Download CV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-white border-b border-zinc-200 p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-medium text-zinc-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
