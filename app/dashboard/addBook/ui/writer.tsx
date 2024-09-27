"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react'
const Options: { label: string; value: string }[] = [
    { label: 'أ', value: '1' },
    { label: 'ب', value: '2' }
  ];

export default function Writer() {
  return (
    <div>
    <label className="block font-semibold">المؤلف</label>
    <Select name='writer'>
      <SelectTrigger dir='rtl' className='w-[10rem]'>
        <SelectValue placeholder="أدخل المؤلف" />
      </SelectTrigger>
      <SelectContent dir='rtl'>
        {Options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>

  </div>
  )
}
