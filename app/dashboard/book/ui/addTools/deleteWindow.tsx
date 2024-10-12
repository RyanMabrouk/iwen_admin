'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Icons } from '@/components/icons';
import { useToast } from '@/components/ui/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import CRUDData from '@/services/CRUDData';
import getEndpoint, { IResourse } from '@/services/getEndpoint';

export default function DeleteWindow({
  url,
  resourse,
}: {url: string, resourse: IResourse}) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: async () => {

      const { error } = await CRUDData({
        method: 'DELETE',
        url: url,
      });
      if (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [resourse] });
      toast({
        title: 'نجاح!',
        description: `تمت الإزالة بنجاح.`
      });
      setIsDialogOpen(false);
      setIsPending(false);
    },
    onError: (error) => {
      toast({
        title: 'خطأ!',
        description: 'حدث خطأ أثناء إزالة العنصر. حاول مرة أخرى.'
      });
      setIsPending(false);
    }
  });

  const handleConfirm = () => {
    setIsPending(true);
    deleteMutation.mutate();
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <Icons.trash className="h-6 w-6 cursor-pointer font-bold text-red-500" />
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogTitle>هل أنت متأكد من  عملية الإزالة ؟</DialogTitle>
        <div className="flex w-full justify-between">
          <button
            onClick={handleConfirm}
            disabled={isPending}
            className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md hover:opacity-50"
          >
            {isPending ? 'جاري الإزالة...' : 'نعم'}
          </button>

          <DialogClose asChild>
            <button className="mt-5 w-fit rounded-md border bg-white px-4 py-2 text-lg text-color2 shadow-md">
              الغاء
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
