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
import { useToast } from '@/components/ui/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import CRUDData from '@/services/CRUDData';
import getEndpoint, { IResourse } from '@/services/getEndpoint';
import SelectGeneric from '@/components/selectGeneric';
import { nationalities } from '@/constants/data';

interface AddWindowProps {
  title: string;
  placeholder: string;
  url: string;
  resourse: IResourse;
  category_id?: string;
  author?: boolean;
}

// Define the type for the payload
interface AddPayload {
  name: string;
  category_id?: string; // category_id is optional
  nationality?: string;
}

export default function AddWindow({
  title,
  placeholder,
  url,
  resourse,
  category_id,
  author
}: AddWindowProps) {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<string>('');

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const AddMutation = useMutation({
    mutationFn: async () => {
      const payload: AddPayload = { name: inputValue };
      if (category_id) {
        payload.category_id = category_id;
      }
      if (author && value!="") {
        payload.nationality = value;
      }
      const { error } = await CRUDData({
        method: 'POST',
        url: url,
        payload
      });
      if (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [resourse] });
      toast({
        title: 'نجاح!',
        description: `تمت إضافة ${inputValue} بنجاح.`
      });
      setInputValue('');

      setIsPending(false);
    },
    onError: (error) => {
      toast({
        title: 'خطأ!',
        description: 'حدث خطأ أثناء إضافة العنصر. حاول مرة أخرى.'
      });
      setIsPending(false);
    }
  });

  const handleConfirm = () => {
    setIsPending(true);
    AddMutation.mutate();
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <Icons.add className="h-6 w-6 cursor-pointer font-bold text-color2" />
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogTitle>{title}</DialogTitle>
        <input
          type="text"
          name="title"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {author && (
          <div>
            <label className="block font-semibold">الجنسية</label>
            <div className="flex items-center gap-2">
              <SelectGeneric
                options={nationalities}
                placeholder="أدخل الجنسية"
                name="nationality"
                selectedValue={value}
                setSelectedValue={setValue}
              />
            </div>
          </div>
        )}

        <div className="flex w-full justify-between">
          <button
            onClick={handleConfirm}
            disabled={isPending}
            className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md hover:opacity-50"
          >
            {isPending ? 'جاري الإضافة...' : 'نعم'}
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
