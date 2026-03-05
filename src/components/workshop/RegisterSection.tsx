import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/i18n";

const RegisterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="register" className="py-24 px-6 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center glow-primary"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono-display mb-4">
            {t("registerHeading")} <span className="text-gradient-primary">Free</span>
          </h2>
          <p className="text-muted-foreground mb-2 max-w-md mx-auto">
            {t("openTo")}
          </p>
          <p className="text-xs text-muted-foreground mb-8">
            9–13 March · 7:00–8:00 PM · Online
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@college-email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground font-mono-display text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono-display font-semibold text-sm hover:brightness-110 transition-all shrink-0"
              >
                {t("registerFree")}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-primary font-mono-display font-semibold"
            >
              ✓ You're registered! We'll send you the joining link soon.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection;
