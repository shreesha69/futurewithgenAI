import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Primary cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          opacity: { duration: 0.2 }
        }}
      >
        <div className="w-12 h-12 bg-primary/20 rounded-full blur-sm" />
      </motion.div>

      {/* Accent trail */}
      <motion.div
        className="fixed pointer-events-none z-40 mix-blend-screen"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          opacity: isVisible ? 0.4 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          opacity: { duration: 0.3 }
        }}
      >
        <div className="w-20 h-20 bg-accent/15 rounded-full blur-md" />
      </motion.div>

      {/* Subtle outer glow */}
      <motion.div
        className="fixed pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 60,
          y: mousePosition.y - 60,
          opacity: isVisible ? 0.2 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          opacity: { duration: 0.4 }
        }}
      >
        <div className="w-32 h-32 bg-primary/10 rounded-full blur-xl" />
      </motion.div>
    </>
  );
};

export default MouseTracker;