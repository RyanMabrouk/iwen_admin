import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { IBookPopulated } from '@/types';

export const columns: ColumnDef<IBookPopulated>[] = [
  {
    id: 'select',
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
    accessorKey: 'cover_type_id',
    header: 'نوع الغلاف',
  },
  {
    accessorKey: 'created_at',
    header: 'تاريخ الإنشاء',
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
    accessorKey: 'discount',
    header: 'الخصم',
  },
  {
    accessorKey: 'discount_type',
    header: 'نوع الخصم',
  },
  {
    accessorKey: 'editor',
    header: 'المحرر',
  },
  {
    accessorKey: 'id',
    header: 'المعرف',
  },
  {
    accessorKey: 'images_urls',
    header: 'روابط الصور',
  },
  {
    accessorKey: 'isbn',
    header: 'رقم ISBN',
  },
  {
    accessorKey: 'name',
    header: 'الاسم',
  },
  {
    accessorKey: 'page_count',
    header: 'عدد الصفحات',
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
    accessorKey: 'release_year',
    header: 'سنة الإصدار',
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
    accessorKey: 'stock',
    header: 'المخزون',
  },
  {
    accessorKey: 'title',
    header: 'العنوان',
  },
  {
    accessorKey: 'updated_at',
    header: 'تاريخ التحديث',
  },
  {
    accessorKey: 'weight',
    header: 'الوزن',
  },
  {
    accessorKey: 'writer_id',
    header: 'معرف الكاتب',
  },
];
