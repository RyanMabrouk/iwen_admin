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
      onValueChange={(value) => {
        // Only update the value if it's a valid selection
        if (setSelectedValue) {
          setSelectedValue(value);
        }
      }}
    >
      <SelectTrigger
        dir="rtl"
        className={`line-clamp- mt-2 w-[15rem] overflow-hidden break-words bg-white focus:ring-2 focus:ring-color2 ${
          selectedValue ? '' : 'text-gray-400'
        }`}
      >
        <SelectValue
          placeholder={placeholder}
          {...(selectedValue ? { defaultValue: selectedValue } : {})}
        />
      </SelectTrigger>
      <SelectContent
        dir="rtl"
        className="max-h-[16rem] w-[15rem] overflow-y-auto"
      >
        <div className="p-2">
          <input
            type="text"
            placeholder="ابحث..."
            className="w-full rounded-md border border-gray-300 p-2 outline-none focus:ring-1 focus:ring-color2"
            value={searchTerm}
            onChange={(e) => {
              e.stopPropagation();
              setSearchTerm(e.target.value);
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <div
             
              key={option.value}
              onClick={() => {
                if (setSelectedValue) {
                  setSelectedValue(option.value);
                }
              }}
              className="relative px-4 py-1 line-clamp-1 w-full cursor-pointer overflow-hidden truncate break-words text-right"
            >
              <span className="line-clamp-1 w-[11rem] overflow-hidden  truncate break-words text-right">
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
            </div>
          ))
        ) : (
          <div className="p-2 text-gray-500">لا توجد نتائج</div>
        )}
      </SelectContent>
    </Select>
  );
}
