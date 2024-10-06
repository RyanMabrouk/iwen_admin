import React from 'react';
import Form from './ui/form';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';


export default function Page() {
  const breadcrumbItems = [
    { title: 'إحصائيات', link: '/dashboard' },
    { title: 'إضافة كتاب', link: '/dashboard/addBook' }
  ];
  return (
    <PageContainer>
      <div
        dir='rtl'
        className="mx-auto   w-full max-w-[50rem] border bg-white p-5 shadow-md md:p-10 "
      >
        <Breadcrumbs items={breadcrumbItems}/>
        <h1 className="mb-4 text-2xl font-bold mt-5 "  >نموذج الكتاب</h1>
        <Form />
      </div>
    </PageContainer>
  );
}
