"use client";

import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 md:py-32 overflow-hidden px-6 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 z-0"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >


          <motion.h1 variants={itemVariants} className="font-heading font-bold text-5xl md:text-7xl tracking-tight text-primary leading-[1.1] mb-6">
            AI recommends your competitors. Not you. <br className="hidden md:block" />
            <span className="text-secondary">We change that.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            People are skipping Google and asking AI directly. The businesses AI mentions get the call. Everyone else is invisible. <span className="font-medium text-foreground">We make sure AI recommends yours.</span>
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Link href="#contact" className={buttonVariants({ size: "lg", className: "rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-base px-8 py-6 h-auto w-full sm:w-auto transition-transform hover:scale-105" })}>
              Get Your Free AI Visibility Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="#how-it-works" className={buttonVariants({ variant: "ghost", className: "rounded-full text-muted-foreground hover:text-foreground" })}>
              See how it works &darr;
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium mb-6">
              Helping businesses get found on
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {[
                { name: 'ChatGPT', src: '/logos/chatgpt.svg' },
                { name: 'Perplexity', src: '/logos/perplexity.svg' },
                { name: 'Google AI', src: '/logos/google.svg' },
                { name: 'Gemini', src: '/logos/gemini.svg' },
                { name: 'Claude', src: '/logos/claude.svg' }
              ].map((platform) => (
                <div key={platform.name} className="flex items-center gap-3 px-4 py-2.5 bg-white rounded-xl shadow-sm border border-border/40 hover:shadow-md transition-shadow">
                  <img src={platform.src} alt={`${platform.name} logo`} className="w-6 h-6 object-contain" />
                  <span className="font-heading font-bold text-base md:text-lg text-primary">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
