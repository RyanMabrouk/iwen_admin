import { ColumnDef } from '@tanstack/react-table';
import { Tables } from '@/types/database.types'; // Importing the correct type from your schema
import { Checkbox } from '@/components/ui/checkbox';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Tables<'users'>>[] = [
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
    accessorKey: 'role',
    header: 'الأدوار',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
