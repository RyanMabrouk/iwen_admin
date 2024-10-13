import getSession from '@/api/getSession';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import AuthGuard from '../guard/authGard';

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { session } = await getSession();
  if (!session) redirect("/");
  return (
    <div className="flex">
      <AuthGuard>
      <main className="w-full flex-1 overflow-hidden " >
      <Header />

        {children}
      </main>
      <Sidebar className='min-h-screen' />
      </AuthGuard>


    </div>
  );
}
