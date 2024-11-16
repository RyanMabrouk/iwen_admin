'use client';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

import Table from './table';
import { OrdersPaginationProvider } from '../context/useOrdersPagination';
import useOrders from '@/hooks/data/payments/orders/useOrders';

function OrdersComponent() {
  const { data: Orders, isLoading } = useOrders({});

  return (
    <>
      <div className="flex items-start justify-between">
      <Heading 
          title={`الطلبات (${Orders?.data?.meta?.total_count || 0})`} 
          description="قائمة بجميع الطلبات " 
        />        
      </div>
      
      <Separator />


      <Table  />
    </>
  );
}
export default function Orders() {
  return (
    <OrdersPaginationProvider>
      <OrdersComponent />
    </OrdersPaginationProvider>
  );
}
