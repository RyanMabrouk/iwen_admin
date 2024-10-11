'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { z } from 'zod';
import ConfirmationWindow from './confirmationWindow';
import Input from '@/components/input';
import { useToast } from '@/components/ui/use-toast';

const schema = z.object({
  first_name: z.string().min(1, { message: "الاسم الأول مطلوب" }),
  last_name: z.string().min(1, { message: "الاسم الأخير مطلوب" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صحيح" }),
  password: z.string().min(7, { message: "كلمة المرور يجب أن تكون أكبر من 6 أحرف" }),
});

export default function AddAdmin() {
  const [payload, setPayload] = useState<{ first_name: string; last_name: string; email: string; password: string }>({ first_name: '', last_name: '', email: '', password: '' });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(e.currentTarget);
    const first_name = String(formData.get('first_name'));
    const last_name = String(formData.get('last_name'));
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));

    // Validate the form data using Zod
    try {
      schema.parse({ first_name, last_name, email, password });
      setPayload({ first_name, last_name, email, password });
      setIsDialogOpen(true); // Open the dialog if validation is successful
    } catch (error) {
      // Show toast notification with error messages
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => {
          toast({
            title: 'خطأ في التحقق من صحة النموذج',
            description: err.message,
          });
        });
      }
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <button className="w-fit bg-color2 px-4 py-2 text-lg text-white hover:opacity-50 rounded-md">
          إضافة مسؤل جديد
        </button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogTitle>إضافة مسؤل جديد</DialogTitle>
        <form
          className="flex flex-col gap-8 rounded-sm p-3"
          onSubmit={handleSubmit} // Use the new handleSubmit function
        >
          <h2 className="text-color5 mb-4 text-2xl font-bold">معلومات المسؤول</h2>
          <div className="space-y-4">
            <Input
              label="الاسم الأول"
              name="first_name"
              placeholder="أدخل الاسم الأول"
            />
            <Input
              label="الاسم الأخير"
              name="last_name"
              placeholder="أدخل الاسم الأخير"
            />
            <Input
              label="البريد الإلكتروني"
              name="email"
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
            />
            <Input
              label="كلمة المرور"
              name="password"
              type="password"
              placeholder="أدخل كلمة المرور"
            />
          </div>
          <div className="flex w-full justify-between">
            <ConfirmationWindow payload={payload} resetForm={() => setPayload({ first_name: '', last_name: '', email: '', password: '' })} />
            <DialogClose asChild>
              <button 
                className="mt-5 w-fit rounded-md border bg-white px-4 py-2 text-lg text-color2 shadow-md">
                إلغاء
              </button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
