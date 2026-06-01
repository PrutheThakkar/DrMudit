"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";

function makeLoopItems(items = []) {
  if (items.length >= 6) return items;
  return [...items, ...items, ...items];
}

export default function PatientStoriesSliders({ reelsStories, youtubeStories }) {
  const reelsSwiperRef = useRef(null);
  const youtubeSwiperRef = useRef(null);

  const reelsItems = makeLoopItems(reelsStories);
  const youtubeItems = makeLoopItems(youtubeStories);

  return (
    <>
      <section className="story-slider-section story-reels-section">
        <div className="container">
          <div className="story-section-title">
            <h2>Reels</h2>
          </div>

          <div className="story-slider-wrap story-reels-wrap">
            <button
              type="button"
              className="story-nav story-nav-prev"
              onClick={() => reelsSwiperRef.current?.slidePrev()}
            >
              ‹
            </button>

            <Swiper
              modules={[Keyboard]}
              onSwiper={(swiper) => {
                reelsSwiperRef.current = swiper;
              }}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              speed={650}
              spaceBetween={42}
              keyboard={{ enabled: true }}
              className="story-swiper reels-swiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 42,
                },
              }}
            >
              {reelsItems.map((story, index) => (
                <SwiperSlide key={`${story.title}-${index}`}>
                  <a href={story.url} className="reel-card">
                    <img src={story.image} alt={story.title} />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              className="story-nav story-nav-next"
              onClick={() => reelsSwiperRef.current?.slideNext()}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="story-slider-section story-youtube-section">
        <div className="container">
          <div className="story-section-title">
            <h2>Youtube</h2>
          </div>

          <div className="story-slider-wrap story-youtube-wrap">
            <button
              type="button"
              className="story-nav story-nav-prev"
              onClick={() => youtubeSwiperRef.current?.slidePrev()}
            >
              ‹
            </button>

            <Swiper
              modules={[Keyboard]}
              onSwiper={(swiper) => {
                youtubeSwiperRef.current = swiper;
              }}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              speed={650}
              spaceBetween={42}
              keyboard={{ enabled: true }}
              className="story-swiper youtube-swiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 42,
                },
              }}
            >
              {youtubeItems.map((story, index) => (
                <SwiperSlide key={`${story.title}-${index}`}>
                  <a href={story.url} className="youtube-card">
                    <img src={story.image} alt={story.title} />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              className="story-nav story-nav-next"
              onClick={() => youtubeSwiperRef.current?.slideNext()}
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </>
  );
}