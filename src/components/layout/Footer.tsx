export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 py-16 bg-white">
      <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
          © {currentYear} Alex Thorne. Engineered for architecture and impact.
        </p>
        
        <div className="flex items-center space-x-10">
          <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-colors">Twitter</a>
          <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-colors">LinkedIn</a>
          <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-colors">Colophon</a>
        </div>
      </div>
    </footer>
  );
}
