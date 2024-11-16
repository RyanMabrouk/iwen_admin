import React from 'react';
import OrderProducts from './orderProducts';
import useOrder from '@/hooks/data/payments/orders/useOrder';
import CustomerDetails from './customerDetails';
import ShippingAddress from './shippingAddress';

export default function Details({id}: {id: string}) {
  const {data: order} = useOrder(id);

  return (
    <div dir="rtl" className="w-full flex flex-col gap-5">
      
      <div className="w-full flex flex-col gap-5 md:flex-row">
        <div className="grid w-full grid-cols-1 gap-5 md:w-[70%]">
          <OrderProducts order={order?.data} />
        </div>
        <div className="flex flex-col w-full gap-5 md:w-[30%]">
          <CustomerDetails id={String(order?.data?.user_id)} />
          <ShippingAddress order={order?.data} />
        </div>
      </div>
    </div>
  );
}