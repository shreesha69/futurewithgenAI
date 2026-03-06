import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTranslation } from "@/i18n";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Topics", href: "#topics", active: true },
  { label: "Schedule", href: "#schedule" },
  { label: "Register", href: "#register" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useTranslation();
  const { scrollY } = useScroll();
  const darkMode = theme === "dark";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        isScrolled
          ? 'glass-advanced border-b border-border/50 shadow-lg'
          : 'bg-background/60 border-b border-border/30'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Logo + Brand */}
        <motion.a
          href="#"
          className="flex items-center gap-3 group magnetic-element"
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={logo}
            alt="Company Logo"
            className="h-10 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-lg"
            animate={{
              y: [0, -8, 0],
              filter: isScrolled ? "brightness(1.1)" : "brightness(1)"
            }}
            transition={{
              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
              filter: { duration: 0.3 }
            }}
          />
          <motion.span
            className="hidden sm:block text-lg font-bold font-mono-display text-gradient-animated"
            animate={{ opacity: isScrolled ? 0.8 : 1 }}
          >
            GenAI Workshop
          </motion.span>
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={`relative text-base font-mono-display font-medium transition-all duration-300 hover:text-primary magnetic-hover group ${
                item.active
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                initial={{ width: item.active ? "100%" : "0%" }}
              />
              {item.active && (
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.a>
          ))}

          {/* Language toggle */}
          <motion.select
            value={lang}
            onChange={(e) => setLang(e.target.value as any)}
            className="p-2 rounded-lg glass-advanced border border-border/50 text-foreground text-sm font-mono-display font-medium hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
          >
            <option value="en">🇺🇸 EN</option>
            <option value="hi">🇮🇳 हि</option>
            <option value="ja">🇯🇵 日</option>
          </motion.select>

          {/* Dark/Light Toggle */}
          <motion.button
            onClick={() => setTheme(darkMode ? "light" : "dark")}
            className="p-2 rounded-lg glass-advanced border border-border/50 hover:border-primary/50 transition-all duration-300 interactive-glow magnetic-element"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ rotate: { duration: 0.3 } }}
          >
            <motion.div
              key={darkMode ? "moon" : "sun"}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-400" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <motion.button
            onClick={() => setTheme(darkMode ? "light" : "dark")}
            className="p-2 rounded-lg glass-advanced border border-border/50 hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-400" />}
          </motion.button>

          <motion.button
            className="p-2 rounded-lg glass-advanced border border-border/50 text-foreground hover:border-primary/50 transition-all duration-300 magnetic-element"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          height: mobileOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden border-t border-border/30 glass-advanced overflow-hidden"
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-mono-display font-medium transition-all duration-300 hover:text-primary group ${
                item.active ? "text-primary" : "text-foreground"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <span className="flex items-center gap-2">
                {item.label}
                {item.active && (
                  <motion.span
                    className="w-2 h-2 bg-accent rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </span>
            </motion.a>
          ))}

          <motion.div
            className="pt-4 border-t border-border/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              className="w-full p-2 rounded-lg bg-secondary/50 border border-border/50 text-foreground text-sm font-mono-display font-medium"
            >
              <option value="en">🇺🇸 English</option>
              <option value="hi">🇮🇳 हिन्दी</option>
              <option value="ja">🇯🇵 日本語</option>
            </select>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;