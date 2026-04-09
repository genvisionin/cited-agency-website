"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is GEO and how is it different from SEO?",
      answer: "SEO gets you ranked on Google's link results. GEO (Generative Engine Optimisation) gets you recommended by AI platforms like ChatGPT, Perplexity, and Google AI Overviews - when they answer questions directly instead of showing links. Different platforms, different signals, different strategy.",
    },
    {
      question: "I already rank well on Google. Isn't that enough?",
      answer: "Google rankings and AI recommendations are built on different signals. We've audited businesses that rank #1 on Google but don't appear in a single AI recommendation. As more searches move to AI, being invisible there means losing customers you'd never even know about.",
    },
    {
      question: "How quickly will I see results?",
      answer: "Foundation work (schema, Google Business Profile, directories) is completed in the first month. Most clients begin seeing AI mentions within 8-12 weeks. AI visibility compounds over time - the earlier you start, the harder it becomes for competitors to catch up.",
    },
    {
      question: "Which AI platforms do you cover?",
      answer: "We audit and optimise across ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude. These are the five platforms consumers use most when searching for local businesses.",
    },
    {
      question: "I'm not sure this applies to my business. Can I just get an audit first?",
      answer: "Absolutely. Our one-time audit (£500) gives you the full picture - where you appear, where you don't, and what your competitors are doing. No commitment beyond that. Most businesses that see the audit results choose to continue.",
    },
    {
      question: "What types of businesses do you work with?",
      answer: "We work with local businesses - dental clinics, restaurants, salons, gyms, physiotherapists, opticians, student accommodation, and more. If your customers are searching for your type of business in a specific area, GEO matters to you.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">
            QUESTIONS
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary leading-tight">
            You&apos;re probably wondering...
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/60 py-2">
                <AccordionTrigger className="text-left font-heading font-bold text-lg md:text-xl text-foreground hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
