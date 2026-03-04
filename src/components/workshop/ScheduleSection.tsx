import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const days = [
  {
    day: "Day 1",
    date: "March 9",
    title: "Foundations",
    sessions: [
      { time: "7:00 PM", topic: "Intro to Generative AI Landscape" },
      { time: "7:30 PM", topic: "Hands-on: Your First LLM Prompt" },
    ],
  },
  {
    day: "Day 2",
    date: "March 10",
    title: "Prompt Engineering",
    sessions: [
      { time: "7:00 PM", topic: "Advanced Prompting Techniques" },
      { time: "7:30 PM", topic: "Hands-on: Chain-of-Thought & Few-Shot" },
    ],
  },
  {
    day: "Day 3",
    date: "March 11",
    title: "Building with LLMs",
    sessions: [
      { time: "7:00 PM", topic: "LLM APIs & Integration" },
      { time: "7:30 PM", topic: "Hands-on: Build an AI-Powered App" },
    ],
  },
  {
    day: "Day 4",
    date: "March 12",
    title: "Image & Multimodal AI",
    sessions: [
      { time: "7:00 PM", topic: "Image Generation & Diffusion Models" },
      { time: "7:30 PM", topic: "Hands-on: Multimodal AI Workflows" },
    ],
  },
  {
    day: "Day 5",
    date: "March 13",
    title: "AI Agents & Next Steps",
    sessions: [
      { time: "7:00 PM", topic: "AI Agents, RAG & Tool Use" },
      { time: "7:30 PM", topic: "Q&A, Career Paths & Resources" },
    ],
  },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono-display mb-4">
            <span className="text-gradient-primary">Schedule</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Five evenings of focused, hands-on learning — 7:00 to 8:00 PM daily.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4">
          {days.map((day, i) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <div className="p-4 border-b border-border/50 bg-primary/5">
                <span className="text-xs font-mono-display text-primary uppercase tracking-wider">
                  {day.day}
                </span>
                <h3 className="text-base font-bold font-mono-display text-foreground mt-1">
                  {day.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">{day.date}</p>
              </div>
              <div className="p-4 space-y-3">
                {day.sessions.map((session) => (
                  <div key={session.topic} className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs font-mono-display">{session.time}</span>
                    </div>
                    <p className="text-xs text-foreground/80">{session.topic}</p>
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
