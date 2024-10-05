'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getEndpoint, { IResourse } from '@/services/getEndpoint';
import CRUDData from '@/services/CRUDData';

export default function ConfirmationWindow({
  name,
  url,
  resource
}: {
  name: string;
  url: string;
  resource: IResourse;
}) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const AddMutation = useMutation({
    mutationFn: async () => {
      const{error} = await CRUDData({ method: "POST", url: url , payload : {name : name} })
      if(error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [resource] });
      toast({
        title: 'نجاح!',
        description: `تمت إضافة ${name} بنجاح.`,
      });
      setIsDialogOpen(false);
      setIsPending(false);
    },
    onError: () => {
      toast({
        title: 'خطأ!',
        description: 'حدث خطأ أثناء إضافة العنصر. حاول مرة أخرى.',
      });
      setIsPending(false);
    },
  });

  const handleConfirm = () => {
    setIsPending(true);
    AddMutation.mutate();
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <button className="hover:opacity-50 mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md">
          تسجيل
        </button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogTitle>هل أنت متأكد من إضافة &lrm;{name}؟</DialogTitle>

        <div className="flex w-full justify-between">
          <button
            onClick={handleConfirm}
            disabled={isPending}
            className="hover:opacity-50 mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md"
          >
            {isPending ? 'جاري الإضافة...' : 'نعم'}
          </button>

          <DialogClose asChild>
            <button className="hover:opacity-50 mt-5 w-fit rounded-md border bg-white px-4 py-2 text-lg text-color2 shadow-md">
              إلغاء
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
