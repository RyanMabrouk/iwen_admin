"use client"

import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { X } from 'lucide-react'

interface BookImage {
  file: File
  preview: string
}

export default function BookImageUploader() {
  const [images, setImages] = useState<BookImage[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newImages = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }))
    setImages(prevImages => [...prevImages, ...newImages])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    multiple: true
  })

  const removeImage = (index: number) => {
    setImages(prevImages => {
      const newImages = [...prevImages]
      URL.revokeObjectURL(newImages[index].preview)
      newImages.splice(index, 1)
      return newImages
    })
  }

  return (
    <div className="w-full max-w-md ">
      <div
        {...getRootProps()}
        className={`p-6 mt-4 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary'
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-primary">Drop the images here ...</p>
        ) : (
          <p>Drag and drop some images here, or click to select files</p>
        )}
      </div>
      {images.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={image.preview} className="relative group">
              <img
                src={image.preview}
                alt={`Book image ${index + 1}`}
                className="w-full h-40 object-cover rounded-lg"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Remove image ${index + 1}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}