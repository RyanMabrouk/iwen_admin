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
import { Trash } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import CRUDData from '@/services/CRUDData';
import getEndpoint from '@/services/getEndpoint';

export default function DeleteBooks({ ids , setSelectedIds }: { ids: string[]; setSelectedIds?: (selectedIds: string[]) => void }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const queryClient = useQueryClient();
  const [isPending, setIsPending] = useState(false);

  const { toast } = useToast();
  const url = getEndpoint({ resourse: 'books', action: 'deleteBook' });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      // Use Promise.all to handle multiple delete requests
      const results = await Promise.all(
        ids.map(async (id) => {
          const { error } = await CRUDData({ method: 'DELETE', url: url(id) });
          if (error) {
            throw new Error(`Error deleting book with ID ${id}: ${error}`);
          }
        })
      );
      return results;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
      toast({
        title: 'نجاح!',
        description: `تم حذف الكتب بنجاح.`
      });
      setSelectedIds?.([]); // Remove selected ids from the selectedIds array on success
      setIsDialogOpen(false); // Close dialog on success
      setIsPending(false);
    },
    onError: (error: Error) => {
      toast({
        title: 'خطأ!',
        description: `حدث خطأ أثناء حذف العناصر: ${error.message}`
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
      <DialogTrigger asChild dir="rtl ">
        <button
          onClick={() => setIsDialogOpen(true)} // Ensure this triggers the dialog opening
          className="ml-auto flex items-center justify-start mr-2 gap-2 "
        >
          <Trash className="h-4 w-4" />
          <div>حذف</div>
        </button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogTitle>هل أنت متأكد من إزالة هذه الكتب؟</DialogTitle>
        <div className="flex w-full justify-between">
          <button
            onClick={handleConfirm}
            disabled={isPending}
            className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md hover:opacity-50"
          >
            {isPending ? 'جاري الحذف...' : 'نعم'}
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
