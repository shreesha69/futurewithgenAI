import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Calendar, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "@/i18n";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import emailjs from '@emailjs/browser';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    department: "",
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();
  const { ref: sectionRef, isRevealed } = useScrollReveal({ threshold: 0.3 });

  const [successMessage, setSuccessMessage] = useState("");

  // initialize EmailJS on mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey as string);
      console.log('EmailJS initialized with public key', publicKey);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Check if EmailJS is configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateUser = import.meta.env.VITE_EMAILJS_TEMPLATE_USER;
    const templateAdmin = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('EmailJS config', { serviceId, templateUser, templateAdmin, publicKey });

    if (!serviceId || !templateUser || !templateAdmin || !publicKey ||
        serviceId === 'your_service_id' || templateUser === 'your_user_template_id' ||
        templateAdmin === 'your_admin_template_id' || publicKey === 'your_public_key') {
      setError("Email service not configured. Please set up EmailJS credentials in .env file.");
      setLoading(false);
      return;
    }

    try {
      // Send confirmation email to user
      await emailjs.send(
        serviceId,
        templateUser,
        {
          to_email: formData.email,
          to_name: formData.name,
          user_name: formData.name,
          user_email: formData.email,
          user_designation: formData.designation,
          user_department: formData.department,
          user_contact: formData.contact,
          workshop_date: '9–13 March',
          workshop_time: '7:00–8:00 PM IST',
          workshop_mode: 'Online'
        },
        publicKey
      );

      // Send notification email to admin
      await emailjs.send(
        serviceId,
        templateAdmin,
        {
          admin_email: import.meta.env.VITE_ADMIN_EMAIL,
          user_name: formData.name,
          user_email: formData.email,
          user_designation: formData.designation,
          user_department: formData.department,
          user_contact: formData.contact,
          registration_date: new Date().toLocaleString()
        },
        publicKey
      );

      // Open thank you page in new tab
      try {
        const thankYouWindow = window.open(
          `/thank-you?email=${encodeURIComponent(formData.email)}`,
          "_blank"
        );
        if (thankYouWindow) {
          thankYouWindow.focus();
        } else {
          // Popup blocked - show success message instead
          console.log("Popup blocked, showing success message in modal");
        }
      } catch (popupError) {
        // Popup blocked - show success message instead
        console.log("Popup blocked, showing success message in modal");
      }

      // Show success message in modal
      setSuccessMessage(`Registration successful! Confirmation email sent to ${formData.email}`);

      // Close modal after 3 seconds
      setTimeout(() => {
        setIsDialogOpen(false);
        setSuccessMessage("");
      }, 3000);
    } catch (err: any) {
      console.error('EmailJS error:', err);
      try {
        console.error('EmailJS error as JSON', JSON.stringify(err));
      } catch {}
      let message = "Failed to submit registration. Please check your EmailJS configuration or try again later.";
      if (err && err.text) {
        message += ` (${err.text})`;
      } else if (err && err.status) {
        message += ` (status ${err.status})`;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="register"
      className="py-32 px-6 relative overflow-hidden section-fade-glass video-bg-light particle-bg-light holographic-grid-bg"
    >
      {/* Enhanced background effects - More dramatic */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute inset-0 grid-lines opacity-25" />

      {/* Dramatic floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-16 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"
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
          className="absolute bottom-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-bounce-subtle"
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
        <motion.div
          className="absolute top-1/3 right-10 w-48 h-48 bg-primary/15 rounded-full blur-2xl animate-rotate-slow"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Animated floating elements - Enhanced */}
      <div className="absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-primary/20 rounded-full animate-parallax-float blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Central glow effect - More dramatic */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-[500px] h-[500px] bg-gradient-radial from-primary/25 via-accent/15 to-transparent rounded-full blur-3xl animate-pulse-glow"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 w-[300px] h-[300px] bg-gradient-radial from-accent/20 to-transparent rounded-full blur-2xl animate-electric-pulse"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className={`text-center mb-12 ${isRevealed ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-advanced mb-6 animate-slide-up"
          >
            <Sparkles className="w-5 h-5 text-primary animate-bounce-subtle" />
            <span className="text-sm font-mono-display text-primary font-bold">Limited Seats</span>
          </motion.div>

          <h2 className="text-display-xl mb-6 leading-tight text-center">
            Register{" "}
            <span className="text-gradient-animated">Free</span>
          </h2>

          <motion.p
            className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 text-readable"
            initial={{ opacity: 0, y: 20 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Join <span className="text-primary font-semibold">50+ college students</span> in Pondicherry
            for this exclusive{" "}
            <span className="text-accent font-semibold">generative AI workshop</span>.
            <br />
            Open to students from all colleges and universities.
          </motion.p>

          {/* Quick stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1 animate-scale-pulse">50+</div>
              <div className="text-xs text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1 animate-scale-pulse">Free</div>
              <div className="text-xs text-muted-foreground">Workshop</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1 animate-scale-pulse">5</div>
              <div className="text-xs text-muted-foreground">Days</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`glass-advanced rounded-3xl p-8 md:p-12 text-center glow-primary interactive-card ${
            isRevealed ? 'scroll-scale revealed' : 'scroll-scale'
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isRevealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-8 h-8 border border-primary/30 rounded animate-rotate-slow" />
            <div className="absolute top-4 right-4 w-6 h-6 bg-accent/20 rounded-full animate-bounce-subtle" />
            <div className="absolute bottom-4 left-4 w-4 h-4 bg-primary/20 rounded animate-pulse-glow" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-accent/30 animate-morph-shape" />
          </div>

          <div className="relative z-10">
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Calendar className="w-6 h-6 text-primary animate-bounce-subtle" />
              <span className="text-sm font-mono-display text-muted-foreground">
                9–13 March · 7:00–8:00 PM · Online
              </span>
              <Users className="w-6 h-6 text-accent animate-bounce-subtle" />
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
                <Dialog open={isDialogOpen} onOpenChange={(open) => {
                  setIsDialogOpen(open);
                  if (!open) {
                    // Reset form when dialog closes
                    setFormData({
                      name: "",
                      email: "",
                      designation: "",
                      department: "",
                      contact: "",
                    });
                    setSuccessMessage("");
                    setError("");
                  }
                }}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-mono-display font-semibold text-sm hover:brightness-110 transition-all interactive-button magnetic-element group"
                  >
                    Register Now - It's Free!
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold">
                      {successMessage ? "Registration Successful!" : "Register for Free Workshop"}
                    </DialogTitle>
                  </DialogHeader>
                  {successMessage ? (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <p className="text-muted-foreground mb-4">{successMessage}</p>
                      <Button onClick={() => setIsDialogOpen(false)} className="w-full">
                        Close
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-500 text-sm">
                        {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@college-email.com"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="designation">Designation *</Label>
                        <Input
                          id="designation"
                          type="text"
                          placeholder="e.g., Student, Fresher"
                          name="designation"
                          value={formData.designation}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="department">Department *</Label>
                        <Input
                          id="department"
                          type="text"
                          placeholder="e.g., Computer Science, IT"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="contact">Contact Number *</Label>
                        <Input
                          id="contact"
                          type="tel"
                          placeholder="e.g., +91-9876543210"
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          pattern="[0-9+\-\s]+"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full"
                      size="lg"
                    >
                      {loading ? "Registering..." : "Complete Registration"}
                    </Button>
                  </form>
                  )}
                </DialogContent>
              </Dialog>
            </motion.div>

            <motion.p
              className="text-xs text-muted-foreground mt-6 opacity-75"
              initial={{ opacity: 0 }}
              animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              By registering, you agree to receive workshop updates and materials.
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom decorative elements */}
        <motion.div
          className="mt-16 flex justify-center items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                initial={{ scale: 0 }}
                animate={isRevealed ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 + 1.5 }}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">Trusted by students across Pondicherry</span>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-accent rounded-full"
                initial={{ scale: 0 }}
                animate={isRevealed ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 + 1.5 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection;
