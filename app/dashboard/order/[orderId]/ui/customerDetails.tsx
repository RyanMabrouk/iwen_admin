'use client';
import userOrdersCount from '@/api/users/userOrdersCount';
import useUser from '@/hooks/data/user/useUser';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

type CustomerDetailsProps = {
  id: string;
};

export default function CustomerDetails({ id }: CustomerDetailsProps) {
  const { data: customer } = useUser(id);
  const { data: ordersCount } = useQuery({
    queryKey: ['userOrdersCount', id],
    queryFn: () => userOrdersCount(id),
    enabled: !!id
  });

  return (
    <div className="flex w-full flex-col gap-5 bg-white p-5 shadow-md">
      <div className="flex w-full justify-between">
        <div className="text-3xl font-semibold tracking-tight">
          بيانات العميل
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={customer?.data?.avatar ?? ''}
          width={50}
          height={50}
          alt="Customer Avatar"
          className="rounded-full"
        />
        <div className="flex flex-col gap-1">
          {customer?.data?.first_name + ' ' + customer?.data?.last_name}
          <div className="text-xs text-gray-500">
            رمز الزبون: {customer?.data?.user_id}
          </div>
        </div>
      </div>
      <div className="relative flex items-center gap-3 px-3">
        <span className="flex h-8 w-8 items-center  justify-center rounded-full bg-color2 text-white ring-4 ring-white">
          <ShoppingCart className="h-5 w-5" />
        </span>
        <span>{ordersCount ?? 'جاري البحث...'} طلب</span>
      </div>
      <div className="flex flex-col gap-2 px-3">
        <div className='text-lg font-semibold'>بيانات التواصل </div>
        <div className='text-gray-500'>البريد الالكتروني : {customer?.data?.email} </div>
      </div>
    </div>
  );
}
