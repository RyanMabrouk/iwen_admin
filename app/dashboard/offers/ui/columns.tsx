import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import {  IOffer } from '@/types';

export const columns: ColumnDef<IOffer>[] = [
  {
    accessorKey: 'title',
    header: ' عنوان العرض',
  },
  {
    accessorKey: 'description',
    header: 'الوصف',
  },
  {
    accessorKey: 'price_before_offer',
    header: 'السعر قبل العرض',
  },
  {
    accessorKey: 'price_after_offer',
    header: 'السعر بعد العرض',
  },
  {
    accessorKey: 'created_at',
    header :'تاريخ الإنشاء'
  },
  {
    accessorKey: 'updated_at',
    header :'تاريخ التحديث'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
