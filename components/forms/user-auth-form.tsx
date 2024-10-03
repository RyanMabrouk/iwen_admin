'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import GithubSignInButton from '../github-auth-button';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import login from '@/actions/(auth)/login';

const formSchema = z.object({
  email: z.string().email({ message: 'أدخل عنوان بريد إلكتروني صالح' }),
  password: z
    .string()
    .min(8, { message: 'كلمة المرور يجب أن تكون على الأقل 8 حروف' })
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ general?: string } | null>(null);

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
  });
   const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (formObject: FormData) => {
      const data = Object.fromEntries(formObject) as {
        email: string;
        password: string;
      };
      const email = String(formObject.get("email")) ;
      const password = String(formObject.get("password")) ;
      const { error } = await login({ email, password });
      if (error) {
        setErrors({ general: error.message });
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });


  return (
    <>
      <Form {...form}>
        <form
        action={mutate}
          className="w-full space-y-2"
        >
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
                    disabled={loading}
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
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {errors?.general && (
            <FormItem>
              <FormMessage>{errors.general}</FormMessage>
            </FormItem>
          )}

          <button
            disabled={loading}
            className="ml-auto w-full bg-color2 p-2 text-white"
            type="submit"
          >
            تأكيد الدخول
          </button>
        </form>
      </Form>{/*  <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            أو المتابعة باستخدام
          </span>
        </div>
      </div>
      <GithubSignInButton />*/ }
    
    </>
  );
}
