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

export default function CancelReason() {
  const [cancel_reason, setCancel_reason] = useState<string>('');
  const { orderId } = useParams();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const cancelUrl = getEndpoint({
    resourse: 'orders',
    action: 'cancelOrder'
  });
  const cancelOrderMutation = useMutation({
    mutationFn: async () => {
      const { error } = await CRUDData({
        method: 'PATCH',
        url: cancelUrl(String(orderId)),
        payload: { cancel_reason }
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
        description: `تم إلغاءالطلب بنجاح.`
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'خطأ!',
        description: `حدث خطأ أثناء إلغاء الطلب: ${error.message} حاول مرة أخرى.`
      });
    }
  });
  return (
    <Dialog>
      <DialogTrigger>
        <button className="mt-5 w-fit rounded-md border bg-red-500 px-4 py-2 text-lg text-white shadow-md hover:opacity-50">
          إلغاء 
        </button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogTitle>هل أنت متأكد من إلغاء الطلب ؟ </DialogTitle>
        <DialogDescription className='text-right'>
أذكر سبب الإلغاء :            </DialogDescription>
        <Textarea
          value={cancel_reason}
          onChange={(e) => setCancel_reason(e.target.value)}
          placeholder="السبب"
        />

        <div className="flex w-full justify-between">
          <button
            onClick={() => cancelOrderMutation.mutate()}
            disabled={cancelOrderMutation.isPending}
            className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md hover:opacity-50"
          >
            {cancelOrderMutation.isPending ? 'جاري الإلغاء...' : 'نعم'}
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
