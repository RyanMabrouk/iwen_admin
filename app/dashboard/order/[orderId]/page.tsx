'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import Details from './ui/details';
import {  useParams } from 'next/navigation';
import ConfirmationWindow from './ui/confirmationWindow';


const breadcrumbItems = [
  { title: 'إحصائيات', link: '/dashboard' },
  { title: 'الطلب', link: '/dashboard/order' }
];

export default function Page() {
  const { orderId } = useParams();

  return (
    <PageContainer>
      <div className="space-y-2 bg-color3 p-5 md:p-10" dir="rtl">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading title={`تفاصيل الطلب`} description="جميع تفاصيل الطلب" />
          <ConfirmationWindow orderId={String(orderId)} />
        </div>
      </div>
      <Details id={String(orderId)} />
    </PageContainer>
  );
}
