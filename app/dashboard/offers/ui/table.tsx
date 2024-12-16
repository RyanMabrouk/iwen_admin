'use client';
import React, { useState } from 'react';
import { columns } from './columns'; 
import { GenericTableData } from '@/components/genericTableData';
import useOffers from '@/hooks/data/offers/useOffers';
export default function Table() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [page, setPage] = useState<number>(1); 
  const { data: offers, isLoading } = useOffers();
  return (
    <div>
  
      <GenericTableData
        data={offers?.data?? []}
        columns={columns} 
        setSearchQuery={setSearchQuery}
        page={page}
        setPage={setPage}
        searchQuery={searchQuery}
        isLoading={isLoading}

      />
    </div>
  );
}
