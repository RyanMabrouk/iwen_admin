'use client';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose // Add this import
} from '@/components/ui/dialog';
import signOut from '@/actions/(auth)/signout';

export default function ConfirmationWindowLogout({
  isDialogOpen,
  setIsDialogOpen
}: {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleLogout = async () => {
    setIsDialogOpen(false);
    await signOut();
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent dir='rtl'>
        <DialogTitle>هل انت متأكد من تسجيل الخروج </DialogTitle>
        <div className="flex w-full justify-between">
          <button
            className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md"
            onClick={handleLogout}
          >
            نعم
          </button>

          <DialogClose asChild>
            <button
              className="mt-5 w-fit rounded-md border bg-white px-4 py-2 text-lg text-color2 shadow-md"
              onClick={() => setIsDialogOpen(false)}
            >
              الغاء
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
