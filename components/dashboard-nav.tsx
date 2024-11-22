'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import { useSidebar } from '@/hooks/useSidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip';

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function DashboardNav({
  items,
  setOpen,
  isMobileNav = false
}: DashboardNavProps) {
  const path = usePathname();
  const { isMinimized } = useSidebar();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2 ">
      <TooltipProvider>
        {items.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              {
                <Link
                  href={item.disabled ? '/' : item?.href || '/'}
                  className={cn(
                    'flex items-center gap-2 overflow-hidden rounded-md px-2 mr-4 py-2 text-base font-medium',
                    item.disabled && 'cursor-not-allowed opacity-80',
                    path === item.href && 'bg-white text-color1',
                    path !== item.href ? 'hover:opacity-50' : ''
                  )}
                >
                  {isMobileNav || (!isMinimized && !isMobileNav) ? (
                    <span className="mr-2 truncate">{item.title}</span>
                  ) : (
                    ''
                  )}
                </Link>
              }
            </TooltipTrigger>
            <TooltipContent
              align="center"
              side="right"
              sideOffset={8}
              className={!isMinimized ? 'hidden' : 'inline-block'}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </nav>
  );
}
