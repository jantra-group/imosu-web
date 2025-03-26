'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";

interface InstagramPost {
      id: string;
      media_url: string;
}

export function InstagramSection() {
      const [feed, setFeed] = useState<InstagramPost[]>([]);

      const fetchData = async (url: string) => {
            try {
                  const response = await fetch(url);
                  if (!response.ok) throw new Error('Failed to fetch Instagram feed');

                  const result = await response.json();

                  setFeed(Array.isArray(result.data) ? result.data : []);
            } catch (error) {
                  console.error('Error fetching Instagram feed:', error);
            }
      };

      useEffect(() => {
            fetchData('/api/instagram');
      }, []);

      return (
            <div className="flex flex-col gap-3">
                  <h3 className="text-2xl md:text-[32px] font-bold text-black">
                        See More About Us on Instagram!
                  </h3>
                  <Link href="https://www.instagram.com/imosu.official/" className="flex gap-4 items-center">
                        <FaInstagram size={36} color="#CC0000" className="w-[30px] md:w-9" />
                        <p className="text-lg md:file:text-2xl text-primary-500 font-bold">imosu.official</p>
                  </Link>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
                        {feed.slice(0,4).map((item) => (
                              <div key={item.id} className="w-full h-full relative cursor-pointer">
                                    <Image
                                          src={item.media_url}
                                          alt={`Instagram post ${item.id}`}
                                          width={200}
                                          height={200}
                                          objectFit="cover"
                                          className="w-full h-full rounded-lg"
                                    />
                              </div>
                        ))}
                  </div>

                        <Link href="https://www.instagram.com/imosu.official/" className="bg-primary-500 flex items-center gap-3 py-2 text-sm md:text-lg font-semibold shadow-lg w-fit px-8 rounded-lg mx-auto mt-5 text-white" passHref>
                              <FaInstagram size={28} color="#FFFFFF" className="w-6 md:w-7"/>
                              Follow on Instagram
                        </Link>
            </div>
      );
}
