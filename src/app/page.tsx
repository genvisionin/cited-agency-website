import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TheProblem } from "@/components/sections/TheProblem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { WhyNow } from "@/components/sections/WhyNow";
import { WhatsIncluded } from "@/components/sections/WhatsIncluded";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheProblem />
        <HowItWorks />
        <WhatYouGet />
        <WhyNow />
        <WhatsIncluded />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
