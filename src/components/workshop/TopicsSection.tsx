import { motion } from "framer-motion";
import { Brain, Code, Image, MessageSquare, Layers, Zap } from "lucide-react";
import { useScrollReveal, useParallax } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/i18n";
import SplitText from "./SplitText";

const TopicsSection = () => {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal({ threshold: 0.3 });
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.1 });
  const { ref: parallaxRef, offset: parallaxOffset } = useParallax(0.3);
  const { t } = useTranslation();

  const topics = [
    { icon: MessageSquare, titleKey: "topicPrompt", descKey: "topicPromptDesc" },
    { icon: Code,          titleKey: "topicRAG",    descKey: "topicRAGDesc" },
    { icon: Image,         titleKey: "topicImage",  descKey: "topicImageDesc" },
    { icon: Brain,         titleKey: "topicFineTune", descKey: "topicFineTuneDesc" },
    { icon: Layers,        titleKey: "topicAgents", descKey: "topicAgentsDesc" },
    { icon: Zap,           titleKey: "topicDeploy", descKey: "topicDeployDesc" },
  ];

  return (
    <section id="topics" className="py-32 px-6 relative overflow-hidden section-fade-primary video-bg-light particle-bg-light neural-network-bg cyber-grid-bg">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-bounce-subtle"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-rotate-slow"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`topic-particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-accent/50 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4], scale: [1, 1.4, 1] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <div
        ref={parallaxRef}
        className="absolute top-0 left-0 w-full h-full parallax-bg opacity-30"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />

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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={titleRef}
          className={`text-center mb-16 ${titleRevealed ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-advanced mb-6 animate-slide-up">
            <Brain className="w-5 h-5 text-primary animate-bounce-subtle" />
            <span className="text-sm font-mono-display text-primary font-bold">{t("advancedCurriculum")}</span>
          </motion.div>

          <h2 className="text-display-xl mb-6 leading-tight text-shadow-strong">
            <SplitText text={t("topicsTitle")} className="text-foreground text-readable" delay={0.2} />
            <br />
            <span className="text-gradient-animated">{t("topicsTitleHighlight")}</span>
          </h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={titleRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t("topicsSubtitle")}{" "}
            <span className="text-primary font-semibold">{t("topicsSubtitleHighlight")}</span>{" "}
            {t("topicsSubtitleEnd")}
          </motion.p>
        </motion.div>

        <motion.div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              className={`glass-advanced rounded-2xl p-8 hover-lift interactive-card magnetic-element group ${gridRevealed ? 'scroll-scale revealed' : 'scroll-scale'}`}
              initial={{ opacity: 0, y: 50 }}
              animate={gridRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl animate-background-fade opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:animate-morph-shape transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <topic.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold font-mono-display mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {t(topic.titleKey as any)}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {t(topic.descKey as any)}
                </p>
                <motion.div
                  className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={gridRevealed ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-color-shift" />
        </motion.div>
      </div>
    </section>
  );
};

export default TopicsSection;