'use client';
import React, { useState, useEffect } from 'react';
import {
  SelectItem,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent
} from '@/components/ui/select';
import { undefined } from 'zod';

export default function SelectGeneric({
  options,
  placeholder,
  name,
  selectedValue,
  setSelectedValue
}: {
  options: { value: string; label: string }[];
  placeholder: string;
  name: string;
  selectedValue?: string;
  setSelectedValue?: (option: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (selectedValue) {
      setSelectedValue?.(selectedValue);
    }
  }, [selectedValue]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Select
      name={name}
      {...(selectedValue ? { value: selectedValue } : {})}      onValueChange={setSelectedValue}
    >
      <SelectTrigger dir="rtl" className="w-[10rem] bg-white">
        <SelectValue
          placeholder={placeholder}
          {...(selectedValue ? { defaultValue: selectedValue } : {})}
        />
      </SelectTrigger>
      <SelectContent dir="rtl" className="w-[10rem]">
        <div className="p-2">
          <input
            type="text"
            placeholder="ابحث..."
            className="w-full rounded-md border border-gray-300 p-2 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="w-full truncate cursor-pointer"
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
