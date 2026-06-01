"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".about-animate-section").forEach((section) => {
        const revealItems = section.querySelectorAll(".about-reveal");
        const imageItems = section.querySelectorAll(".about-image-reveal");
        const cardItems = section.querySelectorAll(".about-card-reveal");
        const lineItems = section.querySelectorAll(".about-line-reveal");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });

        if (revealItems.length) {
          tl.from(revealItems, {
            y: 45,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
          });
        }

        if (imageItems.length) {
          tl.from(
            imageItems,
            {
              y: 70,
              opacity: 0,
              scale: 0.94,
              filter: "blur(10px)",
              duration: 1,
              stagger: 0.14,
              ease: "power4.out",
            },
            "-=0.45"
          );
        }

        if (cardItems.length) {
          tl.from(
            cardItems,
            {
              y: 55,
              opacity: 0,
              filter: "blur(8px)",
              duration: 0.85,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.45"
          );
        }

        if (lineItems.length) {
          tl.from(
            lineItems,
            {
              y: 28,
              opacity: 0,
              duration: 0.7,
              stagger: 0.16,
              ease: "power3.out",
            },
            "-=0.4"
          );
        }
      });

      gsap.utils.toArray(".about-hero-image, .about-treatment-main-image").forEach((item) => {
        const img = item.querySelector("img");

        if (!img) return;

        gsap.to(img, {
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });

      gsap.utils.toArray(".about-small-img").forEach((item, index) => {
        gsap.to(item, {
          y: index % 2 === 0 ? -35 : 35,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-approach",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      });

      gsap.utils.toArray(".about-treatment-card, .about-treatment-main").forEach((card) => {
        const img = card.querySelector("img");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -8,
            duration: 0.35,
            ease: "power3.out",
          });

          if (img) {
            gsap.to(img, {
              scale: 1.08,
              duration: 0.55,
              ease: "power3.out",
            });
          }
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          });

          if (img) {
            gsap.to(img, {
              scale: 1,
              duration: 0.55,
              ease: "power3.out",
            });
          }
        });
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  

  return null;
}