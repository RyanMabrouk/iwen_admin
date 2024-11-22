'use client';
import React from 'react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { useSearchParams } from 'next/navigation';
import Banner from './ui/banner';

export default function Page() {
  const breadcrumbItems = [
    { title: 'إحصائيات', link: '/dashboard' },
    { title: ' إعلان', link: '/dashboard/banner' }
  ];
  const searchParams = useSearchParams();
  const bannerId = searchParams.get('bannerId');
  return (
    <PageContainer>
      <div
        dir="rtl"
        className="mx-auto   w-full max-w-[50rem] border bg-white p-5 shadow-md md:p-10 "
      >
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="mb-4 mt-5 text-2xl font-bold ">
          {bannerId ? 'تعديل الإعلان' : 'إضافة إعلان'}{' '}
        </h1>
        <Banner />
      </div>
    </PageContainer>
  );
}
