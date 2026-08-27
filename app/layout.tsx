import type { Metadata, Viewport } from 'next';
import './globals.css';
import './site.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://usemineai.com'),
  title: 'MINE AI — Your own AI',
  description: 'Tell MINE AI what’s happening in your day. It turns your thoughts into a clear plan, tasks and reminders.',
  alternates: { canonical: '/' },
  openGraph: { title: 'MINE AI — Your own AI', description: 'Turn your thoughts into a clear plan, tasks and reminders.', url: '/', siteName: 'MINE AI', type: 'website', images: [{ url: '/og.png', width: 1536, height: 900, alt: 'MINE AI — Your own AI' }] },
  twitter: { card: 'summary_large_image', title: 'MINE AI — Your own AI', description: 'Turn your thoughts into a clear plan, tasks and reminders.', images: ['/og.png'] },
};
export const viewport: Viewport = { themeColor: '#F2F0EC' };
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
