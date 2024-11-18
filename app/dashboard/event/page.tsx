"use client"
import React from 'react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { useSearchParams } from 'next/navigation';
import Event from './ui/event';


export default function Page() {
  const breadcrumbItems = [
    { title: 'إحصائيات', link: '/dashboard' },
    { title: ' حدث', link: '/dashboard/banner' }
  ];
  const searchParams = useSearchParams();
  const eventId = searchParams.get('eventId');
  return (
    <PageContainer>
      <div
        dir='rtl'
        className="mx-auto   w-full max-w-[50rem] border bg-white p-5 shadow-md md:p-10 "
      >
        <Breadcrumbs items={breadcrumbItems}/>
        <h1 className="mb-4 text-2xl font-bold mt-5 "  >{eventId? "تعديل الحدث" : "إضافة حدث"  }  </h1>
        <Event/>

        
      </div>
    </PageContainer>

  );
}
