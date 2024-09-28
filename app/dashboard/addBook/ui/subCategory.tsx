'use client';
import SelectGeneric from '@/components/selectGeneric';
import React from 'react';
import AddWindow from './addTools/addWindow';

const Options: { label: string; value: string }[] = [
  { label: 'أ', value: '1' },
  { label: 'ب', value: '2' }
];

export default function SubCategory() {
  return (
    <div>
      <label className="block font-semibold">الفئة الفرعية</label>
      <div className="flex items-center gap-2">
        <SelectGeneric
          options={Options}
          placeholder="أدخل الفئة الفرعية"
          name="subCategory"
        />
        <AddWindow       
          title="إضافة فئة فرعية" 
          placeholder="أدخل اسم الفئة الفرعية" 
          tableName="subCategories" 
        /> 
      </div>
    </div>
  );
}
