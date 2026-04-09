import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cited - Get Recommended by AI | GEO Agency',
  description:
    'Cited helps local businesses get recommended by ChatGPT, Perplexity, Google AI Overviews, and more. Free AI visibility audit.',
  openGraph: {
    title: 'Cited | AI Visibility & Growth Agency',
    description: 'We make sure ChatGPT, Perplexity, and Google AI recommend your business before your competitors.',
    url: 'https://cited.agency',
    siteName: 'Cited',
    images: [
      {
        url: '/og-image.png',
        width: 1024,
        height: 1024,
        alt: 'Cited AI Visibility',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cited | AI Visibility',
    description: 'We make sure AI recommends your business.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
