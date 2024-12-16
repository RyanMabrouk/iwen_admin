'use client';
import React from 'react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { useSearchParams } from 'next/navigation';
import Offer from './ui/offer';

export default function Page() {
  const breadcrumbItems = [
    { title: 'إحصائيات', link: '/dashboard' },
    { title: 'عرض', link: '/dashboard/offer' }
  ];
  const searchParams = useSearchParams();
  const offerId = searchParams.get('offerId');
  return (
    <PageContainer>
      <div
        dir="rtl"
        className="mx-auto   w-full max-w-[50rem] border bg-white p-5 shadow-md md:p-10 "
      >
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="mb-4 mt-5 text-2xl font-bold ">
          {offerId ? 'تعديل العرض' : 'إضافة عرض'}{' '}
        </h1>
        <Offer />
      </div>
    </PageContainer>
  );
}
