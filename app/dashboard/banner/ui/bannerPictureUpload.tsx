'use client'
import React from 'react'
import Image from "next/image"



export default function BannerPicUpload( {picture , setPicture}: { picture: string, setPicture: React.Dispatch<React.SetStateAction<string>> }) {

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPicture(objectUrl);
    }
  };

  return (
    <div
    className="flex h-[15rem] max-w-[15rem] w-full mt-2 cursor-pointer flex-col justify-center gap-2 bg-color3 py-2"
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
      alt="Banner Picture"
      className="m-auto w-[8rem] min-w-[8rem] max-w-[9rem] h-auto min-h-[7rem]"
    />
    <input
      className=""
      name="filepicture"
      type="file"
      accept="image/*"
      style={{ display: "none" }}
      onChange={handleImageChange}
    />
    <div className="mx-auto w-48 text-center text-xs text-gray-500">
      حمل صورة الراية
    </div>
  </div>
  )
}