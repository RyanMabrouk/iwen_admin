'use client';
import React from 'react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { useSearchParams } from 'next/navigation';
import Author from './ui/author';

export default function Page() {
  const breadcrumbItems = [
    { title: 'إحصائيات', link: '/dashboard' },
    { title: 'مؤلف', link: '/dashboard/author' }
  ];
  const searchParams = useSearchParams();
  const authorId = searchParams.get('authorId');
  return (
    <PageContainer>
      <div
        dir="rtl"
        className="mx-auto   w-full max-w-[50rem] border bg-white p-5 shadow-md md:p-10 "
      >
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="mb-4 mt-5 text-2xl font-bold ">
          {authorId ? 'تعديل المؤلف' : 'إضافة مؤلف'}{' '}
        </h1>
        <Author />
      </div>
    </PageContainer>
  );
}
