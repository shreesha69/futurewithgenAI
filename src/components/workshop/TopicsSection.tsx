import { motion } from "framer-motion";
import { Brain, Code, Image, MessageSquare, Layers, Zap } from "lucide-react";

const topics = [
  {
    icon: MessageSquare,
    title: "Prompt Engineering",
    description: "Master advanced prompting techniques for LLMs including chain-of-thought, few-shot, and system prompts.",
  },
  {
    icon: Code,
    title: "RAG Pipelines",
    description: "Build retrieval-augmented generation systems with vector databases and semantic search.",
  },
  {
    icon: Image,
    title: "Image Generation",
    description: "Explore diffusion models, ControlNet, and production-grade image generation workflows.",
  },
  {
    icon: Brain,
    title: "Fine-Tuning",
    description: "Learn LoRA, QLoRA, and RLHF techniques to customize models for your use case.",
  },
  {
    icon: Layers,
    title: "AI Agents",
    description: "Build autonomous agents with tool use, planning, and multi-step reasoning capabilities.",
  },
  {
    icon: Zap,
    title: "Deployment",
    description: "Ship AI applications to production with monitoring, guardrails, and cost optimization.",
  },
];

const TopicsSection = () => {
  return (
    <section id="topics" className="py-24 px-6 relative">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono-display mb-4">
            What You'll <span className="text-gradient-primary">Learn</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hands-on sessions covering the full generative AI stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <topic.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-mono-display mb-2 text-foreground">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
