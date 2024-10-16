'use client';

import { useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import updatePassword from '@/actions/(auth)/updatePassword';
import Input from '@/components/input';
import { PasswordInput } from '@/components/passwordInput';

// Define the schema for password validation using Zod
const passwordSchema = z
  .object({
    newPassword: z.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'),
    confirmPassword: z.string().nonempty('الرجاء تأكيد كلمة المرور')
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'كلمة المرور وتأكيدها يجب أن تكون متطابقة'
  });

export default function ChangePassword({ email }: { email: string }) {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null); // Form reference

  const updatePasswordMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const currentPassword = String(formData.get('currentPassword'));
      const newPassword = String(formData.get('newPassword'));
      const confirmPassword = String(formData.get('confirmPassword'));

      const input = { newPassword, confirmPassword };
      const result = passwordSchema.safeParse(input);

      if (!result.success) {
        result.error.errors.forEach((error) => {
          toast({
            title: 'خطأ في الإدخال',
            description: error.message
          });
        });
        throw new Error('Validation error');
      }

      const updateResult = await updatePassword({
        currentPassword,
        newPassword,
        email
      });

      if (updateResult?.error) {
        throw new Error(updateResult.error.message);
      }
    },
    onSuccess: () => {
      toast({
        title: 'نجاح!',
        description: 'تم تغيير كلمة المرور بنجاح'
      });
      formRef.current?.reset(); // Reset form on success
    },
    onError: (error: any) => {
      toast({
        title: 'خطأ',
        description: error.message || 'حدث خطأ أثناء تغيير كلمة المرور'
      });
    }
  });

  return (
    <form
      ref={formRef} // Attach the form reference
      action={updatePasswordMutation.mutate}
      className="mx-auto mt-5 flex flex-col justify-center gap-4"
    >
      <h1 className="text-2xl font-bold">تغيير كلمة المرور</h1>
      <PasswordInput
        label="كلمة المرور الحالية"
        name="currentPassword"
        placeholder="أدخل كلمة المرور الحالية"
      />

      <PasswordInput
        label="كلمة المرور الجديدة"
        name="newPassword"
        placeholder="أدخل كلمة المرور الجديدة"
      />

      <PasswordInput
        label="تأكيد كلمة المرور"
        name="confirmPassword"
        placeholder="أكد كلمة المرور"
      />

      <button
        type="submit"
        disabled={updatePasswordMutation.isPending}
        className="ml-auto mt-5 w-full bg-color2 p-2 text-xl rounded-sm font-semibold text-white hover:opacity-50"
      >
        {updatePasswordMutation.isPending
          ? 'جاري تغيير كلمة المرور...'
          : 'تغيير كلمة المرور'}
      </button>
    </form>
  );
}
