import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from '@/components/forms/user-auth-form';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'المصادقة',
  description: 'نموذج المصادقة مبني باستخدام المكونات.'
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        تسجيل الدخول
      </Link>
      <div className="relative hidden h-full flex-col bg-color1 p-10 text-white lg:flex ">
          <Image src="/logo.png" width={300} height={300} alt="شعار" className='m-auto' />
      </div>
      <div className="flex h-full bg-bgcolor1 items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              إنشاء حساب
            </h1>
            <p className="text-sm text-muted-foreground">
              أدخل بريدك الإلكتروني أدناه لإنشاء حسابك
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            من خلال النقر على المتابعة، فإنك توافق على{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              شروط الخدمة
            </Link>{' '}
            و{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              سياسة الخصوصية
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
