"use client";

import { motion } from "framer-motion";
import { Search, Zap, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8 text-secondary mb-6" />,
      title: "We audit your AI visibility",
      description: "We search for your business across ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude. You'll see exactly where you show up - and where you don't. Most businesses are shocked by the results.",
    },
    {
      number: "02",
      icon: <Zap className="w-8 h-8 text-secondary mb-6" />,
      title: "We rebuild your digital signals",
      description: "We fix your structured data, optimise your Google Business Profile, rewrite your content in formats AI can extract, and build authoritative citations that AI trusts. This is the technical work that moves the needle.",
    },
    {
      number: "03",
      icon: <BarChart3 className="w-8 h-8 text-secondary mb-6" />,
      title: "We measure and grow your presence",
      description: "Every month you get a clear report showing which AI platforms mention you, how your visibility score is changing, and how you compare to competitors. No vanity metrics - just whether AI recommends you or not.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-background" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">
            HOW IT WORKS
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary leading-tight">
            From invisible to recommended. <br className="hidden md:block" />
            Here&apos;s the process.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line Desktop */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border hidden md:block -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white overflow-hidden group">
                <CardContent className="p-8">
                  <div className="font-heading font-black text-5xl text-primary/10 absolute top-6 right-6 transition-transform group-hover:scale-110">
                    {step.number}
                  </div>
                  {step.icon}
                  <h3 className="font-heading font-bold text-2xl text-primary mb-4 pr-12">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
