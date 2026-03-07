import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HelpCircle } from "lucide-react";
import { useTranslation } from "@/i18n";

const faqs = [
  {
    questionKey: "faqQ1",
    answerKey: "faqA1",
  },
  {
    questionKey: "faqQ2",
    answerKey: "faqA2",
  },
  {
    questionKey: "faqQ3",
    answerKey: "faqA3",
  },
];

const FaqSection = () => {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.2 });
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-32 px-6 relative overflow-hidden section-fade-primary video-bg-light particle-bg-light ai-texture-bg cyber-grid-bg">
      <div className="absolute inset-0 dot-pattern opacity-35" />
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-background-fade" />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-24 left-24 w-72 h-72 bg-primary/18 rounded-full blur-3xl animate-float"
          animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-24 right-24 w-64 h-64 bg-accent/18 rounded-full blur-3xl animate-bounce-subtle"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none">
        <defs>
          <pattern id="faqPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="hsl(var(--primary))" opacity="0.3">
              <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
            </circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faqPattern)" />
      </svg>

      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-primary/15 rounded-full animate-parallax-float shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-advanced mb-6 animate-slide-up shadow-xl">
            <HelpCircle className="w-5 h-5 text-primary animate-bounce-subtle" />
            <span className="text-sm font-mono-display text-primary font-bold">{t("faqBadge")}</span>
          </motion.div>

          <h2 className="text-display-xl mb-6 leading-tight text-shadow-strong">
            {t("faqTitle")}
          </h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("faqSubtitle")}{" "}
            <span className="text-primary font-semibold">{t("faqSubtitleHighlight")}</span>.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="glass-advanced rounded-2xl p-8 hover-lift interactive-card magnetic-element group shadow-2xl border border-border/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl animate-background-fade opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold font-mono-display mb-4 text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  {t(faq.questionKey as any)}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 pl-9">
                  {t(faq.answerKey as any)}
                </p>
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

export default FaqSection;