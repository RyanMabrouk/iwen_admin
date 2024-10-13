'use client';
import SelectGeneric from '@/components/selectGeneric';
import React, { useState } from 'react';

const Options: { label: string; value: string }[] = [
  { label: 'متوفر', value: 'available' },
  { label: 'غير متوفر', value: 'unavailable' }
];

export default function Status({defaultValue , errors}:{defaultValue: string, errors?: string[]}) {
  const [value, setValue] = useState<string>(defaultValue);

  return (
    <div>
      <label className="block font-semibold">الحالة</label>
      <div className="flex items-center gap-2">
        <SelectGeneric options={Options} placeholder="أدخل الحالة" name="status" selectedValue={value} setSelectedValue={setValue} />
      </div>
      {errors?.map((err, index) => (
          <p key={index} className="text-red-500 mt-2">{err}</p>
        ))}
    </div>
  );
}
