import { ColumnDef } from '@tanstack/react-table';
import { Pencil } from 'lucide-react';
import Link from 'next/link';
import { IBookPopulated } from '@/types';

export const columns: ColumnDef<IBookPopulated>[] = [
  {
    id: 'edit',
    header: '', // No header for the edit column
    cell: ({ row }) => (
      <Link href={`/dashboard/editBook/${row.original.id}`} passHref>
        <Pencil className="cursor-pointer text-sm" />
      </Link>
    ),
    enableSorting: false,
    enableHiding: false,
    // You can set a fixed width if needed:
    size: 50,
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
