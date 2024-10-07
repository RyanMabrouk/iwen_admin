import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { IBookPopulated } from '@/types';

export const columns: ColumnDef<IBookPopulated>[] = [
  {
    id: 'id',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: 'العنوان',
  },
  {
    accessorKey: 'writer_id',
    header: 'الكاتب',
  },
  {
    accessorKey: 'category',
    header: 'الفئة',
  },
  {
    accessorKey: 'subcategory',
    header: 'الفئة الفرعية',
  },
  {
    accessorKey: 'description',
    header: 'الوصف',
  },
  {
    accessorKey: 'price',
    header: 'السعر',
  },
  {
    accessorKey: 'price_usd',
    header: 'السعر بالدولار',
  },
  {
    accessorKey: 'discount',
    header: 'الخصم',
  },
  {
    accessorKey: 'discount_type',
    header: 'نوع الخصم',
  },
  {
    accessorKey: 'stock',
    header: 'المخزون',
  },
  {
    accessorKey: 'isbn',
    header: 'رقم ISBN',
  },
  {
    accessorKey: 'release_year',
    header: 'سنة الإصدار',
  },
  {
    accessorKey: 'cover_type_id',
    header: 'نوع الغلاف',
  },
  {
    accessorKey: 'page_count',
    header: 'عدد الصفحات',
  },
  {
    accessorKey: 'weight',
    header: 'الوزن',
  },
  {
    accessorKey: 'share_house_id',
    header: 'دار النشر',
  },
  {
    accessorKey: 'status',
    header: 'الحالة',
  },

  {
    accessorKey: 'editor',
    header: 'المحرر',
  },
];
