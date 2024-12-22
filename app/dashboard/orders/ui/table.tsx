'use client';
import React, { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { columnDefinitions, columns } from './columns'; 
import { GenericTableData } from '@/components/genericTableData';
import { Separator } from '@/components/ui/separator';
import { SwitchGeneric } from '@/components/switchGeneric';
import { useOrdersPagination } from '../context/useOrdersPagination';
import { ordersQuery } from '@/hooks/data/payments/orders/ordersQuery';
import { Enums, Tables } from '@/types/database.types';
import useOrders from '@/hooks/data/payments/orders/useOrders';


const options = [
  { label: 'جميع', value: "" },
  { label: 'قيد الانتظار', value: 'pending' },
  { label: 'مدفوع', value: 'paid' },
  { label: 'ملغى', value: 'canceled' }
]
export default function Table() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filter,setFilter] = useState<Enums<"payment_status_enum"> |null >();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { page, setPage } = useOrdersPagination();
  const limit = 8;
  const { data: orders, isLoading ,error } = useOrders({
    page,
    limit,
    search: {
      'orders.email': [
        {
          operator: 'ilike',
          value: `%${searchQuery}%`
        }
      ]
    },
    filters:filter ?  {
          'orders.status': [
            {
              operator: '=',
              value: filter
            }
          ]
        }: {}
  });
  console.log("🚀 ~ Table ~ error:", error?.message)


  const queryClient = useQueryClient();

  useEffect(() => {
    if (orders?.data?.meta?.has_next_page) {
      queryClient.prefetchQuery(
        ordersQuery({
          page: page + 1,
          limit,
          search: {
            'orders.email': [
              {
                operator: 'ilike',
                value: `%${searchQuery}%`
              }
            ]
          },
          filters:filter ?  {
            'orders.status': [
              {
                operator: '=',
                value: filter
              }
            ]
          }: undefined
        })
      );
    }
  }, [page, orders?.data?.meta?.has_next_page, queryClient, searchQuery]);

  const transformedOrdersData = orders?.data?.data?.map((order: Tables<"orders">) => {
    return {
      ...order,
      payment_method_arabic: 
        order.payment_method === 'onDelivery' ? 'عند الاستلام' :
        order.payment_method === 'online' ? 'عبر الإنترنت' :
        order.payment_method === 'bank' ? 'تحويل بنكي' :
        order.payment_method,
  
      status_arabic: 
        order.status === 'pending' ? 'قيد الانتظار' :
        order.status === 'paid' ? 'مدفوع' :
        order.status === 'canceled' ? 'ملغى' :
        order.status 
    };
  }) || [];
  

  const [columnState, setColumnState] = useState(columnDefinitions);

  const toggleColumnVisibility = (accessorKey: string) => {
    setColumnState((prevState) =>
      prevState.map((col) =>
        col.accessorKey === accessorKey
          ? { ...col, visible: !col.visible }
          : col
      )
    );
  };

  return (
    <div>
      <h1 className='text-xl font-semibold mt-4'>
        ضبط عرض الجدول
      </h1>
      <div className='flex flex-wrap gap-4 pb-5 pt-3'>
        {columnState.map((col) => (
          <SwitchGeneric
            key={col.accessorKey}
            label={col.header}
            checked={col.visible}
            onChange={() => toggleColumnVisibility(col.accessorKey)}
          />
        ))}
      </div>
      <Separator />


      <GenericTableData
        data={transformedOrdersData}
        columns={columns({ selectedIds, setSelectedIds, columnState })}
        setSearchQuery={setSearchQuery}
        page={page}
        setPage={setPage}
        searchQuery={searchQuery}
        total_pages={orders?.data?.meta.total_pages ?? 0}
        total_counts={orders?.data?.meta.total_count ?? 0}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        isLoading={isLoading}
        filterOptions={options}
        filter={filter as Enums<"status_enum">}
        setFilter={(value: string) => setFilter(value as Enums<"payment_status_enum">)}
        />
    </div>
  );
}
