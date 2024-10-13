'use client';
import React, { useState, useEffect } from 'react';
import {
  SelectItem,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent
} from '@/components/ui/select';
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
      <SelectTrigger
        dir="rtl"
        className={`line-clamp- w-[15rem] overflow-hidden break-words bg-white ${selectedValue? "" : "text-gray-400"} `}
      >
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
              className="relative line-clamp-1 w-full cursor-pointer overflow-hidden truncate break-words text-right"
            >
              <span className="line-clamp-1 w-[10rem] overflow-hidden break-words text-right">
                {option.label}
              </span>

              {handelDeleteOption && (
                <div
                  className="absolute left-2 top-2"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handelDeleteOption(option.value);
                  }}
                >
                  <Trash className="size-4 hover:text-red-500" />
                </div>
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
