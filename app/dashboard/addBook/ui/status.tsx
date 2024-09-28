'use client';
import SelectGeneric from '@/components/selectGeneric';
import React from 'react';
import AddWindow from './addTools/addWindow';

const Options: { label: string; value: string }[] = [
  { label: 'أ', value: '1' },
  { label: 'ب', value: '2' }
];

export default function Status() {
  return (
    <div>
      <label className="block font-semibold">الحالة</label>
      <div className="flex items-center gap-2">
        <SelectGeneric options={Options} placeholder="أدخل الحالة" name="status" />
        <AddWindow
          title="إضافة حالة"
          placeholder="أدخل اسم الحالة"
          tableName="statuses"
        />
      </div>
    </div>
  );
}
