import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, Clock, MapPin, Users, Brain, Cpu, Zap } from "lucide-react";
import aiHead from "@/assets/ai-head.png";
import { useTranslation } from "@/i18n";
import SplitText from "@/components/SplitText";
import MouseTracker from "@/components/MouseTracker";

const HeroSection = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingIcons = [
    { Icon: Brain, delay: 0, x: 100, y: 50 },
    { Icon: Cpu, delay: 1, x: 200, y: 150 },
    { Icon: Sparkles, delay: 2, x: 300, y: 100 },
    { Icon: Zap, delay: 3, x: 150, y: 200 },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 hero-gradient particle-bg floating-elements ai-texture-bg cyber-grid-bg">
      <MouseTracker />

      <motion.div style={{ y }} className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      <motion.div style={{ y }} className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-5 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-5 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-radial from-primary/15 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-accent/15 to-transparent rounded-full blur-3xl animate-bounce-subtle" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-primary/60 rounded-full animate-particle-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
            animate={{ y: [0, -25, 0], opacity: [0.3, 0.9, 0.3], scale: [1, 1.8, 1] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {[...Array(12)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${15 + Math.random() * 70}%`}
            y1={`${15 + Math.random() * 70}%`}
            x2={`${15 + Math.random() * 70}%`}
            y2={`${15 + Math.random() * 70}%`}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="8,8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: i * 0.6, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </svg>

      <div className="absolute bottom-0 left-0 w-full h-32 opacity-30 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,50 Q300,20 600,50 T1200,50"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M0,50 Q300,20 600,50 T1200,50",
                "M0,30 Q300,70 600,30 T1200,30",
                "M0,70 Q300,30 600,70 T1200,70",
                "M0,50 Q300,20 600,50 T1200,50",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/30 rounded-lg rotate-45 animate-float glass-morphism"
        animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-24 h-24 bg-accent/20 rounded-full animate-bounce-subtle blur-sm"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-16 h-16 border-2 border-accent/40 animate-rotate-slow"
        animate={{
          borderColor: ["hsl(var(--accent) / 0.4)", "hsl(var(--primary) / 0.4)", "hsl(var(--accent) / 0.4)"],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />

      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          style={{ left: x, top: y }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 4 + delay, repeat: Infinity, delay: delay, ease: "easeInOut" }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      ))}

      <motion.div
        className="absolute pointer-events-none z-0"
        style={{ left: mousePosition.x - 150, top: mousePosition.y - 150, width: 300, height: 300 }}
        animate={{
          background: [
            "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + (mousePosition.x / window.innerWidth) * 20}% ${50 + (mousePosition.y / window.innerHeight) * 20}%, hsl(var(--primary) / 0.05) 0%, transparent 50%)`,
          opacity,
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

            {/* ✅ Free Workshop Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-6 mt-10 animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-primary animate-bounce-subtle" />
              <span className="text-sm font-mono-display text-primary font-bold">{t("freeWorkshop")}</span>
            </div>

            {/* Initiative By */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default mb-6 magnetic-hover">
              <span className="text-xs text-primary font-bold">✨</span>
              <span className="text-foreground font-mono-display">{t("initiativeBy")}</span>
              <span className="text-primary font-bold hover:text-accent transition-colors ml-2">Mensagam</span>
              <span className="text-foreground/60 mx-2">|</span>
              <span className="text-accent font-bold hover:text-primary transition-colors">RP Mission Foundation</span>
              <span className="text-xs text-accent font-bold ml-2">✨</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-display-2xl leading-tight mb-6 text-shadow-strong"
            >
              <SplitText
                text="GENERATIVE AI WORKSHOP"
                className="text-gradient-animated animate-text-glow"
                delay={0.05}
                animationType="characters"
              />
              <motion.div
                className="mt-4 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-readable text-shadow-soft"
            >
              {t("heroDesc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-mono-display font-semibold text-sm glow-primary hover:brightness-110 transition-all magnetic-hover group interactive-glow animate-neon-primary text-shadow-soft"
              >
                {t("registerFree")}
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </motion.a>
              <motion.a
                href="#topics"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-mono-display font-semibold text-sm hover:bg-secondary transition-all magnetic-hover group glass-advanced text-shadow-soft"
              >
                {t("viewAgenda")}
                <motion.div
                  className="w-2 h-2 bg-accent rounded-full ml-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-md"
            >
              <motion.div className="holographic-card p-4 text-center group" whileHover={{ scale: 1.05, y: -5 }}>
                <motion.div className="text-2xl font-bold text-primary mb-1 font-mono-display text-shadow-soft" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  50+
                </motion.div>
                <div className="text-xs text-muted-foreground font-mono-display">{t("students")}</div>
              </motion.div>
              <motion.div className="holographic-card p-4 text-center group" whileHover={{ scale: 1.05, y: -5 }}>
                <motion.div className="text-2xl font-bold text-accent mb-1 font-mono-display text-shadow-soft" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>
                  5
                </motion.div>
                <div className="text-xs text-muted-foreground font-mono-display">{t("sessions")}</div>
              </motion.div>
              <motion.div className="holographic-card p-4 text-center group" whileHover={{ scale: 1.05, y: -5 }}>
                <motion.div className="text-2xl font-bold text-primary mb-1 font-mono-display text-shadow-soft" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
                  {t("registerFree").split(" ")[0]}
                </motion.div>
                <div className="text-xs text-muted-foreground font-mono-display">{t("workshop")}</div>
              </motion.div>
            </motion.div>

            {/* Quick info strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <motion.div whileHover={{ scale: 1.05, y: -3 }} className="holographic-card p-4 text-center group cursor-pointer magnetic-hover">
                <Calendar className="w-6 h-6 text-primary mx-auto mb-2 group-hover:animate-bounce-subtle" />
                <div className="text-sm font-bold text-foreground font-mono-display text-shadow-soft">9–13 March</div>
                <div className="text-xs text-muted-foreground text-shadow-soft">{t("days")}</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} className="holographic-card p-4 text-center group cursor-pointer magnetic-hover">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2 group-hover:animate-bounce-subtle" />
                <div className="text-sm font-bold text-foreground font-mono-display text-shadow-soft">7–8 PM</div>
                <div className="text-xs text-muted-foreground text-shadow-soft">{t("daily")}</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} className="holographic-card p-4 text-center group cursor-pointer magnetic-hover">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2 group-hover:animate-bounce-subtle" />
                <div className="text-sm font-bold text-foreground font-mono-display text-shadow-soft">Online</div>
                <div className="text-xs text-muted-foreground text-shadow-soft">{t("liveSessions")}</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} className="holographic-card p-4 text-center group cursor-pointer magnetic-hover">
                <Users className="w-6 h-6 text-primary mx-auto mb-2 group-hover:animate-bounce-subtle" />
                <div className="text-sm font-bold text-foreground font-mono-display text-shadow-soft">{t("registerFree").split(" ")[0]}</div>
                <div className="text-xs text-muted-foreground text-shadow-soft">{t("forStudents")}</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right visual - AI Head */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-80 h-80 rounded-full bg-accent/20 blur-[80px]" />
          <div className="absolute w-60 h-60 rounded-full bg-primary/15 blur-[60px] translate-x-8" />
          <motion.img
            src={aiHead}
            alt="AI wireframe head representing generative artificial intelligence"
            className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl"
            animate={{ y: [0, -10, 0], filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"] }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 2, repeat: Infinity }
            }}
          />
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
          <motion.div
            animate={{ x: [-5, 5, -5], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 right-8 w-6 h-6 border border-primary/30 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-border/50 rounded-full flex justify-center glass-advanced">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;