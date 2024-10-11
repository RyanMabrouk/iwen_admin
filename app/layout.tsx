import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import './globals.css';
import Store from '@/provider/QCStore';
import AuthGuard from './guard/authGard';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-bgcolor1  `}
        suppressHydrationWarning={true}
      >
        <NextTopLoader showSpinner={false} />
          <Store>
            <Toaster />
            {children}
          </Store> 

      </body>
    </html>
  );
}
