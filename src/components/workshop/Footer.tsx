const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30 bg-gradient-to-r from-background via-background/95 to-background relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          {/* Left: Branding and partners */}
          <div>
            <h3 className="text-xl font-bold font-mono-display text-foreground mb-4">GenAI-Workshop</h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">© 2026 Generative AI Workshop. All rights reserved.</p>
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-all duration-300 group">
                <p className="text-sm font-mono-display">
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">Made possible by</span>
                </p>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold text-lg">⭐</span>
                    <span className="text-primary font-bold hover:text-accent transition-colors cursor-default">Mensagam</span>
                    <span className="text-foreground/40">(Tech Partner)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-bold text-lg">✨</span>
                    <span className="text-accent font-bold hover:text-primary transition-colors cursor-default">RP Mission Foundation</span>
                    <span className="text-foreground/40">(NGO Partner)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Navigation links */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-bold">Quick Links</p>
              <div className="flex flex-col md:flex-row gap-6">
                <a 
                  href="#topics" 
                  className="group relative text-sm font-mono-display text-foreground hover:text-primary transition-colors"
                >
                  Topics
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
                <a 
                  href="#schedule" 
                  className="group relative text-sm font-mono-display text-foreground hover:text-primary transition-colors"
                >
                  Schedule
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
                <a 
                  href="#register" 
                  className="group relative text-sm font-mono-display text-foreground hover:text-primary transition-colors"
                >
                  Register
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-border/20 pt-6 text-center">
          <p className="text-xs text-muted-foreground font-mono-display">
            Empowering the next generation of AI innovators • March 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
