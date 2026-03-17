import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import Logo from "@/components/Logo";

const industries = ["Entertainment", "Betting & Gaming", "Streaming", "Marketplaces"];

const Hero = () => (
  <section className="relative flex min-h-screen flex-col justify-between px-6 pb-16 pt-8 md:px-12 lg:px-20">
    <nav className="flex items-center justify-between">
      <Logo />
      <a href="#contact" className="font-mono-label text-muted-foreground transition-colors hover:text-foreground">
        Contact
      </a>
    </nav>

    <motion.div variants={stagger} initial="hidden" animate="visible" className="mt-auto flex max-w-5xl flex-col gap-8 pt-32">
      <motion.p variants={fadeUp} className="font-mono-label text-muted-foreground">
        SRE & Infrastructure Services
      </motion.p>
      <motion.h1 variants={fadeUp} className="text-5xl font-extrabold leading-[1.05] tracking-tighter text-foreground md:text-7xl lg:text-8xl">
        Platform Stability
        <br />
        <span className="text-muted-foreground">&amp; Growth</span>
      </motion.h1>
      <motion.p variants={fadeUp} className="max-w-[48ch] text-lg text-muted-foreground md:text-xl">
        Uptime is revenue. We protect both.
      </motion.p>
    </motion.div>

    <motion.div variants={stagger} initial="hidden" animate="visible" className="mt-20 flex flex-wrap gap-3">
      {industries.map((ind) => (
        <motion.span key={ind} variants={fadeUp} className="rounded-full border border-border px-4 py-1.5 font-mono-label text-muted-foreground">
          {ind}
        </motion.span>
      ))}
    </motion.div>
  </section>
);

export default Hero;
