'use client';
import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectTrigger,
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
  const [isOpen, setIsOpen] = useState(false);  // State to track menu open/close

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
      {...(selectedValue ? { value: selectedValue } : {})}
      onValueChange={(value) => {
        if (setSelectedValue) {
          setSelectedValue(value);
        }
        setIsOpen(false);  
      }}
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)} 
    >
      <SelectTrigger
        dir="rtl"
        className={`line-clamp- mt-2 w-[15rem] overflow-hidden break-words bg-white focus:ring-2 focus:ring-color2 ${
          selectedValue ? '' : 'text-gray-400'
        }`}
      >
        <div>
          {selectedValue
            ? options.find((option) => option.value === selectedValue)?.label
            : placeholder}
        </div>
        <input className="hidden" name={name} value={selectedValue} />

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
                setIsOpen(false);  
              }}
              className="relative hover:bg-stone-200 line-clamp-1 w-full cursor-pointer overflow-hidden truncate break-words px-4 py-1 text-right"
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
