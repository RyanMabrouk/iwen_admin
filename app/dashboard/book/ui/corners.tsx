'use client';
import SelectGeneric from '@/components/selectGeneric';
import React, { useState } from 'react';
import getEndpoint from '@/services/getEndpoint';
import AddWindow from './addTools/addWindow';
import { useDeleteCorner } from '@/hooks/data/books/corners/deleteCorner';
import useCorners from '@/hooks/data/books/corners/useCorners';

const url = getEndpoint({
  resourse: 'corners',
  action: 'createCorner'
});

export default function Corners({ defaultValue , errors}: { defaultValue: string , errors?: string[]}) {
  const [value, setValue] = useState<string>(defaultValue);
  const deleteCorner = useDeleteCorner(); 
  const handleDeleteOption = (id: string) => {
    deleteCorner.mutate(id); 
  };
  const { data: corners } = useCorners();
  const Options = corners?.data?.map((item) => ({
    label: item.name,
    value: item.id
  }));
  return (
    <div>
      <label className="block font-semibold"> الركن </label>
      <div className="flex items-center gap-2">
        <SelectGeneric
          options={Options ?? []}
          placeholder="أدخل الركن"
          name="corner"
          selectedValue={value}
          setSelectedValue={setValue}
          handelDeleteOption={handleDeleteOption}
        />
        <AddWindow
          title="إضافة الركن"
          placeholder="أدخل الركن"
          url={url()}
          resourse="corners"
        />
      </div>
      {errors?.map((err, index) => (
          <p key={index} className="text-red-500 mt-2">{err}</p>
        ))}
    </div>
  );
}
