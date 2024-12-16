import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import {  IOffer } from '@/types';
import { Tables } from '@/types/database.types';

export const columns: ColumnDef<Tables<"writers">>[] = [
  {
    accessorKey: 'name',
    header: ' الاسم', 
  },
  {
    accessorKey: 'nationality',
    header: 'الجنسية',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
