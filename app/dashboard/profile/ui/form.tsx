'use client';
import { useToast } from '@/components/ui/use-toast';
import { Edit } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import CRUDData from '@/services/CRUDData';
import getEndpoint from '@/services/getEndpoint';
import Input from '@/components/input';
import useUser from '@/hooks/data/user/useUser';
import SelectGeneric from '@/components/selectGeneric';
import { v4 as uuidv4 } from 'uuid';
import { uploadFile } from '@/api/uploadFile';
import { useEffect, useState } from 'react';
import useCurrentUser from '@/hooks/data/user/useCurrentUser';
import UserPic from './userPic';
import { Player } from '@lottiefiles/react-lottie-player';
import ChangePassword from './changePassword';

export default function Form() {
  const queryClient = useQueryClient();
  const { data: user, isLoading } = useCurrentUser();
  const [preview, setPreview] = useState<string>('/noAvatar.jpg');

  useEffect(() => {
    if (user) {
      if (user.data?.avatar) {
        setPreview(user.data.avatar);
      } else {
        setPreview('/noAvatar.jpg');
      }
    }
  }, [user]);
  const { toast } = useToast();

  const updateMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const first_name = String(formData.get('first_name'));
      const last_name = String(formData.get('last_name'));
      const filepicture = formData.get('filepicture') as File;
      let avatar = user?.data?.avatar ?? '';

      if (filepicture && filepicture.size > 0) {
        avatar = await uploadFile({
          formData,
          name: 'filepicture',
          title: uuidv4()
        });
      }

      const payload = {
        first_name,
        last_name,
        avatar
      };

      const url = getEndpoint({ resourse: 'users', action: 'updateMe' });
      const { error } = await CRUDData({
        method: 'PATCH',
        url: url(),
        payload: payload
      });
      if (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      queryClient.invalidateQueries({ queryKey: ['users', 'me'] });

      toast({
        title: 'نجاح!',
        description: `تم تعديل بيانات المستخدم بنجاح.`
      });
    },
    onError: (error) => {
      toast({
        description: `حدث خطأ أثناء تعديل بيانات المستخدم: ${error.message}`
      });
    }
  });
  
  if (isLoading) {
    return (
      <div className="m-auto flex min-h-screen items-center justify-center">
        <Player
          className="m-auto"
          autoplay
          loop
          src="/loading.json"
          style={{ height: '10rem', width: '10rem' }}
        />
      </div>
    );
  }

  return (
    <div className="p-10">
      <div className="mx-auto flex flex-col justify-center gap-8 w-full max-w-lg">
        <form
          className="flex flex-col justify-center gap-8 rounded-sm"
          action={updateMutation.mutate}
        >
          <UserPic picture={preview} setPicture={setPreview} />
          <div className="flex flex-col justify-center gap-4">
            <div className="flex justify-between w-full">
              <Input
                label="الاسم الأول"
                name="first_name"
                defaultValue={user?.data?.first_name || ''}
                placeholder="أدخل الاسم الأول"
              />
              <Input
                label="الاسم الأخير"
                name="last_name"
                defaultValue={user?.data?.last_name || ''}
                placeholder="أدخل الاسم الأخير"
              />
            </div>
            <Input
              label="البريد الإلكتروني"
              name="email"
              defaultValue={user?.data?.email || ''}
              placeholder="أدخل البريد الإلكتروني"
              disabled={true}
            />
            <button
              disabled={updateMutation.isPending}
              className="ml-auto mt-5 w-full bg-color2 p-2 text-xl font-semibold text-white hover:opacity-50"
              type="submit"
            >
              {updateMutation.isPending ? 'جاري التعديل...' : 'تعديل بيانات المستخدم'}
            </button>
          </div>
        </form>
        <div className="w-full">
          <ChangePassword email={user?.data?.email ?? ''} />
        </div>
      </div>
    </div>
  );
}
