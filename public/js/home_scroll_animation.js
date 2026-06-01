document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger not loaded");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Better GSAP performance
  gsap.config({
    nullTargetWarn: false,
  });

  ScrollTrigger.config({
    ignoreMobileResize: true,
  });

  // Smooth default animation settings
  const easeMain = "power3.out";

  // ---------------------------------------
  // Helper: simple text line reveal
  // ---------------------------------------
  function revealText(selector, triggerElement) {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: triggerElement || el,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        y: 45,
        opacity: 0,
        filter: "blur(8px)",
        duration: 1,
        ease: easeMain,
      });
    });
  }

  // ---------------------------------------
  // Hero Animation
  // ---------------------------------------
  const heroTl = gsap.timeline({
    defaults: {
      ease: easeMain,
    },
  });

  heroTl
    .from("header .logo", {
      y: -25,
      opacity: 0,
      duration: 0.8,
    })
    .from(
      "header ul li",
      {
        y: -20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
      },
      "-=0.5"
    )
    .from(
      ".hero-content h1",
      {
        y: 50,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
      },
      "-=0.3"
    )
    .from(
      ".hero .hero-buttons .btn",
      {
        y: 25,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
      },
      "-=0.45"
    );

  // ---------------------------------------
  // Section Title Animation
  // ---------------------------------------
  gsap.utils.toArray("section, footer").forEach((section) => {
    const label = section.querySelector(".div-title");
    const heading = section.querySelector(".heading, .faq-title, .footer-heading");
    const subHeading = section.querySelector(".sub-heading, .faq-description, .footer-subtitle");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 78%",
        toggleActions: "play none none reverse",
      },
    });

    if (label) {
      tl.from(label, {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: easeMain,
      });
    }

    if (heading) {
      tl.from(
        heading,
        {
          y: 45,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.9,
          ease: easeMain,
        },
        "-=0.35"
      );
    }

    if (subHeading) {
      tl.from(
        subHeading,
        {
          y: 28,
          opacity: 0,
          duration: 0.7,
          ease: easeMain,
        },
        "-=0.45"
      );
    }
  });

  // ---------------------------------------
  // About Section Animation
  // ---------------------------------------
  const aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section .section-wrapper",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  aboutTl
    .from(".about-section .left p", {
      y: 40,
      opacity: 0,
      filter: "blur(8px)",
      duration: 1,
      ease: easeMain,
    })
    .from(
      ".about-section .img-wrap",
      {
        x: 70,
        opacity: 0,
        scale: 0.92,
        filter: "blur(10px)",
        duration: 1.1,
        ease: "power4.out",
      },
      "-=0.65"
    );

  // About image subtle floating
  gsap.to(".about-section .img-wrap img", {
    y: -18,
    duration: 3,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  // ---------------------------------------
  // Expertise Section Animation
  // ---------------------------------------
  const expertiseTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".expertise-section",
      start: "top 72%",
      toggleActions: "play none none reverse",
    },
  });

  expertiseTl
    .from(".expertise-tabs", {
      y: 35,
      opacity: 0,
      duration: 0.8,
      ease: easeMain,
    })
    .from(
      ".expertise-card",
      {
        y: 70,
        opacity: 0,
        scale: 0.92,
        filter: "blur(10px)",
        stagger: 0.18,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.35"
    )
    .from(
      ".expertise-section .hero-buttons",
      {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: easeMain,
      },
      "-=0.3"
    );

  // ---------------------------------------
  // Patient Stories Animation
  // ---------------------------------------
  const patientTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".Patient-section",
      start: "top 72%",
      toggleActions: "play none none reverse",
    },
  });

  patientTl
    .from(".patientSwiper", {
      y: 70,
      opacity: 0,
      scale: 0.96,
      filter: "blur(10px)",
      duration: 1.1,
      ease: "power4.out",
    })
    .from(
      ".Patient-section .hero-buttons",
      {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: easeMain,
      },
      "-=0.45"
    );

  // ---------------------------------------
  // FAQ Section Animation
  // ---------------------------------------
  const faqTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".faq-section",
      start: "top 72%",
      toggleActions: "play none none reverse",
    },
  });

  faqTl
    .from(".faq-left", {
      x: -60,
      opacity: 0,
      filter: "blur(8px)",
      duration: 1,
      ease: easeMain,
    })
    .from(
      ".faq-item",
      {
        x: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: easeMain,
      },
      "-=0.65"
    )
    .from(
      ".faq-section .hero-buttons",
      {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: easeMain,
      },
      "-=0.35"
    );

  // ---------------------------------------
  // Footer Animation
  // ---------------------------------------
  const footerTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-footer",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  footerTl
    .from(".footer-left", {
      x: -60,
      opacity: 0,
      duration: 1,
      ease: easeMain,
    })
    .from(
      ".footer-right",
      {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: easeMain,
      },
      "-=0.75"
    )
    .from(
      ".footer-nav li",
      {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.55,
        ease: easeMain,
      },
      "-=0.5"
    )
    .from(
      ".map-container",
      {
        y: 40,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        ease: "power4.out",
      },
      "-=0.45"
    );

  // ---------------------------------------
  // Premium Image Hover Animation
  // ---------------------------------------
  const hoverImages = gsap.utils.toArray(
    ".expertise-card .img-wrap, .about-section .img-wrap, .testimonial-image, .map-container"
  );

  hoverImages.forEach((wrap) => {
    const img = wrap.querySelector("img, iframe");

    wrap.style.overflow = "hidden";
    wrap.style.willChange = "transform";

    if (img) {
      img.style.willChange = "transform";
    }

    wrap.addEventListener("mouseenter", () => {
      gsap.to(wrap, {
        y: -8,
        scale: 1.015,
        duration: 0.5,
        ease: "power3.out",
      });

      if (img) {
        gsap.to(img, {
          scale: 1.08,
          duration: 0.7,
          ease: "power3.out",
        });
      }
    });

    wrap.addEventListener("mouseleave", () => {
      gsap.to(wrap, {
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });

      if (img) {
        gsap.to(img, {
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
        });
      }
    });
  });

  // ---------------------------------------
  // Button Hover Animation
  // ---------------------------------------
  const buttons = gsap.utils.toArray(".btn, .contact-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        y: -3,
        scale: 1.03,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // ---------------------------------------
  // Subtle Parallax On Sections
  // ---------------------------------------
  gsap.utils.toArray(".about-section, .expertise-section, .Patient-section, .faq-section").forEach((section) => {
    gsap.fromTo(
      section,
      {
        backgroundPosition: "50% 0%",
      },
      {
        backgroundPosition: "50% 18%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  });

  // Refresh after all animation setup
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
});