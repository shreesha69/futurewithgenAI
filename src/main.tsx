import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" storageKey="theme">
      <App />  {/* ✅ removed duplicate I18nProvider - it's already in App.tsx */}
    </ThemeProvider>
  </React.StrictMode>
);