'use client';
import SelectGeneric from '@/components/selectGeneric';
import React, { useState } from 'react';
import getEndpoint from '@/services/getEndpoint';
import useWriters from '@/hooks/data/books/writers/useWriters';
import AddWindow from './addTools/addWindow';
import { useDeleteWriter } from '@/hooks/data/books/writers/deleteWriter';
import useWritersAll from '@/hooks/data/books/writers/useWritersAll';

export default function Writer({
  defaultValue,
  errors
}: {
  defaultValue: string;
  errors?: string[];
}) {
  const url = getEndpoint({ resourse: 'writers', action: 'createWriter' });
  const { data: writers } = useWritersAll();
  const Options = writers?.data?.map((writer) => ({
    label: writer.name,
    value: writer.id
  }));
  const [value, setValue] = useState<string>(defaultValue);
  const deleteWriter = useDeleteWriter();
  const handleDeleteOption = (id: string) => {
    deleteWriter.mutate(id);
  };
  return (
    <div>
      <label className="block font-semibold">المؤلف</label>
      <div className="flex items-center gap-2">
        <SelectGeneric
          selectedValue={value}
          options={Options ?? []}
          placeholder="أدخل المؤلف"
          name="writer"
          setSelectedValue={setValue}
          handelDeleteOption={handleDeleteOption} // add delete option handler here if needed. For example: onDelete={handleDeleteOption}  // add delete option handler here if needed. For example: onDelete={handleDeleteOption}  // add delete option handler here if needed. For example: onDelete={handleDeleteOption}  // add delete option handler here if needed. For example: onDelete={handleDeleteOption}  // add delete option handler here if needed. For example: onDelete={handleDeleteOption
        />
        <AddWindow
          title="إضافة مؤلف"
          placeholder="أدخل اسم المؤلف"
          url={url()}
          resourse="writers"
          author={true}
        />
      </div>
      {errors?.map((err, index) => (
        <p key={index} className="mt-2 text-red-500">
          {err}
        </p>
      ))}
    </div>
  );
}
