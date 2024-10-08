import React from 'react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import Form from './ui/form';


export default function Page() {
  const breadcrumbItems = [
    { title: 'إحصائيات', link: '/dashboard' },
    { title: 'تعديل كتاب', link: '/dashboard/editBook' }
  ];
  return (
    <PageContainer>
      <div
        dir='rtl'
        className="mx-auto   w-full max-w-[50rem] border bg-white p-5 shadow-md md:p-10 "
      >
        <Breadcrumbs items={breadcrumbItems}/>
        <h1 className="mb-4 text-2xl font-bold mt-5 "  >تعديل الكتاب</h1>
        <Form />
      </div>
    </PageContainer>
  );
}
