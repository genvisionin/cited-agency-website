"use client";

import { motion } from "framer-motion";
import { Eye, MapPin, Globe, MessageSquare, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WhatYouGet() {
  const features = [
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "AI Visibility Audit",
      description: "We test your business across every major AI platform and deliver a detailed report with screenshots. You'll see exactly what AI says about you - if it says anything at all.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Google Business Profile Optimisation",
      description: "Your Google Business Profile is one of the strongest signals AI uses. We audit and fully optimise it - categories, attributes, photos, posts, Q&A, and review strategy.",
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Structured Data & Schema",
      description: "We implement LocalBusiness JSON-LD schema on your website so AI platforms can read your business information accurately. This is the technical foundation most local businesses are missing.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Content Rewriting for AI",
      description: "We rewrite your service pages and create FAQ content in the Q&A format that AI platforms extract and cite. Your website starts speaking the language AI understands.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Citation & Authority Building",
      description: "We build consistent mentions of your business across authoritative directories, local sources, and industry platforms. More trusted mentions = higher AI confidence in recommending you.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Monthly Reporting & Growth",
      description: "Every month you receive a clear report: which platforms mention you, your visibility score progression, and competitor comparison. We track what matters - are you getting recommended or not.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-white" id="what-you-get">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">
            WHAT YOU GET
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary leading-tight">
            Everything your business needs to show up in AI search.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-none shadow-sm hover:shadow-md transition-shadow rounded-2xl">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-heading font-bold text-xl text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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
