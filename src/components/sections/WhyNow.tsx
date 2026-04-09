"use client";

import { motion } from "framer-motion";

export function WhyNow() {
  const stats = [
    {
      value: "30%",
      label: "of consumers now use AI to research before buying",
    },
    {
      value: "60%",
      label: "of Google searches end without a single click",
    },
    {
      value: "<10%",
      label: "of businesses have any AI visibility strategy",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-primary text-white" id="why-now">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">
            WHY NOW
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-white mb-8 leading-tight">
            The businesses that move first will be impossible to displace.
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            AI trust signals compound over time. The businesses that build their AI presence now will hold those positions for years - just like the businesses that invested in Google SEO in 2006 dominated for a decade. Except this time, most of your competitors haven&apos;t even heard of it yet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-20 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="font-heading font-black text-6xl md:text-7xl text-secondary mb-4 drop-shadow-sm">
                {stat.value}
              </div>
              <p className="text-white/80 md:text-lg max-w-xs mx-auto leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-white/20">
          <p className="italic text-lg md:text-xl text-white/90">
            The window is open now. It won&apos;t stay open.
          </p>
        </div>
      </div>
    </section>
  );
}
