"use client";
import { useToast } from "@/components/ui/use-toast";
import CRUDData from "@/services/CRUDData";
import getEndpoint from "@/services/getEndpoint";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

export default function Images({
  images,
  setImages,
  setUpdatedImages,
  updatedImages,
  bookId,
}: {
  images: File[];
  updatedImages: string[];
  bookId: string;
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  setUpdatedImages: React.Dispatch<React.SetStateAction<string[]>>;
}) {
 const toast = useToast();
  const url = getEndpoint({ resourse: "books", action: "updateBook" });
  const queryClient = useQueryClient();

  const deleteSavedImageMutation = useMutation({
    mutationFn: async () => {
      await CRUDData({
        method: "PATCH",
        url: url(bookId),
        payload: {
          images_urls: updatedImages, 
        },
      });
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["books",bookId]});
      toast.toast({ description: "لقد تم حذف الصورة بنجاح"}); // Optional
    },
    onError: (error: any) => {
      toast.toast({ description: "حدث خطأ أثناء عملية الحذف" }); // Optional
    },
  });
  const removeImage = (fileName: string) => {
    setImages((prevImages) =>
      prevImages.filter((file) => file.name !== fileName)
    );
  };

  const deleteSavedImage = (imageUrl: string) => {
    const updatedImageList = updatedImages.filter((img) => img !== imageUrl);
    setUpdatedImages(updatedImageList);
    deleteSavedImageMutation.mutate();
  };
  return (
    <>
      {[...images, ...updatedImages].map((file, index) => (
        <div
          key={index}
          className="relative m-2 h-32 w-32 cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={file instanceof File ? URL.createObjectURL(file) : file}
            alt={file instanceof File ? file.name : `Saved image ${index}`}
            className="h-full w-full rounded-md object-cover"
            width={500}
            height={500}
            draggable={false}
          />
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (file instanceof File) {
                removeImage(file.name); 
              } else {
                deleteSavedImage(file); 
              }
            }}
            className="absolute right-0 top-0 cursor-pointer rounded-full bg-red-500 px-2 py-1 text-sm text-white"
          >
            X
          </div>
        </div>
      ))}
    </>
  );
}
