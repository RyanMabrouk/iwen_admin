'use client';

import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronDown,
  BookOpen,
  Calendar,
  Image as ImageIcon,
  Users,
  LogOut,
  ClipboardList
} from 'lucide-react';
import { DashboardNav } from '@/components/dashboard-nav';
import { navItems } from '@/constants/data';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/useSidebar';
import Image from 'next/image';
import Link from 'next/link';
import ConfirmationWindowLogout from '@/app/dashboard/ui/confirmationWindow';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) =>
      prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
    );
  };

  const groupedNavItems = {
    الكتب: {
      items: navItems.filter(
        (item) => item.label === 'books' || item.label === 'addBook'
      ),
      icon: <BookOpen />
    },
    الفعاليات: {
      items: navItems.filter(
        (item) => item.label === 'events' || item.label === 'event'
      ),
      icon: <Calendar />
    },
    الإعلانات: {
      items: navItems.filter(
        (item) => item.label === 'banners' || item.label === 'banner'
      ),
      icon: <ImageIcon />
    }
  };

  const standaloneNavItems = [
    { href: '/dashboard/orders', title: 'الطلبات', icon: <ClipboardList /> },
    { href: '/dashboard/users', title: 'المستخدمون', icon: <Users /> },
    {
      title: 'تسجيل الخروج',
      icon: <LogOut />
    }
  ];

  return (
    <aside
      dir="rtl"
      className={cn(
        `relative hidden flex-none border-r bg-color1 text-white transition-[width] duration-500 md:block`,
        !isMinimized ? 'w-72' : 'w-[72px]',
        className
      )}
    >
      <div className="ml-auto hidden p-5 pt-10 lg:block">
        <Image src="/logo.png" width={150} height={150} alt="logo" />
      </div>
      <ChevronRight
        className={cn(
          'absolute -left-3 top-10 z-50 cursor-pointer rounded-full border bg-background text-3xl text-foreground',
          isMinimized && 'rotate-180'
        )}
        onClick={toggle}
      />
      <div className="space-y-4 py-4">
        {Object.entries(groupedNavItems).map(([group, { items, icon }]) => (
          <div key={group}>
            <button
              onClick={() => toggleGroup(group)}
              className={cn(
                'flex w-full items-center px-4 py-2 text-xl font-medium',
                isMinimized && 'truncate'
              )}
            >
              <span>{icon}</span>
              <span className="mr-2">{group}</span>
              <span className="mr-auto">
                {expandedGroups.includes(group) ? (
                  <ChevronDown className="text-xl" />
                ) : (
                  <ChevronRight className="text-xl" />
                )}
              </span>
            </button>
            {items.length > 0 && (
              <div
                className={cn(
                  'transition-max-h overflow-hidden pl-8',
                  expandedGroups.includes(group) ? 'max-h-screen' : 'max-h-0'
                )}
              >
                <DashboardNav items={items} isMobileNav={false} />
              </div>
            )}
          </div>
        ))}
        {standaloneNavItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-2 text-xl font-medium hover:opacity-70"
          >
            {item.href ? (
              <Link href={item.href} className="flex w-full items-center">
                <span className="ml-2">{item.icon}</span>
                {!isMinimized && <span className="mr-2">{item.title}</span>}
              </Link>
            ) : (
              <button
                onClick={() => setIsDialogOpen(true)}
                className="flex w-full items-center text-xl font-medium"
              >
                <span className="ml-2">{item.icon}</span>
                {!isMinimized && <span className="mr-2">{item.title}</span>}
              </button>
            )}
          </div>
        ))}
      </div>
      {isDialogOpen && (
        <ConfirmationWindowLogout
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
      )}
    </aside>
  );
}
