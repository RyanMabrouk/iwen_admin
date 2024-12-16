'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getEndpoint from '@/services/getEndpoint';
import CRUDData from '@/services/CRUDData';
import { Trash } from 'lucide-react';

export default function ConfirmationWindow({ offerId }: { offerId: string }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const url = getEndpoint({
    resourse: 'offers',
    action: 'deleteOffer'
  });

  const deleteofferMutation = useMutation({
    mutationFn: async () => {
      const { error } = await CRUDData({
        method: 'DELETE',
        url: url(String(offerId))
      });
      if (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['offers'] });
      queryClient.invalidateQueries({ queryKey: ['offers', offerId] });
      setIsDialogOpen(false);
      toast({
        title: 'نجاح!',
        description: `تم حذف العرض بنجاح.`
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'خطأ!',
        description: `حدث خطأ أثناء حذف العرض: ${error.message} حاول مرة أخرى.`
      });
    }
  });

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild dir="rtl ">
        <button className="ml-auto mr-2 flex items-center justify-start gap-2 ">
          <Trash className="h-4 w-4" />
          <div>حذف</div>
        </button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogTitle>هل أنت متأكد من حذف العرض ؟ </DialogTitle>

        <div className="flex w-full justify-between">
          <button
            onClick={() => deleteofferMutation.mutate()}
            disabled={deleteofferMutation.isPending}
            className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md hover:opacity-50"
          >
            {deleteofferMutation.isPending ? 'جاري الحذف...' : 'نعم'}
          </button>

          <DialogClose>
            <button className="mt-5 w-fit rounded-md border bg-white px-4 py-2 text-lg text-color2 shadow-md hover:opacity-50">
              إلغاء
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
