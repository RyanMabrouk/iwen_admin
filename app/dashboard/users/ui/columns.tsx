import { ColumnDef } from '@tanstack/react-table';
import { Pencil, Trash } from 'lucide-react';
import Link from 'next/link';
import { Tables } from '@/types/database.types'; // Importing the correct type from your schema
import DeleteUser from './deleteUser';
import { url } from 'inspector';

export const columns: ColumnDef<Tables<'users'>>[] = [/*
  {
    id: 'edit',
    header: '', 
    cell: ({ row }) => (
    
      <DeleteUser id={row.original.user_id}  />
     
    ),
    enableSorting: false,
    enableHiding: false,
    size: 50
  },*/
  {
    accessorKey: 'first_name',
    header: 'الاسم الأول'
  },
  {
    accessorKey: 'last_name',
    header: 'الاسم الأخير'
  },
  {
    accessorKey: 'email',
    header: 'البريد الإلكتروني'
  },
  {
    accessorKey: 'roles',
    header: 'الأدوار',
  }
];
