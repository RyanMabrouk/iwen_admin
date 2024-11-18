'use client';
import { useEffect, useState } from 'react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import Details from './ui/details';
import { redirect, useParams } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import CRUDData from '@/services/CRUDData';
import getEndpoint from '@/services/getEndpoint';
import { useToast } from '@/components/ui/use-toast';

const breadcrumbItems = [
  { title: 'إحصائيات', link: '/dashboard' },
  { title: 'الطلب', link: '/dashboard/order' }
];

export default function Page() {
  const queryClient = useQueryClient();
  const { orderId } = useParams();
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false); // State to track success

  const url = getEndpoint({
    resourse: 'orders',
    action: 'deleteOrder'
  });

  const deleteOrderMutation = useMutation({
    mutationFn: async () => {
      const { error } = await CRUDData({
        method: 'DELETE',
        url: url(String(orderId))
      });
      if (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      queryClient.invalidateQueries({ queryKey: ['orders', orderId] });
      toast({
        title: 'نجاح!',
        description: `تمت حذف الطلب بنجاح.`
      });
      setIsSuccess(true); // Set success state
    },
    onError: (error: Error) => {
      console.error(error.message);
      toast({
        title: 'خطأ!',
        description: `حدث خطأ أثناء حذف الطلب: ${error.message} حاول مرة أخرى.`
      });
    }
  });

  useEffect(() => {
    if (isSuccess) {
      redirect('/dashboard/orders');
    }
  }, [isSuccess]);

  return (
    <PageContainer>
      <div className="space-y-2 bg-color3 p-5 md:p-10" dir="rtl">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading title={`تفاصيل الطلب`} description="جميع تفاصيل الطلب" />
          <button
            className="w-fit rounded-md bg-color2 px-4 py-2 text-lg text-white hover:opacity-50"
            onClick={() => deleteOrderMutation.mutate()}
          >
            حذف الطلب
          </button>
        </div>
      </div>
      <Details id={String(orderId)} />
    </PageContainer>
  );
}
