"use client";

import { motion } from "framer-motion";
import { Search, MessageSquare } from "lucide-react";

export function TheProblem() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-white" id="the-shift">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">
            The Shift
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6 leading-tight">
            Search has changed. Most businesses haven&apos;t noticed.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* Card 1 - Before */}
            <div className="bg-muted/30 p-6 rounded-2xl border border-border/40 flex flex-col items-start gap-4 opacity-80 cursor-default hover:opacity-100 transition-opacity">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Search className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">How search used to work</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Customer Googles your business type. Gets 10 blue links. Clicks a few. Maybe finds you.
                </p>
              </div>
            </div>

            {/* Card 2 - Now */}
            <div className="bg-white p-6 rounded-2xl border border-primary/20 shadow-[0_0_20px_rgba(15,61,62,0.05)] relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary group-hover:w-1.5 transition-all" />
              <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-primary mb-2">How search works now</h3>
                <p className="text-foreground/90 text-sm leading-relaxed font-medium">
                  Customer asks ChatGPT or Google AI. Gets 2–3 businesses recommended by name. Calls the first one. Never sees anyone else.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary leading-tight">
              60% of Google searches now end with zero clicks. AI gives the answer - and the recommendation - directly.
            </h3>
          </div>
        </motion.div>

        {/* AI Chat Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-lg"
        >
          <div className="bg-[#1e1e2e] rounded-2xl p-6 md:p-8 shadow-xl border border-white/10 text-white font-sans">
            {/* User Message */}
            <div className="flex gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center font-bold text-sm">
                US
              </div>
              <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none">
                <p>What&apos;s the best dental clinic in Leeds?</p>
              </div>
            </div>

            {/* AI Message */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center font-bold text-sm">
                AI
              </div>
              <div className="space-y-4 text-[15px] leading-relaxed">
                <p>Based on my research, here are the top dental clinics in Leeds:</p>
                
                <div className="space-y-3">
                  <p>
                    <span className="font-bold text-white">1. Smilewright Dental</span> - Highly rated for cosmetic dentistry, located in the city centre. Known for their modern facilities and patient care.
                  </p>
                  <p>
                    <span className="font-bold text-white">2. Park Row Dental Practice</span> - Excellent reviews for general and family dentistry. Convenient central location.
                  </p>
                  <p>
                    <span className="font-bold text-white">3. The Dental Suite</span> - Specialises in implants and orthodontics. Strong reputation among Leeds residents.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Callout */}
          <div className="mt-6 bg-secondary/10 border border-secondary/20 p-4 rounded-xl">
            <p className="text-secondary font-semibold text-sm md:text-base">
              Is your business here? If not, your competitors are winning customers you&apos;ll never even know about.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
