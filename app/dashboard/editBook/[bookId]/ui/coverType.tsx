'use client';
import SelectGeneric from '@/components/selectGeneric';
import React from 'react';
import AddWindow from './addTools/addWindow';
import getEndpoint from '@/services/getEndpoint';
import useCoverTypes from '@/hooks/data/books/cover_types/useCoverTypes';

const url = getEndpoint({  resourse: "cover_types", action : "createcover_type" });


export default function CoverTypes({defaultValue}:{defaultValue: string}) {
  const {data : coverTypes} = useCoverTypes();
  const Options = coverTypes?.data?.map((item) => ({ label: item.name, value: item.id }));
  return (
    <div>
      <label className="block font-semibold">نوع الغلاف</label>
      <div className="flex items-center gap-2">
        <SelectGeneric options={Options ?? []} placeholder="أدخل نوع الغلاف" name="cover_type" defaultValue={defaultValue} />
        <AddWindow
          title="إضافة نوع الغلاف"
          placeholder="أدخل نوع الغلاف"
          url={url()}
          resourse='cover_types'
        />
      </div>
    </div>
  );
}
