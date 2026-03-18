import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const issues = [
"No real monitoring -- just hope",
"Unknown risks that only appear in crises",
"Manual deployments with no rollback plan",
"No incident response process",
"Infrastructure debt growing silently"];


const Problem = () =>
<section className="px-6 py-32 md:px-12 lg:px-20">
    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-mono-label text-muted-foreground">
          The Problem
        </motion.p>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Downtime Is<br />Expensive
        </motion.h2>
      </div>
      <div className="flex flex-col gap-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
          <p className="text-3xl font-bold text-foreground md:text-4xl">
            $5k–$50k<span className="text-brand-red">/min</span>
          </p>
          <p className="max-w-[48ch] text-muted-foreground">That's what revenue-critical platforms lose during unplanned downtime. Add broken marketing campaigns, lost user trust, and reputational damage -- the real cost is even higher.

        </p>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-6">
          <p className="font-mono-label text-muted-foreground">Yet many platforms run with...</p>
          <ul className="flex flex-col gap-3">
            {issues.map((item, i) =>
          <li key={i} className="flex items-start gap-3 text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                {item}
              </li>
          )}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>;


export default Problem;