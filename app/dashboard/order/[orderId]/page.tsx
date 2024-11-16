"use client"
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import Details from './ui/details';
import { useParams } from 'next/navigation';

const breadcrumbItems = [
  { title: 'إحصائيات', link: '/dashboard' },
  { title: 'الطلب', link: '/dashboard/order' }
];
export default function Page() {
    const { orderId } = useParams();

  return (
    <PageContainer>
      <div className="space-y-2 bg-color3 p-5   md:p-10" dir="rtl">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading title={`تفاصيل الطلب`} description="جميع تفاصيل الطلب" />{' '}
          <button className="w-fit  rounded-md bg-color2 px-4 py-2 text-lg text-white  hover:opacity-50">
            حذف الطلب{' '}
          </button>
        </div>
      </div>
      <Details id={String(orderId)}  />
    </PageContainer>
  );
}
