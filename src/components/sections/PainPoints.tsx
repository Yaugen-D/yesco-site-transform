import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";

const cards = [
  { num: "01", title: "Revenue Loss", points: ["Peak-hour outages cost $5k–$50k per minute", "Broken campaigns waste entire ad budgets", "Each outage drives users to competitors"] },
  { num: "02", title: "Hidden Costs", points: ["Over-provisioned infrastructure drains budgets", "Reactive firefighting wastes engineer hours", "Vendor lock-in prevents optimization"] },
  { num: "03", title: "Performance Problems", points: ["Slow load times kill conversions", "No capacity planning for traffic spikes", "Single points of failure across the stack"] },
  { num: "04", title: "Security Risks", points: ["Unpatched systems expose critical data", "No audit trails for compliance", "DDoS attacks with no mitigation plan"] },
];

const PainPoints = () => (
  <section className="px-6 py-32 md:px-12 lg:px-20">
    <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-mono-label text-muted-foreground">Pain Points</motion.p>
    <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
      Does This Sound Familiar?
    </motion.h2>
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mt-16 grid gap-6 sm:grid-cols-2">
      {cards.map((card) => (
        <motion.div key={card.num} variants={fadeUp} className="group rounded-2xl bg-card p-8 shadow-[0_1px_3px_0_hsl(var(--foreground)/0.04),0_8px_24px_-4px_hsl(var(--foreground)/0.06)] transition-transform duration-300 hover:-translate-y-1">
          <span className="font-mono-label text-muted-foreground">{card.num}</span>
          <h3 className="mt-4 text-xl font-bold text-foreground">{card.title}</h3>
          <ul className="mt-5 flex flex-col gap-2.5">
            {card.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default PainPoints;
