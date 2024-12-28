'use client';
import React from 'react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import Form from './ui/form';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const bookId = searchParams.get('bookId');
  
  const breadcrumbItems = [
    { title: 'إحصائيات', link: '/dashboard' },
    { title: bookId ? 'تعديل' : 'إنشاء كتاب جديد', link: `/dashboard/book` }
  ];
  
  const pageTitle = bookId ? 'تعديل الكتاب' : 'إنشاء كتاب جديد';

  return (
    <PageContainer>
      <div
        dir="rtl"
        className="mx-auto w-full max-w-[50rem] border bg-white p-5 shadow-md md:p-10"
      >
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="mb-4 mt-5 text-2xl font-bold">{pageTitle}</h1>
        <Form />
      </div>
    </PageContainer>
  );
}
