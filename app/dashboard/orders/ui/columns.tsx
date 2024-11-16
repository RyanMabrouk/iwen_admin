import { ColumnDef } from '@tanstack/react-table';

import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
import { Tables } from '@/types/database.types';
export const columnDefinitions = [
  {
    accessorKey: 'address',
    header: 'العنوان',
    visible: true
  },
  {
    accessorKey: 'cancel_reason',
    header: 'سبب الإلغاء',
    visible: false
  },
  {
    accessorKey: 'city',
    header: 'المدينة',
    visible: true
  },
  {
    accessorKey: 'created_at',
    header: 'تاريخ الإنشاء',
    visible: false
  },
  {
    accessorKey: 'delivery_price',
    header: 'سعر التوصيل',
    visible: true
  },
  {
    accessorKey: 'email',
    header: 'البريد الإلكتروني',
    visible: false
  },
  {
    accessorKey: 'name',
    header: 'الاسم',
    visible: true
  },
  {
    accessorKey: 'payment_method_arabic',
    header: 'طريقة الدفع',
    visible: true
  },
  {
    accessorKey: 'phone_number',
    header: 'رقم الهاتف',
    visible: false
  },
  {
    accessorKey: 'postal_code',
    header: 'الرمز البريدي',
    visible: false
  },
  {
    accessorKey: 'status_arabic',
    header: 'الحالة',
    visible: true
  },
  {
    accessorKey: 'total_price',
    header: 'السعر الإجمالي',
    visible: true
  },
  {
    accessorKey: 'user_id',
    header: 'رقم المستخدم',
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
}): ColumnDef<Tables<"orders">>[] => [
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
