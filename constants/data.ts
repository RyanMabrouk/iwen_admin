import { NavItem } from '@/types';

export const navItems: NavItem[] = [
  /*{
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },*/
  {
    title: 'المستخدمين',
    href: '/dashboard/users',
    icon: 'user',
    label: 'users'
  },
  {
    title: 'الكتب',
    href: '/dashboard/books',
    icon: 'book',
    label: 'books'
  },
  {
    title: 'إضافة كتاب',
    href: '/dashboard/book',
    icon: 'add',
    label: 'addBook'
  },
  {
    title: 'الطلبات',
    href: '/dashboard/orders',
    icon: 'order',
    label: 'orders'
  },
  {
    title: 'الإعلانات',
    href: '/dashboard/banners',
    icon: 'banner',
    label: 'banners'
  },
  {
    title: 'إضافة إعلان',
    href: '/dashboard/banner',
    icon: 'add',
    label: 'banner'
  },

  {
    title: 'الفعاليات',
    href: '/dashboard/events',
    icon: 'events',
    label: 'events'
  },

  {
    title: 'إضافة فعالية',
    href: '/dashboard/event',
    icon: 'add',
    label: 'event'
  },

  {
    title: 'تسجيل الخروج',
    href: '/',
    icon: 'login',
    label: 'logOut'
  }
];
