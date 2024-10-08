'use client';
import SelectGeneric from '@/components/selectGeneric';
import React from 'react';

const Options: { label: string; value: string }[] = [
  { label: 'متوفر', value: 'available' },
  { label: 'غير متوفر', value: 'unavailable' }
];

export default function Status({defaultValue}:{defaultValue: string}) {
  return (
    <div>
      <label className="block font-semibold">الحالة</label>
      <div className="flex items-center gap-2">
        <SelectGeneric options={Options} placeholder="أدخل الحالة" name="status" defaultValue={defaultValue} />
      </div>
    </div>
  );
}
