'use client';
import SelectGeneric from '@/components/selectGeneric';
import React from 'react';
import AddWindow from './addTools/addWindow';

const Options: { label: string; value: string }[] = [
  { label: 'أ', value: '1' },
  { label: 'ب', value: '2' }
];

export default function ShareHouse() {
  return (
    <div>
      <label className="block font-semibold">الناشرون</label>
      <div className="flex items-center gap-2">
        <SelectGeneric options={Options} placeholder="أدخل الناشر" name="shareHouse" />
        <AddWindow
          title="إضافة ناشر"
          placeholder="أدخل اسم الناشر"
          tableName="shareHouse"
        />
      </div>
    </div>
  );
}
