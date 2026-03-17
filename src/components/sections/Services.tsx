import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";

const packages = [
  {
    name: "Rescue", type: "One-time", desc: "Fix instability fast",
    deliverables: ["Emergency incident response", "Root cause analysis", "Critical hotfixes deployed", "Monitoring setup for visibility", "Post-mortem report with action plan"],
    result: "Platform stabilized within days, not months.",
  },
  {
    name: "Stabilize", type: "Ongoing", desc: "Predictable operations",
    deliverables: ["24/7 monitoring & alerting", "Incident management & response", "Infrastructure optimization", "Capacity planning", "Monthly reliability reports"],
    result: "Consistent uptime with zero surprises.",
  },
  {
    name: "Scale", type: "Project-based", desc: "Architecture for growth",
    deliverables: ["Architecture review & redesign", "Auto-scaling implementation", "CI/CD pipeline optimization", "Load testing & performance tuning", "Migration & zero-downtime deployments"],
    result: "Infrastructure that grows with your revenue.",
  },
];

const Services = () => (
  <section className="px-6 py-32 md:px-12 lg:px-20">
    <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-mono-label text-muted-foreground">Services</motion.p>
    <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">How We Help</motion.h2>
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mt-16 grid gap-6 lg:grid-cols-3">
      {packages.map((pkg) => (
        <motion.div key={pkg.name} variants={fadeUp} className="flex flex-col rounded-2xl bg-card p-8 shadow-[0_1px_3px_0_hsl(var(--foreground)/0.04),0_8px_24px_-4px_hsl(var(--foreground)/0.06)] transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
            <span className="font-mono-label text-muted-foreground">{pkg.type}</span>
          </div>
          <p className="mt-1 text-muted-foreground">{pkg.desc}</p>
          <ul className="mt-8 flex flex-1 flex-col gap-2.5">
            {pkg.deliverables.map((d, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground" />{d}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-border pt-6 text-sm font-medium text-muted-foreground">{pkg.result}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Services;
