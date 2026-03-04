import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'PropertyScope AI | Intelligent Housing Predictions',
  description: 'AI-powered real estate market analysis and house price forecasting.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Toaster />
        <footer className="border-t py-8 bg-card text-muted-foreground text-sm">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} PropertyScope AI Group Project. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}