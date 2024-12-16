'use client';
import React from 'react';
import Image from 'next/image';

export default function OfferPicUpload({
  picture,
  setPicture,
  errors
}: {
  picture: string;
  setPicture: React.Dispatch<React.SetStateAction<string>>;
  errors: string[];
}) {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPicture(objectUrl);
    }
  };

  return (
    <div>
      <div
        className="my-2 flex h-[15rem] w-full  cursor-pointer flex-col justify-center gap-2 bg-color3 p-2"
        onClick={() =>
          document
            .querySelector<HTMLInputElement>('input[name="filepicture"]')
            ?.click()
        }
      >
        <Image
          src={picture}
          width={150}
          height={150}
          alt="Offer Picture"
          className="m-auto h-auto min-h-[7rem] w-[12rem] min-w-[12rem] max-w-[12rem]"
        />
        <input
          className=""
          name="filepicture"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <div className="mx-auto w-48 text-center text-xs text-gray-500">
          حمل صورة العرض 
        </div>
      </div>
      {errors?.map((err, index) => (
        <p key={index} className="mt-2 text-red-500">
          {err}
        </p>
      ))}
    </div>
  );
}
