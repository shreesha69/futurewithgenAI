const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono-display">
        <div className="text-center md:text-left">
          <p>© 2026 Generative AI Workshop</p>
          <p className="text-xs mt-1">
            Tech Partner: <span className="text-primary">Mensagam</span> · NGO Partner: <span className="text-accent">RP Mission Foundation</span>
          </p>
        </div>
        <div className="flex gap-6">
          <a href="#topics" className="hover:text-primary transition-colors">Topics</a>
          <a href="#schedule" className="hover:text-primary transition-colors">Schedule</a>
          <a href="#register" className="hover:text-primary transition-colors">Register</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
