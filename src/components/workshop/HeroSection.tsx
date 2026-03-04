import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, Clock, MapPin, Users } from "lucide-react";
import aiHead from "@/assets/ai-head.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-30" />

      {/* Wave decoration at bottom */}
      <div className="wave-decoration" />

      {/* Floating decorative dots */}
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-24 right-32 hidden lg:flex gap-1"
      >
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-primary" />
        ))}
      </motion.div>

      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-32 left-16 hidden lg:flex gap-1"
      >
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-primary" />
        ))}
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono-display text-primary">Free Workshop · March 2026</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mb-4"
          >
            <p className="text-sm text-muted-foreground font-mono-display">
              An initiative by <span className="text-primary font-semibold">Mensagam</span> & <span className="text-accent font-semibold">RP Mission Foundation</span>
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-mono-display leading-tight mb-6"
          >
            <span className="text-foreground">GENERATIVE</span>
            <br />
            <span className="text-gradient-primary glow-text">AI WORKSHOP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
          >
            Empowering college students in Pondicherry to master generative AI — from prompt engineering to building real-world AI applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-mono-display font-semibold text-sm glow-primary hover:brightness-110 transition-all"
            >
              Register Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#topics"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-mono-display font-semibold text-sm hover:bg-secondary transition-all"
            >
              View Agenda
            </a>
          </motion.div>

          {/* Quick info strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <div>
                <span className="text-xs font-bold text-foreground font-mono-display">9–13 March</span>
                <p className="text-[10px] text-muted-foreground">5 Days</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <div>
                <span className="text-xs font-bold text-foreground font-mono-display">7–8 PM</span>
                <p className="text-[10px] text-muted-foreground">Daily</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <div>
                <span className="text-xs font-bold text-foreground font-mono-display">Online</span>
                <p className="text-[10px] text-muted-foreground">Live Sessions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <div>
                <span className="text-xs font-bold text-foreground font-mono-display">Free</span>
                <p className="text-[10px] text-muted-foreground">For Students</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right visual - AI Head */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          {/* Glow behind the head */}
          <div className="absolute w-80 h-80 rounded-full bg-accent/20 blur-[80px]" />
          <div className="absolute w-60 h-60 rounded-full bg-primary/15 blur-[60px] translate-x-8" />

          <img
            src={aiHead}
            alt="AI wireframe head representing generative artificial intelligence"
            className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl"
          />

          {/* Floating hexagon decorations */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-10 right-4 w-8 h-8 border-2 border-accent/40 rotate-45"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-20 left-4 w-4 h-4 bg-primary/30 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
