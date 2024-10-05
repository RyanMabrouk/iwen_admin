"use client";

import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function PictureUploader({
  images,
  setImages,
}: {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}) {
  const { toast } = useToast();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.filter(
        (file) =>
          !images.some(
            (existingFile) =>
              existingFile.name === file.name && existingFile.size === file.size
          )
      );
      if (newFiles.length > 0) {
        setImages((prevImages) => [...prevImages, ...newFiles]);
      } else {
        toast({
          title: "خطأ",
          description: "هذه الصورة موجودة بالفعل.",
        });
      }
    },
    [images, setImages, toast]
  );

  const removeImage = (fileName: string) => {
    setImages((prevImages) =>
      prevImages.filter((file) => file.name !== fileName)
    );
  };

  const renderImages = () => {
    return images.map((file, index) => (
      <div
        key={index}
        className="group relative m-2 h-32 w-32 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={file instanceof File ? URL.createObjectURL(file) : file}
          alt={file instanceof File ? file.name : `صورة محفوظة ${index}`}
          className="h-full w-full rounded-md object-cover"
          width={400}
          height={400}
          draggable={false}
        />
        {/* "X" button will only show on hover */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            removeImage(file.name);
          }}
          className="absolute right-0 top-0 hidden cursor-pointer rounded-full bg-red-500 px-2 py-1 text-sm text-white group-hover:block"
        >
          X
        </div>
      </div>
    ));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`flex cursor-pointer flex-col gap-5 rounded-lg border-4 border-dashed p-8 text-center ${
          images.length > 0 ? "pb-0" : ""
        } ${isDragActive ? "border-green-500" : "border-gray-300"}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-green-500">أسقط الصور هنا...</p>
        ) : (
          <p className="text-gray-500">
            اسحب الصور وأفلتها هنا، أو انقر لاختيار الصور
          </p>
        )}
        {/* Grid container for images */}
        <div className="mx-auto mt-4 grid w-full grid-cols-2 sm:grid-cols-3 gap-4 place-items-center">
          {renderImages()}
        </div>
      </div>
    </div>
  );
}
