import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Brain, ExternalLink } from "lucide-react";
import { useTranslation } from "@/i18n";

const experts = [
  {
    name: "Andrew Ng",
    title: "AI Researcher & Educator",
    quote: "AI is the new electricity.",
    link: "https://www.linkedin.com/in/andrewyng/",
  },
  {
    name: "Fei-Fei Li",
    title: "Professor, AI Vision",
    quote: "We need to democratize AI.",
    link: "https://www.linkedin.com/in/feifeili/",
  },
  {
    name: "Sam Altman",
    title: "CEO of OpenAI",
    quote: "At OpenAI we work to ensure that artificial general intelligence benefits all of humanity.",
    link: "https://www.linkedin.com/in/sama/",
  },
];

const ExpertsSection = () => {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.2 });
  const { t } = useTranslation();

  return (
    <section id="experts" className="py-32 px-6 relative overflow-hidden section-fade-primary video-bg-light particle-bg-light neural-network-bg">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-background-fade" />

      {/* Neural Flow Animation */}
      <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="neural-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
            <circle cx="12.5" cy="12.5" r="1.5" fill="currentColor" className="text-primary">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="4s" repeatCount="indefinite" />
            </circle>
            <line x1="12.5" y1="12.5" x2="25" y2="12.5" stroke="currentColor" strokeWidth="0.5" className="text-primary/50" opacity="0.6">
              <animate attributeName="stroke-dasharray" values="0,10;10,0" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="12.5" y1="12.5" x2="12.5" y2="25" stroke="currentColor" strokeWidth="0.5" className="text-primary/50" opacity="0.6">
              <animate attributeName="stroke-dasharray" values="0,10;10,0" dur="3s" repeatCount="indefinite" />
            </line>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-pattern)" />
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-parallax-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-advanced mb-6 animate-slide-up shadow-xl">
            <Brain className="w-5 h-5 text-primary animate-bounce-subtle" />
            <span className="text-sm font-mono-display text-primary font-bold">{t("thoughtLeaders")}</span>
          </motion.div>

          <h2 className="text-display-xl mb-6 leading-tight text-shadow-strong">
            {t("expertsSectionTitle")}
          </h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("expertsSubtitle")}{" "}
            <span className="text-primary font-semibold">{t("expertsSubtitleHighlight")}</span>.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((person, idx) => (
            <motion.div
              key={idx}
              className="glass-advanced rounded-2xl p-8 hover-lift interactive-card magnetic-element group shadow-2xl border border-border/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl animate-background-fade opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:animate-morph-shape transition-all duration-300">
                  <Brain className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold font-mono-display mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                  {person.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                  {person.title}
                </p>
                <p className="italic text-foreground/90 mb-4 group-hover:text-foreground transition-colors duration-300">
                  "{person.quote}"
                </p>
                <a
                  href={person.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary underline hover:text-accent transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t("linkedinProfile")}
                </a>
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

export default ExpertsSection;