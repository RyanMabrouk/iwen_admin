import { ColumnDef } from '@tanstack/react-table';

import { IBookPopulated } from '@/types';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
export const columnDefinitions = [
  {
    accessorKey: 'title',
    header: 'العنوان',
    visible: true
  },
  {
    accessorKey: 'writer_id',
    header: 'المِؤلف',
    visible: false
  },
  {
    accessorKey: 'category',
    header: 'الفئة',
    visible: true
  },
  {
    accessorKey: 'subcategory',
    header: 'الفئة الفرعية',
    visible: false
  },

  {
    accessorKey: 'description',
    header: 'الوصف',
    visible: true
  },
  {
    accessorKey: 'price',
    header: 'السعر',
    visible: true
  },
  {
    accessorKey: 'price_dhs',
    header: 'السعر بالدولار',
    visible: false
  },
  {
    accessorKey: 'discount',
    header: 'الخصم',
    visible: true
  },
  {
    accessorKey: 'discount_type_arabic',
    header: 'نوع الخصم',
    visible: false
  },
  {
    accessorKey: 'price_after_discount',
    header: 'السعر بعد الخصم',
    visible: false
  },
  {
    accessorKey: 'stock',
    header: 'المخزون',
    visible: true
  },
  {
    accessorKey: 'share_house_id',
    header: 'دار النشر',
    visible: false
  },
  {
    accessorKey: 'status_arabic',
    header: 'الحالة',
    visible: false
  },

  {
    accessorKey: 'cover_type_id',
    header: 'نوع الغلاف',
    visible: false
  },
  {
    accessorKey: 'release_year',
    header: 'سنة الإصدار',
    visible: false
  },
  {
    accessorKey: 'page_count',
    header: 'عدد الصفحات',
    visible: false
  },
  {
    accessorKey: 'weight',
    header: 'الوزن',
    visible: false
  },
  {
    accessorKey: 'editor',
    header: 'المحقق',
    visible: false
  },
  {
    accessorKey: 'isbn',
    header: 'الترقيم الدولي',
    visible: false
  }
];

export const columns = ({
  selectedIds,
  setSelectedIds,
  columnState
}: {
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  columnState: typeof columnDefinitions;
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
          const id = row.original.id;
          setSelectedIds((prev) =>
            value
              ? [...prev, id]
              : prev.filter((selectedId) => selectedId !== id)
          );
          row.toggleSelected(!!value);
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  ...columnState
    .filter((col) => col.visible)
    .map((col) => ({
      accessorKey: col.accessorKey,
      header: col.header
    })),
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
