'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';

const slides = Array(6).fill("/image/shop/banner-dummy.svg");

export function BannerProduct() {
      return (
            <div className="bg-neutral-300 px-5 py-6 lg:px-20 lg:py-10">
                  <div className="w-full max-w-[1440px] mx-auto">
                        <Swiper
                              modules={[Autoplay, EffectCoverflow]}
                              spaceBetween={100}
                              loop={true}
                              centeredSlides={true}
                              autoplay={{ delay: 5000, disableOnInteraction: false }}
                              effect="coverflow"
                              coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 2,
                                    slideShadows: false,
                              }}
                              breakpoints={{
                                    768: { slidesPerView: 1.5 },
                              }}
                              slidesPerView={1} // Default
                        >
                              {slides.map((src, index) => (
                                    <SwiperSlide key={index} className="transition-all duration-300">
                                          <Image
                                                src={src}
                                                alt={`banner-${index}`}
                                                width={800}
                                                height={250}
                                                className="shadow-md rounded-lg"
                                          />
                                    </SwiperSlide>
                              ))}
                        </Swiper>
                  </div>
            </div>
      );
}
