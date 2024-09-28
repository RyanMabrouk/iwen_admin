"use client";
import React, { useState } from 'react';
import {
  SelectItem,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from '@/components/ui/select';

export default function SelectGeneric({
  options,
  placeholder,
  name,
}: {
  options: { value: string; label: string }[];
  placeholder: string;
  name: string;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Select name={name}>
      <SelectTrigger dir="rtl" className="w-[10rem]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent dir="rtl" className="w-[10rem]">
        <div className="p-2">
          <input
            type="text"
            placeholder="ابحث..."
            className="w-full p-2 border border-gray-300 rounded-md outline-none"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredOptions.length > 0 ? (
          filteredOptions.map(option => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="w-full truncate"  // Truncate long text
            >
              {option.label}
            </SelectItem>
          ))
        ) : (
          <div className="p-2 text-gray-500">لا توجد نتائج</div>
        )}
      </SelectContent>
    </Select>
  );
}
