"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    businessType: "",
    city: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // In a real scenario, you might want to show a toast error here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-gradient-to-br from-[#FAFAF9] to-white" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        
        {/* Left Side: Copy & Trust Signals */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">
            GET STARTED
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary leading-tight mb-6">
            See what AI says about your business. It takes 30 seconds.
          </h2>
          <p className="text-foreground/80 md:text-lg leading-relaxed mb-10">
            Fill in your details and we&apos;ll run a free AI visibility audit across ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude. You&apos;ll receive a detailed report showing exactly where you stand - and what your competitors are doing. No obligation, no hard sell.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
              <p className="text-sm md:text-base font-medium text-foreground">Free audit - no commitment</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
              <p className="text-sm md:text-base font-medium text-foreground">Report delivered within 48 hours</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
              <p className="text-sm md:text-base font-medium text-foreground">Covers all 5 major AI platforms</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-primary">Audit Requested</h3>
                <p className="text-muted-foreground">We&apos;ll review your business and get back to you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required placeholder="John Doe" className="bg-background h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required placeholder="john@example.com" className="bg-background h-12 rounded-xl" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="businessName" className="text-sm font-medium text-foreground">Business Name</label>
                    <Input id="businessName" value={formData.businessName} onChange={(e) => setFormData({...formData, businessName: e.target.value})} required placeholder="Acme Ltd" className="bg-background h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="businessType" className="text-sm font-medium text-foreground">Business Type</label>
                    <select 
                      id="businessType" 
                      required 
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      className="flex h-12 w-full items-center justify-between rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled selected>Select Industry...</option>
                      <option value="dental">Dental Clinic</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="salon">Salon / Beauty</option>
                      <option value="gym">Gym / Fitness</option>
                      <option value="healthcare">Healthcare (Physio, Optician)</option>
                      <option value="accommodation">Student Accommodation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium text-foreground">City</label>
                  <Input id="city" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} required placeholder="e.g. Leeds" className="bg-background h-12 rounded-xl" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone <span className="text-muted-foreground font-normal">(Optional)</span></label>
                  <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+44" className="bg-background h-12 rounded-xl" />
                </div>

                <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14 text-base font-medium mt-4 disabled:opacity-70">
                  {isSubmitting ? 'Requesting...' : 'Request My Free Audit \u2192'}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
