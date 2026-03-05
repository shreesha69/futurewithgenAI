import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useTranslation } from "@/i18n";

const days = [
  {
    day: "Day 1",
    date: "March 9",
    title: "Foundations",
    color: "from-primary to-accent",
    sessions: [
      { time: "7:00 PM", topic: "Intro to Generative AI Landscape" },
      { time: "7:30 PM", topic: "Hands-on: Your First LLM Prompt" },
    ],
  },
  {
    day: "Day 2",
    date: "March 10",
    title: "Prompt Engineering",
    color: "from-accent to-primary",
    sessions: [
      { time: "7:00 PM", topic: "Advanced Prompting Techniques" },
      { time: "7:30 PM", topic: "Hands-on: Chain-of-Thought & Few-Shot" },
    ],
  },
  {
    day: "Day 3",
    date: "March 11",
    title: "Building with LLMs",
    color: "from-primary to-accent",
    sessions: [
      { time: "7:00 PM", topic: "LLM APIs & Integration" },
      { time: "7:30 PM", topic: "Hands-on: Build an AI-Powered App" },
    ],
  },
  {
    day: "Day 4",
    date: "March 12",
    title: "Image & Multimodal AI",
    color: "from-accent to-primary",
    sessions: [
      { time: "7:00 PM", topic: "Image Generation & Diffusion Models" },
      { time: "7:30 PM", topic: "Hands-on: Multimodal AI Workflows" },
    ],
  },
  {
    day: "Day 5",
    date: "March 13",
    title: "AI Agents & Next Steps",
    color: "from-primary to-accent",
    sessions: [
      { time: "7:00 PM", topic: "AI Agents, RAG & Tool Use" },
      { time: "7:30 PM", topic: "Q&A, Career Paths & Resources" },
    ],
  },
];

const ScheduleSection = () => {
  const { t } = useTranslation();

  return (
    <section id="schedule" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] opacity-30" />
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono-display mb-4">
            {t("schedule")} <span className="text-gradient-primary">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("fiveEvenings")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {days.map((day, idx) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className={`bg-gradient-to-br ${day.color} bg-clip-text text-transparent text-sm font-bold mb-2`}>
                {day.day}
              </div>
              <h3 className="text-lg font-bold font-mono-display text-foreground mb-1">
                {day.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-4">{day.date}</p>
              <div className="space-y-3">
                {day.sessions.map((session, i) => (
                  <div key={i} className="flex gap-2 text-xs">
                    <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{session.time}</p>
                      <p className="text-muted-foreground text-xs">{session.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
