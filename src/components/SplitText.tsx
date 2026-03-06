import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationType?: "words" | "characters" | "wave" | "bounce";
}

const SplitText = ({ 
  text, 
  className = "", 
  delay = 0.1,
  animationType = "words"
}: SplitTextProps) => {
  if (animationType === "characters") {
    // Character-by-character animation
    const characters = text.split("");
    return (
      <span className={className}>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 40, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.5,
              delay: delay * index,
              ease: "easeOut"
            }}
            style={{ perspective: "1000px" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    );
  }

  if (animationType === "wave") {
    // Wave animation effect
    const characters = text.split("");
    return (
      <span className={className}>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, -20, 0, -10, 0] }}
            transition={{
              duration: 2,
              delay: delay * index,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    );
  }

  if (animationType === "bounce") {
    // Bounce animation effect
    const words = text.split(" ");
    return (
      <span className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 40, scale: 0.5 }}
            animate={{ opacity: 1, y: [0, -15, 0], scale: 1 }}
            transition={{
              duration: 1.2,
              delay: delay * index,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    );
  }

  // Default word-by-word animation
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: delay * index,
            ease: "easeOut"
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default SplitText;