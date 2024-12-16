'use client';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getEndpoint from '@/services/getEndpoint';
import CRUDData from '@/services/CRUDData';
import { useToast } from '@/components/ui/use-toast';
import {} from 'lucide-react';
import { Tables } from '@/types/database.types';
import { IValidationErrors } from '@/types';
import useWriter from '@/hooks/data/books/writers/useWriter';
import SelectGeneric from '@/components/selectGeneric';
import { nationalities } from '@/constants/data';

export default function Author() {
  const [errors, setErrors] = useState<
    IValidationErrors<Tables<'writers'>> | null | undefined
  >(null);
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const authorId = searchParams.get('authorId');
  const { data: writer, isLoading } = useWriter(String(authorId));
  const [value, setValue] = useState<string>(writer?.data?.nationality ?? '');

  const queryClient = useQueryClient();
  const toast = useToast();
  useEffect(() => {
    if (writer?.data) {
      setValue(writer?.data?.nationality ?? '');
    }
  }, [writer?.data]);

  const updateWriterMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const name = String(formData.get('name'));
      const payload = {
        name,
        nationality: value
      };
      const url = getEndpoint({
        resourse: 'writers',
        action: authorId ? 'updateWriter' : 'createWriter'
      });
      const { error, validationErrors } = await CRUDData<
        Tables<'writers'>,
        Tables<'writers'>
      >({
        method: authorId ? 'PATCH' : 'POST',
        url: url(String(authorId)),
        payload
      });
      if (error || validationErrors) {
        setErrors(validationErrors);
        throw new Error(error || '');
      }
    },
    onSuccess: () => {
      toast.toast({
        description: authorId
          ? 'تمت عملية تعديل بنجاح'
          : 'تمت عملية الإضافة بنجاح'
      });
      if (!authorId && formRef.current) {
        formRef.current.reset();
      }
      queryClient.invalidateQueries({ queryKey: ['writers'] });
    },
    onError: () =>
      toast.toast({
        description: authorId
          ? 'حدث خطأ أثناء عملية تعديل'
          : 'حدث خطأ أثناء عملية الإضافة'
      })
  });

  if (isLoading)
    return (
      <div className="m-auto flex min-h-screen items-center justify-center">
        <Player
          autoplay
          loop
          src="/loading.json"
          style={{ height: '10rem', width: '10rem' }}
        />
      </div>
    );

  return (
    <form
      ref={formRef}
      action={updateWriterMutation.mutate}
    >
      <div>
        <label className="block font-semibold">إسم المؤلف</label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="name"
            className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
            defaultValue={writer?.data?.name}
          />
        </div>
        {errors?.name?.map((err, index) => (
          <p key={index} className="mt-2 text-red-500">
            {err}
          </p>
        ))}
      </div>
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
        {errors?.nationality?.map((err, index) => (
          <p key={index} className="mt-2 text-red-500">
            {err}
          </p>
        ))}
      </div>
      <button
        type="submit"
        className="mt-5 w-fit rounded-sm bg-color2 px-4 py-3 text-lg text-white shadow-lg transition-opacity hover:opacity-80"
        disabled={updateWriterMutation.isPending}
      >
        {updateWriterMutation.isPending
          ? 'جاري المعالجة...'
          : authorId
          ? 'تعديل المؤلف'
          : 'إضافة مؤلف'}
      </button>
    </form>
  );
}
