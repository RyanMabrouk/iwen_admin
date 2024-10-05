'use client';
import SelectGeneric from '@/components/selectGeneric';
import React from 'react';
import AddWindow from './addTools/addWindow';
import getEndpoint from '@/services/getEndpoint';
import useWriters from '@/hooks/data/books/writers/useWriters';



export default function Writer() {
  const url = getEndpoint({  resourse: "writers", action : "createWriter" });
  const {data: writers} = useWriters();
  const Options = writers?.data?.map((writer) => ({
    label: writer.name,
    value: writer.id,
  }));
  return (
    <div>
      <label className="block font-semibold">المؤلف</label>
      <div className="flex items-center gap-2">
        <SelectGeneric
          options={Options ??[]}
          placeholder="أدخل المؤلف"
          name="writer"
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
