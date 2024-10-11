'use client';
import SelectGeneric from '@/components/selectGeneric';
import React, { useState } from 'react';
import getEndpoint from '@/services/getEndpoint';
import useCoverTypes from '@/hooks/data/books/cover_types/useCoverTypes';
import AddWindow from './addTools/addWindow';

const url = getEndpoint({
  resourse: 'cover_types',
  action: 'createcover_type'
});

export default function CoverTypes({ defaultValue }: { defaultValue: string }) {
  const [value, setValue] = useState<string>(defaultValue);

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
        />
        <AddWindow
          title="إضافة نوع الغلاف"
          placeholder="أدخل نوع الغلاف"
          url={url()}
          resourse="cover_types"
        />
      </div>
    </div>
  );
}
