import { NavItem } from '@/types';


export const navItems: NavItem[] = [
  /*{
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'المستخ',
    href: '/dashboard/user',
    icon: 'user',
    label: 'users'

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

  }
  ,
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
    title: 'إضافة راية',
    href: '/dashboard/banner',
    icon: 'banner',
    label: 'banner'
  } ,
  /*
  {
    title: 'إضافة حدث',
    href: '/dashboard/event',
    icon: 'events',
    label: 'event'
  } ,*/
  {
    title: 'تسجيل الخروج',
    href: '/',
    icon: 'login',
    label: 'logOut'
  }
];
