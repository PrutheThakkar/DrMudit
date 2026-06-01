"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";

export default function ExpertiseTabs({ tabs = [] }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!tabs.length) return null;

  const handleTabClick = (index) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
  };

  const handleNext = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const nextIndex = activeIndex === tabs.length - 1 ? 0 : activeIndex + 1;
    swiper.slideTo(nextIndex);
    setActiveIndex(nextIndex);
  };

  return (
    <section className="expertise-content-section">
      <div className="container">
        <div className="expertise-tab-nav" role="tablist">
          <ul>
            {tabs.map((item, index) => (
              <li key={item.label}>
                <button
                  type="button"
                  className={`expertise-tab-btn ${activeIndex === index ? "active" : ""
                    }`}
                  onClick={() => handleTabClick(index)}
                  role="tab"
                  aria-selected={activeIndex === index}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="expertise-slider-wrap">
          <Swiper
            modules={[Mousewheel, Keyboard]}
            slidesPerView={1}
            spaceBetween={0}
            speed={700}
            autoHeight={true}
            keyboard={{ enabled: true }}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
              sensitivity: 0.8,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            className="expertise-swiper"
          >
            {tabs.map((item) => (
              <SwiperSlide key={item.label}>
                <div className="expertise-info-block">

                  <div className="expertise-info-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="70vw"
                    />
                  </div>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="expertise-slider-next"
            onClick={handleNext}
            aria-label="Next expertise slide"
          >
            ↑
          </button>
        </div>
      </div>
    </section>
  );
}