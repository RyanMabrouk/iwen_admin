'use client';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose // Add this import
} from '@/components/ui/dialog';

export default function ConfirmationWindow({
  thing,
  tableName
}: {
  thing: string;
  tableName: string;
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md">
          تسجيل
        </button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogTitle>هل انت متأكد من اضافة &lrm;{thing} ؟</DialogTitle>

        <div className="flex w-full justify-between">
          <button className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md">
            نعم
          </button>

          <DialogClose asChild>
            <button className="mt-5 w-fit rounded-md border bg-white px-4 py-2 text-lg text-color2 shadow-md">
              الغاء
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
