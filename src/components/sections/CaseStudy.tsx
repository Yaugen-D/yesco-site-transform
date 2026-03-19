import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";

const metrics = [
{ label: "Uptime", before: "97.9%", after: "99.6%" },
{ label: "Infrastructure Costs", before: "Baseline", after: "–28%" },
{ label: "Critical Incidents", before: "Baseline", after: "–70%" }];


const CaseStudy = () =>
<section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-4xl">
      <motion.p variants={fadeUp} className="font-mono-label text-muted-foreground">Case Study</motion.p>
      <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Streaming Platform</motion.h2>
      <motion.p variants={fadeUp} className="mt-2 text-lg text-muted-foreground">2M+ monthly active users</motion.p>

      <motion.div variants={fadeUp} className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-3">
        {metrics.map((m) =>
      <div key={m.label} className="flex flex-col gap-1 bg-background p-8">
            <span className="font-mono-label text-muted-foreground">{m.label}</span>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-sm text-muted-foreground line-through">{m.before}</span>
              <span className="text-3xl font-bold text-brand-red">{m.after}</span>
            </div>
          </div>
      )}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-12 rounded-2xl bg-foreground px-8 py-10 text-center">
        <p className="text-4xl font-extrabold tracking-tight text-background md:text-5xl">$250k+</p>
        <p className="mt-2 text-sm text-background/60">estimated annual revenue protected</p>
      </motion.div>
    </motion.div>
  </section>;


export default CaseStudy;