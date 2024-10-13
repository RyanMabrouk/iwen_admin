'use client';
import SelectGeneric from '@/components/selectGeneric';
import React, { useState } from 'react';
import getEndpoint from '@/services/getEndpoint';
import useCoverTypes from '@/hooks/data/books/cover_types/useCoverTypes';
import AddWindow from './addTools/addWindow';
import { useDeleteCoverType } from '@/hooks/data/books/cover_types/deleteCoverType';

const url = getEndpoint({
  resourse: 'cover_types',
  action: 'createcover_type'
});

export default function CoverTypes({ defaultValue , errors}: { defaultValue: string , errors?: string[]}) {
  const [value, setValue] = useState<string>(defaultValue);
  const deleteCoverType = useDeleteCoverType(); 
  const handleDeleteOption = (id: string) => {
    deleteCoverType.mutate(id); 
  };
  const { data: coverTypes } = useCoverTypes();
  const Options = coverTypes?.data?.map((item) => ({
    label: item.name,
    value: item.id
  }));
  return (
    <div>
      <label className="block font-semibold">نوع الغلاف</label>
      <div className="flex items-center gap-2">
        <SelectGeneric
          options={Options ?? []}
          placeholder="أدخل نوع الغلاف"
          name="cover_type"
          selectedValue={value}
          setSelectedValue={setValue}
          handelDeleteOption={handleDeleteOption}
        />
        <AddWindow
          title="إضافة نوع الغلاف"
          placeholder="أدخل نوع الغلاف"
          url={url()}
          resourse="cover_types"
        />
      </div>
      {errors?.map((err, index) => (
          <p key={index} className="text-red-500 mt-2">{err}</p>
        ))}
    </div>
  );
}
