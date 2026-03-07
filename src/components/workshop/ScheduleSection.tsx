import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useTranslation } from "@/i18n";
import { useScrollReveal, useParallax } from "@/hooks/useScrollReveal";
import SplitText from "./SplitText";

const ScheduleSection = () => {
  const { t } = useTranslation();
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal({ threshold: 0.3 });
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.1 });
  const { ref: parallaxRef, offset: parallaxOffset } = useParallax(0.2);

  const days = [
    {
      day: "Day 1",
      date: "March 9",
      titleKey: "day1Title",
      color: "from-primary to-accent",
      sessions: [
        { time: "7:00 PM", topicKey: "day1s1" },
        { time: "7:30 PM", topicKey: "day1s2" },
      ],
    },
    {
      day: "Day 2",
      date: "March 10",
      titleKey: "day2Title",
      color: "from-accent to-primary",
      sessions: [
        { time: "7:00 PM", topicKey: "day2s1" },
        { time: "7:30 PM", topicKey: "day2s2" },
      ],
    },
    {
      day: "Day 3",
      date: "March 11",
      titleKey: "day3Title",
      color: "from-primary to-accent",
      sessions: [
        { time: "7:00 PM", topicKey: "day3s1" },
        { time: "7:30 PM", topicKey: "day3s2" },
      ],
    },
    {
      day: "Day 4",
      date: "March 12",
      titleKey: "day4Title",
      color: "from-accent to-primary",
      sessions: [
        { time: "7:00 PM", topicKey: "day4s1" },
        { time: "7:30 PM", topicKey: "day4s2" },
      ],
    },
    {
      day: "Day 5",
      date: "March 13",
      titleKey: "day5Title",
      color: "from-primary to-accent",
      sessions: [
        { time: "7:00 PM", topicKey: "day5s1" },
        { time: "7:30 PM", topicKey: "day5s2" },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-32 px-6 relative overflow-hidden section-fade-accent video-bg-light particle-bg-light quantum-field-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-30 animate-parallax-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] opacity-30 animate-parallax-float" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div
        ref={parallaxRef}
        className="absolute inset-0 cyber-grid opacity-10"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      />

      {/* ✅ FIXED: replaced motion.path with regular path + motion wrapper */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="scheduleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
        {/* ✅ Using regular path — no d animation */}
        <path
          d="M200,400 Q400,300 600,400 T1000,400"
          stroke="url(#scheduleGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          strokeDasharray="1000"
          strokeDashoffset={gridRevealed ? 0 : 1000}
          style={{ transition: "stroke-dashoffset 2s ease 0.5s" }}
        />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={titleRef}
          className={`text-center mb-20 ${titleRevealed ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-advanced mb-6 animate-slide-up">
            <Clock className="w-5 h-5 text-accent animate-bounce-subtle" />
            <span className="text-sm font-mono-display text-accent font-bold">{t("scheduleBadge")}</span>
          </motion.div>

          <h2 className="text-display-xl mb-6 leading-tight text-center">
            <SplitText
              text={t("schedule")}
              className="text-foreground text-readable"
              delay={0.1}
            />
            <span className="text-gradient-animated ml-4">{t("scheduleTimeline")}</span>
          </h2>

          <motion.p
            className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-readable"
            initial={{ opacity: 0, y: 20 }}
            animate={titleRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("fiveEvenings")} {t("scheduleSubtitle")}{" "}
            <span className="text-primary font-semibold">{t("scheduleSubtitleHighlight")}</span>
            {t("scheduleSubtitleEnd")}
          </motion.p>
        </motion.div>

        <motion.div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {days.map((day, idx) => (
            <motion.div
              key={day.day}
              className={`glass-advanced rounded-2xl p-6 hover-lift interactive-card magnetic-element group relative overflow-hidden ${
                gridRevealed ? 'scroll-scale revealed' : 'scroll-scale'
              }`}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={gridRevealed ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${day.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-background-fade`} />

              {idx < days.length - 1 && (
                <motion.div
                  className="absolute -right-3 top-1/2 w-6 h-0.5 bg-gradient-to-r from-primary to-accent opacity-50"
                  initial={{ scaleX: 0 }}
                  animate={gridRevealed ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 + 0.5 }}
                />
              )}

              <div className="relative z-10">
                <div className={`bg-gradient-to-br ${day.color} bg-clip-text text-transparent text-sm font-bold mb-2 animate-color-shift`}>
                  {day.day}
                </div>
                <h3 className="text-xl font-bold font-mono-display text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {t(day.titleKey as any)}
                </h3>
                <p className="text-xs text-muted-foreground mb-4 font-semibold">{day.date}</p>

                <div className="space-y-4">
                  {day.sessions.map((session, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300 group/session"
                      initial={{ opacity: 0, x: -20 }}
                      animate={gridRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: idx * 0.2 + i * 0.1 + 0.3 }}
                    >
                      <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover/session:text-accent transition-colors" />
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-foreground text-sm group-hover/session:text-primary transition-colors">
                          {session.time}
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {t(session.topicKey as any)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline progress indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={gridRevealed ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="flex items-center gap-2 px-6 py-3 glass-advanced rounded-full">
            <div className="flex gap-1">
              {days.map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full"
                  initial={{ scale: 0 }}
                  animate={gridRevealed ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 + 1 }}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">{t("timelineDays")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;