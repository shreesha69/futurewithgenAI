import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Footer = () => {
  const { ref: footerRef, isRevealed } = useScrollReveal({ threshold: 0.1 });

  return (
    <footer
      ref={footerRef}
      className="py-16 px-6 border-t border-border/30 bg-gradient-to-r from-background via-background/95 to-background relative overflow-hidden section-fade-primary video-bg-light particle-bg-light ai-texture-bg"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-background-fade" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/15 rounded-full animate-parallax-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Branding and partners */}
          <motion.div
            className={`space-y-6 ${isRevealed ? 'scroll-reveal-left revealed' : 'scroll-reveal-left'}`}
          >
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-advanced mb-6 animate-slide-up"
                initial={{ opacity: 0, y: 20 }}
                animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="w-5 h-5 text-primary animate-bounce-subtle" />
                <span className="text-sm font-mono-display text-primary font-bold">GenAI Workshop</span>
              </motion.div>

              <h3 className="text-display-lg text-foreground mb-4 text-gradient-animated text-shadow-strong">
                Empowering Future Innovators
              </h3>
              <motion.p
                className="text-body-sm text-muted-foreground leading-relaxed text-readable text-shadow-soft"
                initial={{ opacity: 0 }}
                animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Empowering college students in Pondicherry to master generative AI through hands-on learning and real-world applications.
              </motion.p>
            </div>

            <motion.div
              className="glass-advanced rounded-xl p-6 hover-lift interactive-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-sm font-mono-display mb-3">
                <span className="text-foreground font-bold text-lg tracking-wide text-gradient-modern animate-text-glow">
                  "Made possible by"
                </span>
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <span className="text-primary font-bold text-xl animate-bounce-subtle">⭐</span>
                  <div>
                    <span className="text-primary font-bold hover:text-accent transition-colors cursor-default text-lg">
                      Mensagam
                    </span>
                    <p className="text-xs text-muted-foreground">(Tech Partner)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <span className="text-accent font-bold text-xl animate-bounce-subtle">✨</span>
                  <div>
                    <span className="text-accent font-bold hover:text-primary transition-colors cursor-default text-lg">
                      RP Mission Foundation
                    </span>
                    <p className="text-xs text-muted-foreground">(NGO Partner)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Navigation links */}
          <motion.div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isRevealed ? 'scroll-reveal-right revealed' : 'scroll-reveal-right'}`}
          >
            <div className="w-full">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-bold animate-color-shift">
                Quick Links
              </p>
              <div className="flex flex-col gap-4">
                <motion.a
                  href="#topics"
                  className="group relative text-sm font-mono-display text-foreground hover:text-primary transition-all duration-300 magnetic-hover"
                  whileHover={{ x: 5 }}
                >
                  Topics
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
                <motion.a
                  href="#schedule"
                  className="group relative text-sm font-mono-display text-foreground hover:text-primary transition-all duration-300 magnetic-hover"
                  whileHover={{ x: 5 }}
                >
                  Schedule
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
                <motion.a
                  href="#register"
                  className="group relative text-sm font-mono-display text-foreground hover:text-primary transition-all duration-300 magnetic-hover"
                  whileHover={{ x: 5 }}
                >
                  Register
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              </div>
            </div>

            {/* Contact Information */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-bold">
                <span className="text-foreground font-bold text-lg tracking-wide text-gradient-modern animate-text-glow">
                  "Stay with us"
                </span>
              </p>
              <div className="flex flex-col gap-3">
                <motion.a
                  href="tel:9566738366"
                  className="group relative text-sm font-mono-display text-foreground hover:text-primary transition-all duration-300 magnetic-hover"
                  whileHover={{ x: 5 }}
                >
                  📞 9566738366
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
                <motion.a
                  href="https://www.mensagam.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-sm font-mono-display text-foreground hover:text-primary transition-all duration-300 magnetic-hover"
                  whileHover={{ x: 5 }}
                >
                  🌐 mensagam.com
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rajendhraprasath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-sm font-mono-display text-foreground hover:text-primary transition-all duration-300 magnetic-hover"
                  whileHover={{ x: 5 }}
                >
                  💼 LinkedIn
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom divider with animation */}
        <motion.div
          className="border-t border-border/30 pt-8 text-center"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isRevealed ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.p
            className="text-sm text-muted-foreground font-mono-display mb-4 glitter-text"
            initial={{ opacity: 0 }}
            animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Empowering the next generation of AI innovators • March 2026
          </motion.p>

          {/* Animated accent line */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-color-shift" />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
