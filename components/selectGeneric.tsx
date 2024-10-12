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
import { Trash } from 'lucide-react';

export default function SelectGeneric({
  options,
  placeholder,
  name,
  selectedValue,
  setSelectedValue,
  handelDeleteOption
}: {
  options: { value: string; label: string }[];
  placeholder: string;
  name: string;
  selectedValue?: string;
  setSelectedValue?: (option: string) => void;
  handelDeleteOption?: (id: string) => void;
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
      {...(selectedValue ? { value: selectedValue } : {})}
      onValueChange={setSelectedValue}
    >
      <SelectTrigger dir="rtl" className="w-[15rem] overflow-hidden break-words line-clamp-1 bg-white">
        <SelectValue
          placeholder={placeholder}
          {...(selectedValue ? { defaultValue: selectedValue } : {})}
        />
      </SelectTrigger>
      <SelectContent dir="rtl" className="w-[15rem]">
        <div className="p-2">
          <input
            type="text"
            placeholder="ابحث..."
            className="w-full rounded-md border border-gray-300 p-2 outline-none  "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="relative w-full cursor-pointer truncate text-right line-clamp-1  overflow-hidden break-words "
            >
              <span className="line-clamp-1 w-full text-right overflow-hidden break-words  ">
                <span className='w-[50%]'>
                {option.label}


                </span>
              </span>
              {handelDeleteOption ? (
                <Trash
                  className="z-100 absolute left-2 top-2 size-4"
                  onClick={() => handelDeleteOption?.(option.value)}
                />
              ) : (
                <></>
              )}
            </SelectItem>
          ))
        ) : (
          <div className="p-2 text-gray-500">لا توجد نتائج</div>
        )}
      </SelectContent>
    </Select>
  );
}
