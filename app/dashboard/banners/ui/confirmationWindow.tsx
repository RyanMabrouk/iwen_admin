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
import { Trash, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function ConfirmationWindow({ bannerId }: { bannerId: string }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const url = getEndpoint({
    resourse: 'banners',
    action: 'deleteBanner'
  });

  const deleteBannerMutation = useMutation({
    mutationFn: async () => {
      const { error } = await CRUDData({
        method: 'DELETE',
        url: url(String(bannerId))
      });
      if (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['banners'] });
      queryClient.invalidateQueries({ queryKey: ['banners', bannerId] });
      toast({
        title: 'نجاح!',
        description: `تم حذف الإعلان بنجاح.`
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'خطأ!',
        description: `حدث خطأ أثناء حذف الإعلان: ${error.message} حاول مرة أخرى.`
      });
    }
  });

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild dir="rtl ">
        <button
          onClick={() => setIsDialogOpen(true)}
          className="ml-auto mr-2 flex items-center justify-start gap-2 "
        >
          <Trash className="h-4 w-4" />
          <div>حذف</div>
        </button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogTitle>هل أنت متأكد من حذف الإعلان ؟ </DialogTitle>

        <div className="flex w-full justify-between">
          <button
            onClick={() => deleteBannerMutation.mutate()}
            disabled={deleteBannerMutation.isPending}
            className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md hover:opacity-50"
          >
            {deleteBannerMutation.isPending ? 'جاري الحذف...' : 'نعم'}
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
