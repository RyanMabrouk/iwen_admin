'use client';
import { AlertModal } from '@/components/modal/alert-modal';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Tables } from '@/types/database.types';
import {  MoreHorizontal } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import UpdateUser from './updateUser';

interface CellActionProps {
  data: Tables<"users">;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {};

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">فتح القائمة</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent  align="end" className='max-w-[5rem] min-w-[5rem]' > 
          <DropdownMenuLabel dir='rtl'>إجراءات</DropdownMenuLabel>

          <DropdownMenuItem asChild dir="rtl">
            <UpdateUser userId={data.user_id} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
