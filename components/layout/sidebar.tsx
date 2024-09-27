'use client';
import React from 'react';
import { DashboardNav } from '@/components/dashboard-nav';
import { navItems } from '@/constants/data';
import { cn } from '@/lib/utils';
import {  ChevronRight } from 'lucide-react';
import { useSidebar } from '@/hooks/useSidebar';
import Link from 'next/link';
import Image from 'next/image';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();

  const handleToggle = () => {
    toggle();
  };

  return (
    <aside
      dir="rtl"
      className={cn(
        `relative  hidden  flex-none border-r bg-color1 text-white transition-[width] duration-500 md:block`,
        !isMinimized ? 'w-72' : 'w-[72px]',
        className
      )}
    >
      <div className="hidden p-5 pt-10 lg:block ml-auto">
        <Link
          href={'https://github.com/Kiranism/next-shadcn-dashboard-starter'}
          target="_blank"
        >
          <Image src="/logo.png" width={150} height={150} alt="logo" />
        </Link>
      </div>
      <ChevronRight // Use ChevronRight instead of ChevronLeft for RTL
        className={cn(
          'absolute -left-3 top-10 z-50 cursor-pointer rounded-full border bg-background text-3xl text-foreground', // Change '-right-3' to '-left-3'
          isMinimized && 'rotate-180'
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </aside>
  );
}
