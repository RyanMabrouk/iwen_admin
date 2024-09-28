'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Icons } from '@/components/icons';
import ConfirmationWindow from './confirmationWindow';

interface AddWindowProps {
  title: string;
  placeholder: string;
  tableName: string;
}

export default function AddWindow({ title, placeholder, tableName }: AddWindowProps) {
  const [inputValue, setInputValue] = useState('');

  return (
    <Dialog>
      <DialogTrigger>
        <Icons.add className="h-6 w-6 cursor-pointer font-bold text-color2" />
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogTitle>{title}</DialogTitle>
        <input
          type="text"
          name={tableName}
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex w-full justify-between">
          <ConfirmationWindow thing={inputValue} tableName={tableName} />
          <DialogClose asChild>
            <button 
              className="mt-5 w-fit rounded-md border bg-white px-4 py-2 text-lg text-color2 shadow-md">
              الغاء
            </button>
          </DialogClose> 
        </div>
      </DialogContent>
    </Dialog>
  );
}
