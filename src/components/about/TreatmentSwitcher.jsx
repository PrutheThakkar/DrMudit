"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const AUTO_CHANGE_DELAY = 3500;

export default function TreatmentInfoSwitcher({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || !items.length) return;

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, AUTO_CHANGE_DELAY);

    return () => clearInterval(timer);
  }, [activeIndex, isPaused, items.length]);

  if (!items.length) return null;

  const activeItem = items[activeIndex];
  const sideItems = items.filter((_, index) => index !== activeIndex);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className="about-treatment-v2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
       <div className="div-title">
              <p>Specialised Treatments</p>
            </div>
             <h2 className="heading">Lorem ipsum dolor sit </h2>

            <p className="sub-heading">
              of restoring movement through precision-led hip and knee replacement
              surgery.
            </p>

      <div className="about-treatment-v2-layout">
        <div className="about-treatment-v2-feature">
          <div className="about-treatment-v2-feature-content">

            <h3>{activeItem.title}</h3>

            <p>{activeItem.description}</p>
              <a href="#">View details</a>
          </div>

          <div
            className="about-treatment-v2-feature-image"
            key={`feature-image-${activeIndex}`}
          >
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              sizes="50vw"
              priority={activeIndex === 0}
            />
          </div>
        </div>

        <div className="about-treatment-v2-grid">
          {sideItems.map((item) => {
            const originalIndex = items.findIndex(
              (treatment) => treatment.title === item.title
            );

            return (
              <button
                type="button"
                className="about-treatment-v2-card"
                key={item.title}
                onClick={() => handleCardClick(originalIndex)}
              >
                <div className="about-treatment-v2-card-content">
                  <h3>{item.title}</h3>
                  {/* <p>{item.shortDescription}</p> */}
                  {/* <span>View details</span> */}
                </div>

                <div className="about-treatment-v2-card-image">
                  <Image src={item.image} alt={item.title} fill sizes="25vw" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}