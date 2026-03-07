import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "@/i18n";

const testimonies = [
  {
    event: "GenAI Summit 2025",
    quote: "This workshop gave me the tools to launch my own AI startup!",
    author: "Jane Doe, Founder",
  },
  {
    event: "OpenAI Community Meetup",
    quote: "Hands-on sessions were incredibly practical and inspiring.",
    author: "John Smith, AI Engineer",
  },
  {
    event: "AI Expo Berlin",
    quote: "A must-attend for anyone serious about generative models.",
    author: "Maria Gonzalez, Researcher",
  },
];

const TestimonySection = () => {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.2 });
  const { t } = useTranslation();

  return (
    <section id="testimonies" className="py-32 px-6 relative overflow-hidden section-fade-primary video-bg-light particle-bg-light">
      <div className="absolute inset-0 dot-pattern opacity-35" />
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 animate-background-fade" />

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-primary/35 via-accent/25 to-transparent rounded-full blur-3xl animate-pulse-slow"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-accent/35 via-primary/25 to-transparent rounded-full blur-3xl animate-pulse-slow"
          animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary/15 to-transparent rounded-full blur-3xl animate-pulse-slow"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-primary/25 rounded-full animate-parallax-float shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
            animate={{ y: [0, -25, 0], opacity: [0.4, 0.8, 0.4], scale: [1, 1.6, 1] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-advanced mb-6 animate-slide-up shadow-xl">
            <Star className="w-5 h-5 text-primary animate-bounce-subtle" />
            <span className="text-sm font-mono-display text-primary font-bold">{t("testimonialsBadge")}</span>
          </motion.div>

          <h2 className="text-display-xl mb-6 leading-tight text-shadow-strong">
            {t("testimonialsTitle")}
          </h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("testimonialsSubtitle")}{" "}
            <span className="text-primary font-semibold">{t("testimonialsSubtitleHighlight")}</span>.
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonies.map((item, idx) => (
            <motion.div
              key={idx}
              className={`glass-advanced rounded-2xl p-6 hover-lift interactive-card magnetic-element group shadow-xl border border-border/20 ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              } ${idx === 1 ? 'lg:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />

              <div className="relative z-10">
                <Quote className="w-8 h-8 text-primary/60 mb-4 group-hover:text-primary transition-colors duration-300" />
                <p className="italic text-foreground/90 mb-4 group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.author}
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {item.event}
                    </p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors duration-300"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isRevealed ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-color-shift shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonySection;