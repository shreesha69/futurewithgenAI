import { motion } from "framer-motion";
import { CheckCircle2, Mail, Clock, ArrowLeft } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email") || "your email";

  useEffect(() => {
    // Auto-redirect after 10 seconds if user doesn't interact
    const timer = setTimeout(() => {
      // Just keep the page open, don't auto-redirect since it's in a new tab
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute inset-0 grid-lines opacity-25" />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      <motion.div
        className="max-w-2xl w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main card */}
        <motion.div
          className="glass-advanced rounded-3xl p-8 md:p-12 text-center glow-primary"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Animated checkmark */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(var(--primary), 0.7)",
                  "0 0 0 20px rgba(var(--primary), 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <CheckCircle2 className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-gradient-animated"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Thank You! 🎉
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Your registration is confirmed
          </motion.p>

          {/* Details boxes */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {/* Email confirmation */}
            <motion.div
              className="p-4 rounded-2xl bg-primary/10 border border-primary/30 flex items-start gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground mb-1">Confirmation sent to</p>
                <p className="text-sm font-semibold text-primary break-all">{email}</p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              className="p-4 rounded-2xl bg-accent/10 border border-accent/30 flex items-start gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground mb-1">Workshop starts</p>
                <p className="text-sm font-semibold text-accent">9–13 March, 7:00 PM</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            className="mb-8 p-6 rounded-2xl bg-secondary/50 border border-border/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="text-base text-foreground mb-3">
              We've sent confirmation details to your email. Please check your inbox and follow the instructions.
            </p>
            <p className="text-sm text-muted-foreground">
              An email has been sent to both you and our team. See you at the workshop!
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.button
              onClick={() => window.close()}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close This Tab
            </motion.button>
            <motion.button
              onClick={() => window.location.href = "/"}
              className="px-6 py-3 rounded-lg bg-secondary/50 text-foreground font-semibold border border-border/50 hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom text */}
        <motion.p
          className="text-center text-muted-foreground text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          Thank you for registering for the Generative AI Workshop!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ThankYou;
