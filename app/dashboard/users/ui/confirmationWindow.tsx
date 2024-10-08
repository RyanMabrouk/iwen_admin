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
import signUp from '@/actions/(auth)/signup';

export default function ConfirmationWindow({
    payload,
    resetForm
  }: {
    payload: Record<string, any>;
    resetForm: () => void; // Accept resetForm as a prop
  }) {
    const queryClient = useQueryClient();
    const { toast } = useToast();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isPending, setIsPending] = useState(false);

    // AddMutation using react-query's useMutation hook
    const AddMutation = useMutation({
      mutationFn: async () => {
        // Handle signup and return any error
        const { error } = await signUp({ 
          email: payload.email, 
          password: payload.password, 
          first_name: payload.first_name, 
          last_name: payload.last_name, 
          roles: ["user", "admin"] 
        });
        if (error) {
          throw new Error(error.message);  // Throw an error to trigger onError
        }
      },
      onSuccess: () => {
        // Invalidate query cache and show success toast
        queryClient.invalidateQueries({ queryKey: ["users"] });
        toast({
          title: 'نجاح!',
          description: `تمت إضافة ${payload.first_name + " " + payload.last_name} بنجاح.`,
        });
        setIsDialogOpen(false);
        setIsPending(false);
        resetForm(); // Reset the form
      },
      onError: (error: any) => {
        // Show error toast
        toast({
          title: 'حدث خطأ أثناء إضافة المستخدم',
          description: ` ${error.message}`,  // Display the error message
        });
        setIsPending(false);
      },
    });

    const handleConfirm = () => {
      setIsPending(true); // Set the pending state
      AddMutation.mutate(); // Trigger the mutation
    };

    return (
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger>
          <button className="hover:opacity-50 mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md"
            type='submit'>
            تسجيل
          </button>
        </DialogTrigger>
        <DialogContent dir="rtl">
          <DialogTitle>هل أنت متأكد من إضافة {payload.first_name + " " + payload.last_name}؟</DialogTitle>
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
