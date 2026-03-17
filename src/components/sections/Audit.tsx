import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";

const assessments = [
  "Infrastructure architecture & single points of failure",
  "Monitoring, alerting & incident response readiness",
  "Deployment pipelines & rollback capabilities",
  "Cost optimization opportunities",
  "Security posture & compliance gaps",
];

const Audit = () => (
  <section id="contact" className="px-6 py-32 md:px-12 lg:px-20">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-3xl text-center">
      <motion.p variants={fadeUp} className="font-mono-label text-muted-foreground">Get Started</motion.p>
      <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Free Stability Audit</motion.h2>
      <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">
        Every engagement begins with a complimentary audit — delivered in 3–7 business days.
      </motion.p>
      <motion.ul variants={fadeUp} className="mt-10 flex flex-col gap-2.5 text-left">
        {assessments.map((a, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />{a}
          </li>
        ))}
      </motion.ul>
      <motion.a variants={fadeUp} href="mailto:hello@yescolab.com?subject=Stability%20Audit%20Request" className="mt-12 inline-flex h-14 items-center rounded-full bg-foreground px-10 text-sm font-semibold text-background transition-opacity hover:opacity-90">
        Request Your Free Audit →
      </motion.a>
      <motion.p variants={fadeUp} className="mt-4 text-xs text-muted-foreground">
        NDA on first call · Response within 24 hours
      </motion.p>
    </motion.div>
  </section>
);

export default Audit;
