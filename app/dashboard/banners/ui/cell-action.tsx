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
import { Edit, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import ConfirmationWindow from './confirmationWindow';

interface CellActionProps {
  bannerId: string;
}
export const CellAction: React.FC<CellActionProps> = ({ bannerId }) => {

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">فتح القائمة</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className='max-w-[5rem] min-w-[5rem]'>
          <DropdownMenuLabel dir="rtl">إجراءات</DropdownMenuLabel>

          <DropdownMenuItem
            dir="rtl"
          >
            <Link href={`/dashboard/banner?bannerId=${bannerId}`}>
            تحديث
            </Link>
            <Edit className="mr-2 h-4 w-4" />
          </DropdownMenuItem>
          <DropdownMenuItem asChild  >
            <ConfirmationWindow bannerId={String(bannerId)} />         
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
