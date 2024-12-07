'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogDescription
} from '@/components/ui/dialog';
import getEndpoint from '@/services/getEndpoint';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CRUDData from '@/services/CRUDData';
import { Textarea } from '@/components/ui/textarea';

export default function ConfirmOrder() {
  const { orderId } = useParams();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const confirmUrl = getEndpoint({
    resourse: 'orders',
    action: 'confirmOrder'
  });

  const addOrderMutation = useMutation({
    mutationFn: async () => {
      const { error } = await CRUDData({
        method: 'PATCH',
        url: confirmUrl(String(orderId))
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
        description: `تم إتمام الطلب بنجاح.`
      });
    },
    onError: (error) => {
      toast({
        title: 'خطأ!',
        description: `حدث خطأ أثناء إتمام الطلب: ${error.message} حاول مرة أخرى.`
      });
    }
  });

  return (
    <Dialog>
      <DialogTrigger>
        <button className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md hover:opacity-50">
          إتمام الطلب
        </button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogTitle>هل أنت متأكد من إتمام الطلب ؟ </DialogTitle>


        <div className="flex w-full justify-between">
          <button
            onClick={() => addOrderMutation.mutate()}
            disabled={addOrderMutation.isPending}
            className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md hover:opacity-50"
          >
            {addOrderMutation.isPending ? 'جاري الإتمام...' : 'نعم'}
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
