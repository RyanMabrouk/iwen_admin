"use client"
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Trash } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import CRUDData from '@/services/CRUDData';
import getEndpoint from '@/services/getEndpoint';
export default function DeleteUser({id}:{id:string } ) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const queryClient = useQueryClient();
  const [isPending, setIsPending] = useState(false);

  const { toast } = useToast();
  const url = getEndpoint({  resourse: "users", action : "updateUser" });
  const deleteMutation = useMutation({
    mutationFn: async () => {
      const{error} = await CRUDData({ method: "DELETE", url: url(id)  })
      if(error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
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
    deleteMutation.mutate();
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <DialogTrigger>
      <Trash className="cursor-pointer text-xs w-5 h-5" />
    </DialogTrigger>
    <DialogContent dir="rtl">
      <DialogTitle>هل أنت متأكد من إزالت هذا المستخدم؟</DialogTitle>
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
  )
}
