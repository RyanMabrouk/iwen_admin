import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { IEvent } from '@/types';

export const columns: ColumnDef<IEvent>[] = [
  {
    accessorKey: 'name',
    header: 'الاسم الفعالية'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
