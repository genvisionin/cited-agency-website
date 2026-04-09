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
  title: 'Recco - Get Recommended by AI | GEO Agency',
  description:
    'Recco helps local businesses get recommended by ChatGPT, Perplexity, Google AI Overviews, and more. Free AI visibility audit.',
  openGraph: {
    title: 'Recco | AI Visibility & Growth Agency',
    description: 'We make sure ChatGPT, Perplexity, and Google AI recommend your business before your competitors.',
    url: 'https://recco.agency',
    siteName: 'Recco',
    images: [
      {
        url: '/og-image.png',
        width: 1024,
        height: 1024,
        alt: 'Recco AI Visibility',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recco | AI Visibility',
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
        <link rel="icon" href="/logo-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-icon.png" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
