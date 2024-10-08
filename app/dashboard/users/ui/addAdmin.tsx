'use client';
import React, { useState } from 'react';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import ConfirmationWindow from './confirmationWindow';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  email: z.string().email({ message: 'أدخل عنوان بريد إلكتروني صالح' }),
  password: z
    .string()
    .min(8, { message: 'كلمة المرور يجب أن تكون على الأقل 8 حروف' }),
  first_name: z.string().min(1, { message: 'أدخل الاسم الأول' }),
  last_name: z.string().min(1, { message: 'أدخل الاسم الأخير' })
});
type UserFormValue = z.infer<typeof formSchema>;

export default function AddAdmin() {
  const [payload, setPayload] = useState<UserFormValue | null>(null); // State for form data
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema)
  });
  const onSubmit = (data: UserFormValue) => {
    setPayload(data);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <button className="w-full bg-color2 p-2 text-white hover:opacity-50">
          إضافة مسؤل جديد
        </button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogTitle>إضافة مسؤل جديد</DialogTitle>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-2"
          >
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem dir="rtl">
                  <FormLabel>الاسم الأول</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="أدخل الاسم الأول..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem dir="rtl">
                  <FormLabel>الاسم الأخير</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="أدخل الاسم الأخير..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem dir="rtl">
                  <FormLabel>البريد الإلكتروني</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem dir="rtl">
                  <FormLabel>كلمة المرور</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="أدخل كلمة المرور..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        <div className="flex w-full justify-between">
          <ConfirmationWindow payload={payload ?? {}} resetForm={form.reset} />
          <DialogClose asChild>
            <button className="mt-5 w-fit rounded-md border bg-white px-4 py-2 text-lg text-color2 shadow-md">
              إلغاء
            </button>
          </DialogClose>
        </div>
          </form>
        </Form>

      </DialogContent>
    </Dialog>
  );
}
