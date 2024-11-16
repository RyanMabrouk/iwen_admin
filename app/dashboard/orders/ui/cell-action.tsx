'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { IBookPopulated } from '@/types';
import { Edit, Info, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import DeleteOrders from './deleteOrders';
import { Tables } from '@/types/database.types';

interface CellActionProps {
  data: Tables<"orders">;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">فتح القائمة</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className='max-w-[6rem] min-w-[6rem]'>
          <DropdownMenuLabel dir="rtl">إجراءات</DropdownMenuLabel>

          <DropdownMenuItem
            dir="rtl"
          >
            <Link href={`/dashboard/order/${data.id}`}>
            التفاصيل
            </Link>
            
            <Info className="mr-2 h-4 w-4" />
          </DropdownMenuItem>
          <DropdownMenuItem asChild dir="rtl">
            <DeleteOrders ids={[data.id]} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
