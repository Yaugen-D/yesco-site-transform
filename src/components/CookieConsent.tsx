import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-6 right-6 z-50 mx-auto max-w-lg rounded-2xl border border-border bg-card p-6 shadow-lg"
        >
          <p className="text-sm text-foreground">
            We use cookies to improve your experience. By continuing to use the site, you agree to our use of cookies.
          </p>
          <div className="mt-4 flex gap-3">
            <button
              onClick={handleAccept}
              className="rounded-full bg-foreground px-6 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="rounded-full border border-border px-6 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
