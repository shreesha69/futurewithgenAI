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

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="cursor-glow"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Secondary trail effect */}
      <motion.div
        className="fixed w-2 h-2 bg-primary/20 rounded-full pointer-events-none z-50"
        style={{
          left: mousePosition.x - 1,
          top: mousePosition.y - 1,
        }}
        animate={{
          scale: isVisible ? [1, 1.5, 1] : 0,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );
};

export default MouseTracker;