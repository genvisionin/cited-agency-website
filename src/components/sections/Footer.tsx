import Link from "next/link";

export function Footer() {
  const links = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "What You Get", href: "#what-you-get" },
    { name: "What's Included", href: "#whats-included" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white/70 py-16 px-6 md:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* Brand & Info */}
        <div className="text-center md:text-left space-y-4">
          <Link href="/" className="inline-block">
            <span className="font-heading font-bold text-3xl tracking-tight text-white">
              Cited
            </span>
            <span className="text-secondary text-3xl font-bold">.</span>
          </Link>
          <p className="text-white/80 font-medium">
            AI Visibility Agency for Businesses
          </p>
          <p className="hover:text-white transition-colors">
            <a href="mailto:hello@cited.agency">hello@cited.agency</a>
          </p>
          <p className="text-white/60 text-sm pt-2">
            Global Hubs: Bangalore, India &bull; Singapore
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 text-center md:text-left text-sm">
        <p>&copy; 2026 Cited. All rights reserved.</p>
      </div>
    </footer>
  );
}
