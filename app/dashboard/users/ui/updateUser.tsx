'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Edit } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import CRUDData from '@/services/CRUDData';
import getEndpoint from '@/services/getEndpoint';
import Input from '@/components/input';
import useUser from '@/hooks/data/user/useUser';
import UserPic from './userPic';
import SelectGeneric from '@/components/selectGeneric';
import { uploadFile } from '@/app/api/uploadFile';
import { v4 as uuidv4 } from 'uuid';

export default function UpdateUser({ userId }: { userId: string }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const queryClient = useQueryClient();
  const [isPending, setIsPending] = useState(false);
  const { data: user } = useUser(userId);
  const [value, setValue] = useState<string>(user?.data?.roles.includes("admin") ? "admin" : "user");
  const [preview, setPreview] = useState<string>(user?.data?.avatar ?? '/noAvatar.jpg');
  const Options: { label: string; value: string }[] = [
    { label: 'مسؤل', value: 'admin' },
    { label: 'مستخدم', value: 'user' }
  ];
  
  const { toast } = useToast();
  
  const updateMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const first_name = String(formData.get('first_name'));
      const last_name = String(formData.get('last_name'));
      const filepicture = formData.get('filepicture') as File;
      let avatar = user?.data?.avatar ?? ''; // Default to existing avatar

      // Only upload if a new file is selected
      if (filepicture && filepicture.size > 0) {
        avatar = await uploadFile({
          formData,
          name: 'filepicture',
          title: uuidv4()
        });
      }
      
      const roles = value === 'admin' ? ['admin', 'user'] : ['user'];
      const payload = {
        first_name,
        last_name,
        roles,
        avatar
      };

      const url = getEndpoint({ resourse: 'users', action: 'updateUser' });
      const { error } = await CRUDData({
        method: 'PATCH',
        url: url(userId),
        payload: payload
      });

      if (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast({
        title: 'نجاح!',
        description: `تم تعديل بيانات المستخدم بنجاح.`
      });
      setIsDialogOpen(false);
      setIsPending(false);
    },
    onError: () => {
      toast({
        title: 'خطأ!',
        description: 'حدث خطأ أثناء تعديل المستخدم. حاول مرة أخرى.'
      });
      setIsPending(false);
    }
  });

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild dir="rtl">
        <button
          onClick={() => setIsDialogOpen(true)} // Ensure this triggers the dialog opening
          className="ml-auto mr-2 flex items-center justify-start gap-2"
        >
          <Edit className="mr-2 h-4 w-4" />
          <div>تحديث</div>
        </button>
      </DialogTrigger>

      <DialogContent dir="rtl">
        <DialogTitle> تعديل بيانات المستخدم </DialogTitle>
        <form
          className="flex flex-col gap-8 rounded-sm p-6"
          action={updateMutation.mutate}
        >
          <UserPic picture={preview} setPicture={setPreview} />
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                label="first_name"
                name="first_name"
                defaultValue={user?.data?.first_name || ''}
                placeholder="أدخل الاسم الأول"
              />
              <Input
                label="last_name"
                name="last_name"
                defaultValue={user?.data?.last_name || ''}
                placeholder="أدخل الاسم الأخير"
              />
            </div>
            <Input
              label="email"
              name="email"
              defaultValue={user?.data?.email || ''}
              placeholder="أدخل البريد الإلكتروني"
              disabled={true}
            />
            <SelectGeneric
              options={Options}
              placeholder="أدخل الدور"
              name="roles"
              selectedValue={value || ''}
              setSelectedValue={setValue}
            />
          </div>
          <div className="flex w-full justify-between">
            <button
              disabled={isPending}
              className="mt-5 w-fit rounded-md border bg-color2 px-4 py-2 text-lg text-white shadow-md hover:opacity-50"
            >
              {isPending ? 'جاري تعديل...' : 'نعم'}
            </button>
            <DialogClose asChild>
              <button className="mt-5 w-fit rounded-md border bg-white px-4 py-2 text-lg text-color2 shadow-md hover:opacity-50">
                إلغاء
              </button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
