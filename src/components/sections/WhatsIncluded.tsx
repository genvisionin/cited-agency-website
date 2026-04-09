"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function WhatsIncluded() {
  const checklist = [
    {
      title: "AI Visibility Audit",
      description: "We test your business across ChatGPT, Perplexity, Google AI, Gemini, and Claude - with screenshots of every result.",
    },
    {
      title: "AI Visibility Score & Tracking",
      description: "Your business gets a visibility score that we track monthly - so you can see exactly how your AI presence is growing.",
    },
    {
      title: "Competitor Monitoring",
      description: "See which competitors AI recommends instead of you, how often they appear, and where they rank across platforms.",
    },
    {
      title: "Sentiment Analysis",
      description: "Understand how AI describes your business - what it gets right, what it gets wrong, and what needs fixing.",
    },
    {
      title: "Google Business Profile Optimisation",
      description: "Full audit and optimisation of your Google Business Profile - one of the strongest signals AI uses to recommend local businesses.",
    },
    {
      title: "Structured Data & Schema Markup",
      description: "We implement LocalBusiness JSON-LD schema so AI platforms can accurately read and trust your business information.",
    },
    {
      title: "Content Rewriting for AI",
      description: "Service pages and FAQ content rewritten in Q&A formats that AI platforms extract and cite reliably.",
    },
    {
      title: "Citation & Authority Building",
      description: "We build consistent mentions across directories, local sources, and industry platforms to increase AI confidence in your brand.",
    },
    {
      title: "Source & Citation Tracking",
      description: "We identify which websites and sources AI pulls from when recommending businesses in your category - and make sure you're represented there.",
    },
    {
      title: "Multi-Platform Coverage",
      description: "Everything we do covers all five major AI platforms: ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude.",
    },
    {
      title: "Monthly Reporting",
      description: "A clear monthly report showing your visibility score, position changes, sentiment shifts, and competitor comparison. No vanity metrics.",
    },
    {
      title: "Actionable Recommendations",
      description: "Every report comes with specific next steps - which sources to target, which content to create, which signals to strengthen.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-background border-t border-border/40" id="whats-included">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">
            WHAT&apos;S INCLUDED
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary leading-tight">
            Everything we do to get your business recommended by AI.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10 mb-16">
          {checklist.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-start gap-4"
            >
              <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Area */}
        <motion.div 
          className="text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            href="#contact" 
            className={buttonVariants({ 
              size: "lg", 
              className: "rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-base px-8 py-6 h-auto transition-transform hover:scale-105 mb-4" 
            })}
          >
            Get Your Free Audit - See Where You Stand &rarr;
          </Link>
          <p className="text-sm text-muted-foreground italic">
            Every engagement starts with a free AI visibility audit. No commitment, no hard sell.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
