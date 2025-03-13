'use client';

import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import Image from 'next/image';

type ProductImageType = {
      image: string;
      alt: string;
};

const ProductImageItem: ProductImageType[] = [
      { image: '/image/product-detail/product-dummy.svg', alt: 'pict-0' },
      { image: '/image/product-detail/pict-1.jpg', alt: 'pict-1' },
      { image: '/image/product-detail/pict-2.jpg', alt: 'pict-2' },
      { image: '/image/product-detail/pict-3.jpg', alt: 'pict-3' },
]

export function ProductDetailImage() {
      const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

      return (
            <div className="flex flex-col items-center gap-4 justify-start">
                  {/* Slider Utama */}
                  <Swiper
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Thumbs]}
                        slidesPerView={1}
                        className="main-slider w-full md:max-w-[400px]"
                  >
                        {ProductImageItem.map((item, index) => (
                              <SwiperSlide key={index}>
                                    <Image
                                          src={item.image}
                                          alt={item.alt}
                                          className="w-full h-auto"
                                          width={400}
                                          height={400}
                                    />
                              </SwiperSlide>
                        ))}
                  </Swiper>

                  {/* Slider Thumbnail */}
                  <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[Thumbs]}
                        className="thumbnail-slider w-full md:max-w-[400px]"
                        breakpoints={{
                              390: {
                                    slidesPerView: 3
                              },
                              768: {
                                    slidesPerView: 4
                              }
                        }}
                  >
                        {ProductImageItem.map((item, index) => (
                              <SwiperSlide key={index}>
                                    <Image
                                          src={item.image}
                                          alt={item.alt}
                                          width={150}
                                          height={150}
                                          className="w-full h-full cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                                    />
                              </SwiperSlide>
                        ))}
                  </Swiper>
            </div>
      )
}