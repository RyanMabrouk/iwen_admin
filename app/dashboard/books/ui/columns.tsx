import { ColumnDef } from '@tanstack/react-table';
import { Pencil } from 'lucide-react';
import Link from 'next/link';
import { IBookPopulated } from '@/types';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';

export const columns = ({
  selectedIds,
  setSelectedIds
}: {
  selectedIds: string[],
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>
}): ColumnDef<IBookPopulated>[] => [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => {
          const allIds = table.getRowModel().rows.map((row) => row.original.id);
          setSelectedIds(value ? allIds : []);
          table.toggleAllPageRowsSelected(!!value);
        }}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={selectedIds.includes(row.original.id)}
        onCheckedChange={(value) => {
          // Toggle single row selection
          const id = row.original.id;
          setSelectedIds((prev) =>
            value ? [...prev, id] : prev.filter((selectedId) => selectedId !== id)
          );
          row.toggleSelected(!!value);
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  // Other columns
  {
    accessorKey: 'title',
    header: 'العنوان',
  },

  {
    accessorKey: 'category',
    header: 'الفئة',
  },

  {
    accessorKey: 'description',
    header: 'الوصف',
  },
  {
    accessorKey: 'price_dhs',
    header: 'السعر',
  },
  {
    accessorKey: 'discount',
    header: 'الخصم',
  },
  {
    accessorKey: 'stock',
    header: 'المخزون',
  },
  {
    accessorKey: 'share_house_id',
    header: 'دار النشر',
  },
  {
    accessorKey: 'status_arabic',
    header: 'الحالة',
  },

  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
