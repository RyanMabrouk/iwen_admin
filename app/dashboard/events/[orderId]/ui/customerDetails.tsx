'use client';
import useUser from '@/hooks/data/user/useUser';
import Image from 'next/image';
import React from 'react';

type CustomerDetailsProps = {
  id: string;
};

export default function CustomerDetails({ id }: CustomerDetailsProps) {
  const { data: customer } = useUser(id);

  return (
    <div className="flex w-full flex-col gap-5 bg-white p-5 shadow-md">
      <div className="flex w-full justify-between">
        <div className="text-3xl font-semibold tracking-tight">
          بيانات العميل
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={customer?.data?.avatar ?? '/noAvatar.jpg'}
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
      <div className="flex flex-col gap-2 px-3">
        <div className='text-lg font-semibold'>بيانات التواصل </div>
        <div className='text-gray-500'>البريد الالكتروني : {customer?.data?.email} </div>
        <div className='text-gray-500'> رقم الهاتف : {customer?.data?.phone_number} </div>
      </div>
    </div>
  );
}
