"use client";
import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoImageOutline } from "react-icons/io5";

export function UploadPhoto() {
      const [previews, setPreviews] = useState<(string | null)[]>([null, null, null, null]);

      const handleDrop = (acceptedFiles: File[], index: number) => {
            const file = acceptedFiles[0];
            if (file) {
                  const updatedPreviews = [...previews];
                  updatedPreviews[index] = URL.createObjectURL(file);
                  setPreviews(updatedPreviews);
            }
      };

      return (
            <div className="flex flex-col w-full gap-4">
                  {/* Label Utama */}
                  <label className="text-sm text-[#191717] font-medium">Foto Produk</label>

                  {/* 4 Kotak Input Foto */}
                  <div className="flex gap-5">
                        {previews.map((preview, index) => {
                              const { getRootProps, getInputProps } = useDropzone({
                                    accept: { "image/*": [] },
                                    onDrop: (files) => handleDrop(files, index),
                              });

                              return (
                                    <div
                                          key={index}
                                          {...getRootProps()}
                                          className="flex flex-col items-center justify-center w-36 h-36 md:w-40 md:h-40 border-2 border-dashed border-neutral-400 rounded-[12px] cursor-pointer hover:bg-gray-100"
                                    >
                                          <input {...getInputProps()} />
                                          {preview ? (
                                                <Image src={preview} alt={`Preview ${index + 1}`} width={165} height={165} className="w-full h-full object-cover rounded-lg" />
                                          ) : (
                                                <div className="flex flex-col items-center gap-3">
                                                      <IoImageOutline size={24} color="#000000" />
                                                      <p className="text-xs text-neutral-600">{`Foto ${index + 1}`}</p>
                                                </div>
                                          )}
                                    </div>
                              );
                        })}
                  </div>
            </div>
      );
}
