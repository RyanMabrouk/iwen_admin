'use client';
import SelectGeneric from '@/components/selectGeneric';
import React, { useState } from 'react';
import getEndpoint from '@/services/getEndpoint';
import useWriters from '@/hooks/data/books/writers/useWriters';
import AddWindow from './addTools/addWindow';



export default function Writer({defaultValue}:{defaultValue: string}) {
  const url = getEndpoint({  resourse: "writers", action : "createWriter" });
  const {data: writers} = useWriters();
  const Options = writers?.data?.map((writer) => ({
    label: writer.name,
    value: writer.id,
  }));
  const [value, setValue] = useState<string>(defaultValue);

  return (
    <div>
      <label className="block font-semibold">المؤلف</label>
      <div className="flex items-center gap-2">
        <SelectGeneric
          selectedValue={value}
          options={Options ??[]}
          placeholder="أدخل المؤلف"
          name="writer"
          setSelectedValue={setValue}
        />
        <AddWindow  
          title="إضافة مؤلف" 
          placeholder="أدخل اسم المؤلف" 
          url={url()}
          resourse='writers'
        /> 
      </div>
    </div>
  );
}
