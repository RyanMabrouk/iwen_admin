'use client';
import React, { useState, useRef } from 'react';
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

const schema = z.object({
  first_name: z.string().min(1, { message: 'الاسم الأول مطلوب' }),
  last_name: z.string().min(1, { message: 'الاسم الأخير مطلوب' }),
  email: z.string().email({ message: 'البريد الإلكتروني غير صحيح' }),
  password: z
    .string()
    .min(7, { message: 'كلمة المرور يجب أن تكون أكبر من 6 أحرف' })
});

export default function AddAdmin() {
  const [errors, setErrors] = useState<string[]>([]);
  const [payload, setPayload] = useState<{
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }>({ first_name: '', last_name: '', email: '', password: '' });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogOpen2, setIsDialogOpen2] = useState(false);
  
  // Create a form reference
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    const first_name = String(formData.get('first_name'));
    const last_name = String(formData.get('last_name'));
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));
    try {
      schema.parse({ first_name, last_name, email, password });
      setPayload({ first_name, last_name, email, password });
      setIsDialogOpen2(true); 
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages: string[] = [];
        error.errors.forEach((err) => {
          errorMessages.push(err.message);
        });
        setErrors(errorMessages);
      }
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <button className="w-fit rounded-md bg-color2 px-4 py-2 text-lg text-white hover:opacity-50">
          إضافة مسؤل جديد
        </button>
      </DialogTrigger>
      <DialogContent dir="rtl" className='max-h-screen'>
        <DialogTitle>إضافة مسؤل جديد</DialogTitle>
        <form
          className="flex flex-col gap-8 rounded-sm p-3"
          action={handleSubmit}
          ref={formRef} // Attach the formRef to the form
        >
          <h2 className="text-color5 mb-4 text-2xl font-bold">
            معلومات المسؤول
          </h2>
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
            {errors.map((error, index) => (
              <div
                key={index}
                className="mb-2 text-sm  text-red-500"
              >
                {error}
              </div>
            ))}
          </div>
          <div className="flex w-full justify-between">
            <button
              className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md hover:opacity-50"
              type="submit"
            >
              تسجيل
            </button>
            <DialogClose asChild>
              <button className="mt-5 w-fit rounded-md border bg-white px-4 py-2 text-lg text-color2 shadow-md">
                إلغاء
              </button>
            </DialogClose>
          </div>
          
          <ConfirmationWindow
            payload={payload}
            formRef={formRef} // Pass the formRef to the ConfirmationWindow
            isDialogOpen2={isDialogOpen2}
            setIsDialogOpen2={setIsDialogOpen2}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
