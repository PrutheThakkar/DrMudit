"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function AffiliationsSwiper({ items }) {
  return (
    <div className="about-affiliations-slider">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        slidesPerGroup={2}
        spaceBetween={24}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={true}
        className="about-affiliations-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 2,
            spaceBetween: 24,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="about-affiliation-card about-card-reveal">
              <div className="about-affiliation-logo">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={256}
                  height={140}
                />
              </div>

              {/* <p>{item.title}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}