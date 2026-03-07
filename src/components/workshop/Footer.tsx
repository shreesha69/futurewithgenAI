import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTranslation } from "@/i18n";
import logo1 from "@/assets/logo1.png";

const Footer = () => {
  const { ref: footerRef, isRevealed } = useScrollReveal({ threshold: 0.1 });
  const { t } = useTranslation();

  return (
    <footer
      ref={footerRef}
      className="py-16 px-6 border-t border-border/30 bg-gradient-to-r from-background via-background/95 to-background relative overflow-hidden section-fade-primary video-bg-light particle-bg-light ai-texture-bg"
    >
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-background-fade" />

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
          <motion.div className={`space-y-6 ${isRevealed ? 'scroll-reveal-left revealed' : 'scroll-reveal-left'}`}>
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
                {t("footerTagline")}
              </h3>
              <motion.p
                className="text-body-sm text-muted-foreground leading-relaxed text-readable text-shadow-soft"
                initial={{ opacity: 0 }}
                animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("footerDesc")}
              </motion.p>
            </div>

            {/* Made Possible By */}
            <motion.div
              className="glass-advanced rounded-xl p-6 hover-lift interactive-card border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-sm font-mono-display mb-4">
                <span className="text-foreground font-extrabold text-lg tracking-widest uppercase text-gradient-animated animate-text-glow border-b border-primary/30 pb-1">
                  {t("madePossibleBy")}
                </span>
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4 group">
                  <motion.img
                    src={logo1}
                    alt="Mensagam Logo"
                    className="w-10 h-10 object-contain rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <span className="text-primary font-extrabold text-lg hover:text-accent transition-colors cursor-default tracking-wide">
                      Mensagam
                    </span>
                    <p className="text-xs text-muted-foreground font-mono-display mt-0.5">{t("techPartner")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border border-accent/30"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-accent font-bold text-lg">✦</span>
                  </motion.div>
                  <div>
                    <span className="text-accent font-extrabold text-lg hover:text-primary transition-colors cursor-default tracking-wide">
                      RP Mission Foundation
                    </span>
                    <p className="text-xs text-muted-foreground font-mono-display mt-0.5">{t("ngoPartner")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Navigation links */}
          <motion.div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isRevealed ? 'scroll-reveal-right revealed' : 'scroll-reveal-right'}`}>

            {/* Quick Links */}
            <div className="w-full">
              <motion.div
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                <p className="text-sm uppercase tracking-widest text-foreground font-extrabold">
                  {t("quickLinks")}
                </p>
              </motion.div>
              <div className="flex flex-col gap-4">
                {[
                  { href: "#topics",   label: `🎯 ${t("topics")}` },
                  { href: "#schedule", label: `📅 ${t("schedule")}` },
                  { href: "#register", label: `✅ ${t("registerTitle")}` },
                ].map(({ href, label }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    className="group relative text-sm font-mono-display text-foreground hover:text-primary transition-all duration-300 magnetic-hover flex items-center gap-2"
                    whileHover={{ x: 8 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  >
                    <span className="font-semibold">{label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Stay With Us */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full" />
                <p className="text-sm uppercase tracking-widest text-foreground font-extrabold">
                  {t("stayWithUs")}
                </p>
              </motion.div>
              <div className="flex flex-col gap-4">
                {[
                  { href: "tel:9566738366", label: "📞 9566738366", external: false },
                  { href: "https://www.mensagam.com/", label: "🌐 mensagam.com", external: true },
                  { href: "https://www.linkedin.com/in/rajendhraprasath/", label: "💼 LinkedIn", external: true },
                ].map(({ href, label, external }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group relative text-sm font-mono-display text-foreground hover:text-accent transition-all duration-300 magnetic-hover flex items-center gap-2"
                    whileHover={{ x: 8 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  >
                    <span className="font-semibold">{label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300 rounded-full" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom divider with quote */}
        <motion.div
          className="border-t border-border/30 pt-8 text-center"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isRevealed ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.p
            className="text-base text-foreground font-mono-display mb-1 italic font-medium glitter-text"
            initial={{ opacity: 0, y: 10 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            "{t("footerQuote")}"
          </motion.p>
          <motion.p
            className="text-sm text-primary font-extrabold font-mono-display mb-4 tracking-widest"
            initial={{ opacity: 0, y: 10 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            — Mensagam & RP Mission Foundation
          </motion.p>
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