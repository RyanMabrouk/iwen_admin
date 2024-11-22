'use client';
import React, { useEffect, useState } from 'react';
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
import { redirect } from 'next/navigation';

export default function ConfirmationWindow({orderId}:{orderId:string}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const url = getEndpoint({
    resourse: 'orders',
    action: 'deleteOrder'
  });

  const deleteOrderMutation = useMutation({
    mutationFn: async () => {
      const { error } = await CRUDData({
        method: 'DELETE',
        url: url(String(orderId))
      });
      if (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      queryClient.invalidateQueries({ queryKey: ['orders', orderId] });
      toast({
        title: 'نجاح!',
        description: `تم حذف الطلب بنجاح.`
      });
      setIsSuccess(true); 
    },
    onError: (error: Error) => {
      toast({
        title: 'خطأ!',
        description: `حدث خطأ أثناء حذف الطلب: ${error.message} حاول مرة أخرى.`
      });
    }
  });

  useEffect(() => {
    if (isSuccess) {
      redirect('/dashboard/orders');
    }
  }, [isSuccess]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <button className="w-fit rounded-md bg-color2 px-4 py-2 text-lg text-white hover:opacity-50">
          حذف الطلب
        </button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogTitle>هل أنت متأكد من حذف الطلب ؟ </DialogTitle>

        <div className="flex w-full justify-between">
          <button
            onClick={() => deleteOrderMutation.mutate()}
            disabled={deleteOrderMutation.isPending}
            className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md hover:opacity-50"
          >
            {deleteOrderMutation.isPending ? 'جاري الحذف...' : 'نعم'}
          </button>

          <DialogClose asChild>
            <button className="mt-5 w-fit rounded-md border bg-white px-4 py-2 text-lg text-color2 shadow-md hover:opacity-50">
              إلغاء
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
