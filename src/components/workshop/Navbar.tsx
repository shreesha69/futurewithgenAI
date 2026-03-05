import { useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
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
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useTranslation();
  const darkMode = theme === "dark";
  // Note: theme is provided by next-themes ThemeProvider

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/30"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Logo + Brand */}
        <a href="#" className="flex items-center gap-3">
          <motion.img
            src={logo}
            alt="Company Logo"
            className="h-10 w-auto object-contain"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-mono-display transition-colors ${
                item.active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Language toggle */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as any)}
            className="ml-4 p-1 rounded bg-secondary border border-border text-foreground text-xs"
          >
            <option value="en">EN</option>
            <option value="hi">हिं</option>
            <option value="ja">日本</option>
          </select>

          {/* Dark/Light Toggle */}
          <button
            onClick={() => setTheme(darkMode ? "light" : "dark")}
            className="ml-4 p-2 rounded-full hover:bg-muted transition"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setTheme(darkMode ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted transition"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border/30 bg-background/90 backdrop-blur-xl"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-mono-display ${
                  item.active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;