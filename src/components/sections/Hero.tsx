import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import Logo from "@/components/Logo";

const industries = ["Entertainment", "Betting & Gaming", "Streaming", "Marketplaces"];

const Hero = () =>
<section className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-16 pt-8 md:px-12 lg:px-20">
    {/* Subtle decorative elements */}
    <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-brand-red/[0.03]" />
    <div className="pointer-events-none absolute bottom-32 left-0 h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />

    <nav className="relative flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-6">
        <a href="#services" className="font-mono-label text-muted-foreground transition-colors hover:text-foreground">
          Services
        </a>
        <a href="#contact" className="font-mono-label text-muted-foreground transition-colors hover:text-foreground">
          Contact
        </a>
      </div>
    </nav>

    <motion.div variants={stagger} initial="hidden" animate="visible" className="relative mt-auto flex max-w-5xl flex-col gap-8 pt-32">
      <motion.p variants={fadeUp} className="font-mono-label text-muted-foreground">
        SRE & Infrastructure Services
      </motion.p>
      <motion.h1 variants={fadeUp} className="text-5xl font-extrabold leading-[1.05] tracking-tighter text-foreground md:text-7xl lg:text-8xl">
        Platform Stability
        <br />
        <span className="text-muted-foreground">&amp; Growth</span>
      </motion.h1>
      <motion.p variants={fadeUp} className="max-w-[48ch] text-xl font-bold tracking-tight text-foreground md:text-2xl">
        Uptime is revenue.<span className="text-brand-red"> We protect both.</span>
      </motion.p>
    </motion.div>

    <motion.div variants={stagger} initial="hidden" animate="visible" className="relative mt-20 flex flex-wrap gap-3">
      {industries.map((ind) =>
    <motion.span key={ind} variants={fadeUp} className="rounded-full border border-border px-4 py-1.5 font-mono-label text-muted-foreground">
          {ind}
        </motion.span>
    )}
    </motion.div>
  </section>;


export default Hero;