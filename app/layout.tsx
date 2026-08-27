import type { Metadata, Viewport } from 'next';
import './globals.css';
import './site.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://usemineai.com'),
  title: 'MINE AI — Turn your life into a plan',
  description: 'Tell MINE AI what’s happening in your life. It helps turn your plans, tasks and responsibilities into a clear day.',
  alternates: { canonical: '/' },
  openGraph: { title: 'MINE AI — Turn your life into a plan', description: 'Tell MINE AI what’s happening. Get a clear day.', url: '/', siteName: 'MINE AI', type: 'website', images: [{ url: '/og.png', width: 1536, height: 900, alt: 'MINE AI — Turn your life into a plan' }] },
  twitter: { card: 'summary_large_image', title: 'MINE AI — Turn your life into a plan', description: 'Tell MINE AI what’s happening. Get a clear day.', images: ['/og.png'] },
};
export const viewport: Viewport = { themeColor: '#f8f8f4' };
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
