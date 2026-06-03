"use client";

import { useLayoutEffect } from "react";
import Swiper from "swiper/bundle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

import doctorImg from "../app/images/Dr-mudit-new-img.webp";
import kneeImg from "../app/images/Knee Replacement.jpg";
import hipImg from "../app/images/Hip Replacement.jpg";
import regenImg from "../app/images/Regenerative Treatment.jpg";
import painImg from "../app/images/Pain Management.jpg";
import logoBannerImg from "../app/images/logo-banner-new.png";

import patientStory1Img from "../app/images/Patient Stories_1_Louise W.webp";
import patientStory2Img from "../app/images/Patient Stories_2_Ronak Khemka.webp";
import patientStory3Img from "../app/images/Patient Stories_3_Jeff Rouse.webp";
import patientStory4Img from "../app/images/Patient Stories_4_Manish Anand.webp";


const imageSrc = (img) => (typeof img === "string" ? img : img.src);

const imgAttrs = (img, priority = false) => {
  return `
    src="${imageSrc(img)}"
    loading="${priority ? "eager" : "lazy"}"
    decoding="async"
    fetchpriority="${priority ? "high" : "low"}"
  `;
};

const externalImgAttrs = (src, priority = false) => {
  return `
    src="${src}"
    loading="${priority ? "eager" : "lazy"}"
    decoding="async"
    fetchpriority="${priority ? "high" : "low"}"
  `;
};

const pageMarkup = `
<div class="site-preloader">
  <div class="preloader-inner">
    <div class="preloader-small-text">Loading Experience</div>
    <h2 class="preloader-title">Dr. Mudit Khanna</h2>

    <div class="preloader-progress">
      <div class="preloader-progress-fill"></div>
    </div>

    <div class="preloader-bottom">
      <span>Orthopaedic Surgeon</span>
      <span class="preloader-count">00</span>
    </div>
  </div>
</div>

<canvas id="webgl"></canvas>

<section class="section hero">
  <div class="container">
    <div class="left"></div>

    <div class="right hero-content">
      <h1>
        Precision in Motion for <br/>
        <span id="typing-text"></span><span class="cursor">|</span>
      </h1>

      <div class="hero-buttons">
        <a class="btn primary">Book an Appointment</a>
        <a class="btn whatsapp-btn">WhatsApp the Clinic</a>
      </div>
    </div>
  </div>
</section>

<section class="about-section">
  <div class="container">
    <div class="div-title">
      <p>About</p>
    </div>

    <h2 class="heading">Dr Mudit Khanna - (MCh, MRCS, MS Orthopaedics)</h2>

    <p class="sub-heading">
      Senior Orthopaedic &amp; Joint Replacement Surgeon - Wockhardt Hospitals, Mumbai Central
    </p>

    <div class="section-wrapper">
      <div class="left">
        <p>
          Dr. Mudit Khanna is a hip and knee replacement and arthroscopy specialist with over 15 years of
          focused orthopaedic experience. Trained at King George Medical College, with further
          qualifications in the UK and Europe and fellowships at leading centres in the USA, his approach
          to joint care is shaped by both clinical rigour and an athlete's understanding of movement.
        </p>
      </div>

      <div class="right">
        <div class="img-wrap">
          <img alt="Dr Mudit Khanna" ${imgAttrs(doctorImg, true)} />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="expertise-section">
  <div class="container">
    <div class="div-title">
      <p>Expertise</p>
    </div>

    <h2 class="heading">Precision in Every Joint</h2>

    <p class="sub-heading">
      Senior Orthopaedic &amp; Joint Replacement Surgeon - Wockhardt Hospitals, Mumbai Central
    </p>

    <div class="expertise-tabs">
      <button class="tab active" data-index="0">Knee Replacement</button>
      <button class="tab" data-index="1">Hip Replacement</button>
      <button class="tab" data-index="2">Regenerative Treatment</button>
      <button class="tab" data-index="3">Pain Management</button>
    </div>

    <div class="expertise-slider swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" data-id="knee">
          <div class="expertise-card">
            <h3>Knee Replacement</h3>
            <div class="img-wrap">
              <img alt="Knee Replacement" ${imgAttrs(kneeImg, false)} />
            </div>
          </div>
        </div>

        <div class="swiper-slide" data-id="hip">
          <div class="expertise-card">
            <h3>Hip Replacement</h3>
            <div class="img-wrap">
              <img alt="Hip Replacement" ${imgAttrs(hipImg, false)} />
            </div>
          </div>
        </div>

        <div class="swiper-slide" data-id="regen">
          <div class="expertise-card">
            <h3>Regenerative Treatment</h3>
            <div class="img-wrap">
              <img alt="Regenerative Treatment" ${imgAttrs(regenImg, false)} />
            </div>
          </div>
        </div>

        <div class="swiper-slide" data-id="pain">
          <div class="expertise-card">
            <h3>Pain Management</h3>
            <div class="img-wrap">
              <img alt="Pain Management" ${imgAttrs(painImg, false)} />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-buttons">
      <a class="btn whatsapp-btn">See All</a>
    </div>
  </div>
</section>

<section class="Patient-section">
  <div class="container">
    <div class="div-title">
      <p>Patient Stories</p>
    </div>

    <h2 class="heading">Why choose Dr. Mudit Khanna</h2>

    <p class="sub-heading">
      What Patients Say After Surgery
    </p>

    <div class="swiper patientSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="testimonial-image">
            <img 
              alt="Patient with medical team" 
              ${imgAttrs(patientStory1Img, false)}
            />
          </div>

          <div class="testimonial-content">
            <div class="nav-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="quote-text">
              "I traveled to India from New Zealand to get a hip replacement. I was lucky enough to have been referred to Dr Mudit Khanna. Dr Khanna was more than willing to answer all my pre op questions and after reading his credentials, I was very confident in his abilities. He is a revered orthopaedic surgeon and highly respected. My operation went smoothly and after two weeks I was walking normally. The post op care was exceptional and I was discharged from hospital only when I was feeling well and ready to leave. Dr Khanna took the time to take me through any restrictions and showed me how to walk correctly to maximise my recovery. I highly recommend Dr Mudit Khanna and thank you for enabling me to return to my active lifestyle."
            </div>

            <div class="patient-info">
              - Louise W
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="testimonial-image">
            <img 
              alt="Happy patient" 
              ${imgAttrs(patientStory2Img, false)}
            />
          </div>

          <div class="testimonial-content">
            <div class="nav-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="quote-text">
              "I came from Myanmar relating bilateral knee replacement surgery of my mother with Dr.Mudit Khanna. The Doctor explained us well about the surgery, he has alot of patience and kindness.He has Gifted hands, the surgery went perfect for both knees. Dr.Mudit Khanna and his team,Dr.Ramiz and Ms.Bhakti continued caring my mother so much that she was able to walk on the same day of surgery and recovering at her best.He is very very reliable and trustworthy, from the first meet of OPD day to discharge and follow-up, he took care of my mom with full responsibility. As the Doctor promised, we had no worries about the surgery and recovery.He made my mother walk again and stand on her knees independently. We are so grateful for your exceptional care.May your days be healthy like you make it for others."
            </div>

            <div class="patient-info">
              - Ronak Khemka
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="testimonial-image">
            <img 
              alt="Medical consultation" 
              ${imgAttrs(patientStory3Img, false)}
            />
          </div>

          <div class="testimonial-content">
            <div class="nav-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="quote-text">
              "First thing I would like to say is that if you are considering any type of orthopaedic surgery then Dr Mudit Khanna is your man. I have just spent the last 2 1/2 weeks at Wockhardt Hospital having my knee replaced by Dr Khanna and his wonderful team. From the very first meeting with Dr Khanna you are made to feel at ease with your about to go through. The before and after care could not be any better and Dr Khanna’s calm and positive attitude makes it much easier. I would have no hesitation to recommend him and his team as the whole experience has been 1st class and hugely cost effective. Thank you again Dr Khanna!"
            </div>

            <div class="patient-info">
              - Jeff Rouse
            </div>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="testimonial-image">
            <img 
              alt="Patient recovery" 
              ${imgAttrs(patientStory4Img, false)}
            />
          </div>

          <div class="testimonial-content">
            <div class="nav-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="quote-text">
              "My father underwent a robotic partial knee replacement surgery performed by Dr. Khanna.

Surgery – The operation went very well, and my father was able to walk properly within a few days without needing a walker. Partial knee surgery is considered quite tricky, but the doctor performed it with perfection.

Professional Behaviour – Dr. Khanna and his team were very professional from the beginning. They patiently addressed all our concerns, were always available for questions, and provided clear and helpful responses.

Post-Surgery Care – The doctor and his team continued to support us after the surgery, which kept us motivated. My father felt very positive throughout his recovery.

Recommendation – I would highly recommend Dr. Khanna to anyone considering orthopaedic surgery. You will truly be in good hands."
            </div>

            <div class="patient-info">
              - Manish Anand
            </div>
          </div>
        </div>

        
      </div>
    </div>

    <div class="hero-buttons"></div>
  </div>

  <div class="swiper-pagination"></div>
</section>

<section class="faq-section">
  <div class="container">
    <div class="div-title">
      <p>FAQ</p>
    </div>

     <h2 class="heading">What Patients Want to Know</h2>

    <p class="sub-heading">
      Clear, honest answers to the questions patients most commonly ask before, during, and after treatment.
    </p>

    <div class="faq-container">
      

      <div class="faq-right">
        <div class="faq-items">
          <div class="faq-item active">
            <button class="faq-question">
              <span class="faq-question-text">Can my knee or hip be treated without surgery?</span>
              <div class="faq-icon"></div>
            </button>

            <div class="faq-answer">
              <p class="faq-answer-text">
                In early and moderate stages, many patients improve with weight management, medicines, physiotherapy, exercises, activity modification and, in some cases, injections. Surgery is usually discussed only when pain, stiffness or deformity continue despite these measures and start affecting basic daily activities like walking, climbing stairs or sleeping.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span class="faq-question-text">When should I start thinking about joint replacement?</span>
              <div class="faq-icon"></div>
            </button>

            <div class="faq-answer">
              <p class="faq-answer-text">
                Joint replacement should be considered when conservative treatments no longer provide relief and joint pain significantly impacts your quality of life and daily activities. Your orthopedic surgeon will evaluate your specific condition and help determine the right timing for surgery.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span class="faq-question-text">How painful is hip or knee replacement surgery?</span>
              <div class="faq-icon"></div>
            </button>

            <div class="faq-answer">
              <p class="faq-answer-text">
                Modern pain management techniques have significantly reduced post-operative discomfort. Most patients experience manageable pain that decreases progressively over the first few weeks. Your medical team will provide comprehensive pain management strategies including medications, ice therapy, and physical therapy to ensure your comfort throughout recovery.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span class="faq-question-text">How many days will I be in the hospital, and when can I walk?</span>
              <div class="faq-icon"></div>
            </button>

            <div class="faq-answer">
              <p class="faq-answer-text">
                Most patients stay in the hospital for 2-4 days following joint replacement surgery. You'll typically begin walking with assistance on the same day or the day after surgery. Physical therapy starts immediately to help you regain strength and mobility. Full recovery and return to normal activities usually takes 6-12 weeks, though many patients notice significant improvement within the first month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-buttons">
      <a class="btn whatsapp-btn">See All</a>
    </div>
  </div>
</section>
`;

export default function HomeClient() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.config({ nullTargetWarn: false });
    ScrollTrigger.config({ ignoreMobileResize: true });

    const easeMain = "power3.out";

    // Prevent browser from restoring old scroll position on normal refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    document.documentElement.classList.add("is-loading");
    document.body.classList.add("is-loading");
    document.body.style.overflow = "hidden";

    let mainExperienceStarted = false;
    let heroTl;
    let preloaderTl;
    let preloaderFallbackTimer;
    let typingTimer;
    let expertiseSwiper;
    let patientSwiper;
    let resizeCleanup = null;
    let threeCleanup = null;

    const faqHandlers = [];
    const tabHandlers = [];
    const hoverHandlers = [];
    const imageLoadHandlers = [];

    // Initial state for hero/header. This prevents flash before animation.
    gsap.set("header .logo", {
      y: -25,
      autoAlpha: 0,
    });

    gsap.set("header ul li", {
      y: -20,
      autoAlpha: 0,
    });

    gsap.set(".hero-content h1", {
      y: 50,
      autoAlpha: 0,
      filter: "blur(10px)",
    });

    gsap.set(".hero .hero-buttons .btn", {
      y: 25,
      autoAlpha: 0,
    });

    gsap.set("#typing-text", {
      opacity: 1,
    });

    gsap.set(".cursor", {
      opacity: 0,
    });

    function safeRefresh() {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh(true);
        });
      });
    }

    function startMainExperience() {
      if (mainExperienceStarted) return;

      mainExperienceStarted = true;

      document.documentElement.classList.remove("is-loading");
      document.body.classList.remove("is-loading");
      document.body.style.overflow = "";

      heroTl?.play(0);

      safeRefresh();
    }

    // ===============================
    // PAGE PRELOADER
    // ===============================
    const preloader = document.querySelector(".site-preloader");
    const preloaderCount = document.querySelector(".preloader-count");
    const preloaderFill = document.querySelector(".preloader-progress-fill");

    const hasPreloader = preloader && preloaderCount && preloaderFill;

    if (hasPreloader) {
      const loaderCounter = { value: 0 };

      gsap.set(preloader, {
        autoAlpha: 1,
      });

      gsap.set(".preloader-title", {
        y: 30,
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(".preloader-small-text, .preloader-bottom", {
        y: 18,
        opacity: 0,
      });

      gsap.set(preloaderFill, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      preloaderTl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        onComplete: () => {
          startMainExperience();
        },
      });

      preloaderFallbackTimer = window.setTimeout(() => {
        if (!mainExperienceStarted) {
          preloaderTl?.kill();
          if (preloader) {
            gsap.set(preloader, { display: "none", autoAlpha: 0 });
          }
          startMainExperience();
        }
      }, 4200);

      preloaderTl
        .to(".preloader-title", {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
        })
        .to(
          ".preloader-small-text, .preloader-bottom",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
          },
          "-=0.45"
        )
        .to(
          preloaderFill,
          {
            scaleX: 1,
            duration: 1.8,
            ease: "power2.inOut",
          },
          "-=0.15"
        )
        .to(
          loaderCounter,
          {
            value: 100,
            duration: 1.8,
            ease: "power2.inOut",
            onUpdate: () => {
              preloaderCount.textContent = `${Math.round(loaderCounter.value)}`;
            },
          },
          "<"
        )
        .to(preloader, {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
          delay: 0.15,
        })
        .set(preloader, {
          display: "none",
        });
    }

    // ===============================
    // THREE.JS SETUP
    // ===============================
    const canvas = document.querySelector("#webgl");

    if (canvas && typeof THREE !== "undefined") {
      try {
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
          45,
          window.innerWidth / window.innerHeight,
          0.1,
          100
        );

        camera.position.set(1.8, 0, 5);

        const renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.NoToneMapping;

        const textureLoader = new THREE.TextureLoader();

        const texture = textureLoader.load(imageSrc(logoBannerImg), () => {
          safeRefresh();
        });

        texture.colorSpace = THREE.SRGBColorSpace;

        const geometry = new THREE.PlaneGeometry(3, 3);

        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
        });

        const ring = new THREE.Mesh(geometry, material);
        scene.add(ring);

        gsap.set(ring.position, {
          x: -0.1,
          y: -0.2,
          z: 0,
        });

        gsap.set(ring.scale, {
          x: 1,
          y: 1,
          z: 1,
        });

        gsap.set(ring.rotation, {
          x: 0,
          y: 0,
          z: 0,
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom bottom",
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
            defaults: {
              ease: "none",
            },
          })
          .to(ring.rotation, {
            z: Math.PI * 2,
            duration: 1,
          })
          .to(
            ring.position,
            {
              x: -2.5,
              y: 0,
              duration: 1,
            },
            ">"
          )
          .to(
            ring.scale,
            {
              x: 0.7,
              y: 0.7,
              z: 0.7,
              duration: 1,
            },
            "<"
          )
          .to(
            ring.position,
            {
              x: -3.8,
              y: -1,
              duration: 1,
            },
            ">"
          )
          .to(
            ring.rotation,
            {
              z: Math.PI,
              duration: 1,
            },
            "<"
          );

        let animationFrameId;

        function animate() {
          animationFrameId = requestAnimationFrame(animate);
          renderer.render(scene, camera);
        }

        animate();

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
          safeRefresh();
        };

        window.addEventListener("resize", handleResize);

        resizeCleanup = () => {
          window.removeEventListener("resize", handleResize);
        };

        threeCleanup = () => {
          cancelAnimationFrame(animationFrameId);

          texture.dispose();
          geometry.dispose();
          material.dispose();
          renderer.dispose();

          scene.remove(ring);
        };
      } catch (err) {
        console.error("Three.js animation error:", err);
      }
    }

    // ===============================
    // HERO TYPING ANIMATION
    // ===============================
    const words = [
      "Knee Replacement ",
      "Hip Replacement ",
      "Regenerative Treatments ",
      "Pain Management ",
    ];

    const typingText = document.getElementById("typing-text");
    const cursor = document.querySelector(".cursor");

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingStarted = false;

    const typingSpeed = 80;
    const deletingSpeed = 50;
    const pauseAfterType = 700;

    function typeEffect() {
      if (!typingText) return;

      const currentWord = words[wordIndex];

      if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
          typingTimer = window.setTimeout(() => {
            isDeleting = true;
            typeEffect();
          }, pauseAfterType);
          return;
        }
      } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      const speed = isDeleting ? deletingSpeed : typingSpeed;
      typingTimer = window.setTimeout(typeEffect, speed);
    }

    function startHeroTypingAnimation() {
      if (typingStarted || !typingText) return;

      typingStarted = true;
      typingText.textContent = "";

      if (cursor) cursor.style.opacity = "1";

      typeEffect();
    }

    // ===============================
    // HERO ANIMATION
    // ===============================
    heroTl = gsap.timeline({
      paused: true,
      defaults: {
        ease: easeMain,
      },
      onComplete: startHeroTypingAnimation,
    });

    heroTl
      .to("header .logo", {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
      })
      .to(
        "header ul li",
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.08,
          duration: 0.7,
        },
        "-=0.5"
      )
      .to(
        ".hero-content h1",
        {
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 1,
        },
        "-=0.3"
      )
      .to(
        ".hero .hero-buttons .btn",
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.12,
          duration: 0.7,
        },
        "-=0.45"
      );

    if (!hasPreloader) {
      startMainExperience();
    }

    // ===============================
    // EXPERTISE SWIPER + TABS
    // ===============================
    const tabs = document.querySelectorAll(".expertise-tabs .tab");

    if (document.querySelector(".expertise-slider")) {
      expertiseSwiper = new Swiper(".expertise-slider", {
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 1,
        speed: 1000,
        grabCursor: true,
        loop: false,
        slideToClickedSlide: true,
        observer: true,
        observeParents: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 90,
            centeredSlides: true,
          },
        },
        on: {
          init(swiper) {
            const index = swiper.activeIndex;
            tabs.forEach((tab) => tab.classList.remove("active"));
            tabs[index]?.classList.add("active");
            safeRefresh();
          },
          slideChangeTransitionEnd(swiper) {
            const index = swiper.activeIndex;
            tabs.forEach((tab) => tab.classList.remove("active"));
            tabs[index]?.classList.add("active");
            safeRefresh();
          },
        },
      });

      tabs.forEach((tab, index) => {
        const handleTabClick = () => {
          tabs.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");
          expertiseSwiper.slideTo(index, 800);
        };

        tab.addEventListener("click", handleTabClick);

        tabHandlers.push({
          tab,
          handleTabClick,
        });
      });
    }

    // ===============================
    // PATIENT STORIES SWIPER
    // ===============================
  
if (document.querySelector(".patientSwiper")) {
  const isMobilePatient = window.matchMedia("(max-width: 991px)").matches;

  if (isMobilePatient) {
    patientSwiper = new Swiper(".patientSwiper", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      speed: 800,
      grabCursor: true,
      allowTouchMove: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      observer: true,
      observeParents: true,
    });
  } else {
    const patientSection = document.querySelector(".Patient-section");
    const patientSlides = document.querySelectorAll(".patientSwiper .swiper-slide");

    let lastPatientSlideIndex = 0;

    patientSwiper = new Swiper(".patientSwiper", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
      autoplay: false,
      speed: 900,
      allowTouchMove: false,
      mousewheel: false,
      observer: true,
      observeParents: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    if (patientSection && patientSlides.length > 1) {
      const totalSlides = patientSlides.length;

      ScrollTrigger.create({
        trigger: patientSection,
        start: "top top",
        end: () => `+=${window.innerHeight * totalSlides}`,
        pin: true,
        pinSpacing: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / (totalSlides - 1),
          duration: { min: 0.2, max: 0.6 },
          delay: 0,
          ease: "power1.inOut",
        },
        onUpdate(self) {
          const slideIndex = Math.min(
            totalSlides - 1,
            Math.floor(self.progress * totalSlides)
          );

          if (slideIndex !== lastPatientSlideIndex) {
            lastPatientSlideIndex = slideIndex;
            patientSwiper.slideTo(slideIndex, 700);
          }
        },
        onEnter() {
          lastPatientSlideIndex = 0;
          patientSwiper.slideTo(0, 0);
        },
        onEnterBack() {
          lastPatientSlideIndex = totalSlides - 1;
          patientSwiper.slideTo(totalSlides - 1, 0);
        },
      });
    }
  }
}

    // ===============================
    // FAQ ACCORDION
    // ===============================
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      if (!question) return;

      const handler = () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach((otherItem) => {
          otherItem.classList.remove("active");
        });

        if (!isActive) item.classList.add("active");

        safeRefresh();
      };

      question.addEventListener("click", handler);

      faqHandlers.push({
        question,
        handler,
      });
    });

    // ===============================
    // SECTION SCROLL ANIMATIONS
    // ===============================
    gsap.utils.toArray("section, footer").forEach((section) => {
      const label = section.querySelector(".div-title");
      const heading = section.querySelector(
        ".heading, .faq-title, .footer-heading"
      );
      const subHeading = section.querySelector(
        ".sub-heading, .faq-description, .footer-subtitle"
      );

      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      if (label) {
        sectionTl.fromTo(
          label,
          {
            y: 25,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: easeMain,
            clearProps: "visibility",
          }
        );
      }

      if (heading) {
        sectionTl.fromTo(
          heading,
          {
            y: 45,
            autoAlpha: 0,
            filter: "blur(8px)",
          },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: easeMain,
            clearProps: "visibility",
          },
          "-=0.35"
        );
      }

      if (subHeading) {
        sectionTl.fromTo(
          subHeading,
          {
            y: 28,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: easeMain,
            clearProps: "visibility",
          },
          "-=0.45"
        );
      }
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-section .section-wrapper",
          start: "top 75%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      })
      .fromTo(
        ".about-section .left p",
        {
          y: 40,
          autoAlpha: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: easeMain,
          clearProps: "visibility",
        }
      )
      .fromTo(
        ".about-section .img-wrap",
        {
          y: 70,
          autoAlpha: 0,
          scale: 0.92,
          filter: "blur(10px)",
        },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power4.out",
          clearProps: "visibility",
        },
        "-=0.65"
      );

    gsap.to(".about-section .img-wrap img", {
      y: -18,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".expertise-section",
          start: "top 72%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      })
      .fromTo(
        ".expertise-tabs",
        {
          y: 35,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: easeMain,
          clearProps: "visibility",
        }
      )
      .fromTo(
        ".expertise-card",
        {
          y: 70,
          autoAlpha: 0,
          scale: 0.92,
          filter: "blur(10px)",
        },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          filter: "blur(0px)",
          stagger: 0.18,
          duration: 1,
          ease: "power4.out",
          clearProps: "visibility",
        },
        "-=0.35"
      )
      .fromTo(
        ".expertise-section .hero-buttons",
        {
          y: 25,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: easeMain,
          clearProps: "visibility",
        },
        "-=0.3"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".Patient-section",
          start: "top 72%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      })
      .from(".patientSwiper", {
        y: 70,
        autoAlpha: 0,
        scale: 0.96,
        filter: "blur(10px)",
        duration: 1.1,
        ease: "power4.out",
        clearProps: "visibility",
      })
      .from(
        ".Patient-section .hero-buttons",
        {
          y: 30,
          autoAlpha: 0,
          duration: 0.7,
          ease: easeMain,
          clearProps: "visibility",
        },
        "-=0.45"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".faq-section",
          start: "top 72%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      })
      .fromTo(
        ".faq-left",
        {
          x: -60,
          autoAlpha: 0,
          filter: "blur(8px)",
        },
        {
          x: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: easeMain,
          clearProps: "visibility",
        }
      )
      .fromTo(
        ".faq-item",
        {
          y: 60,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: easeMain,
          clearProps: "visibility",
        },
        "-=0.65"
      )
      .from(
        ".faq-section .hero-buttons",
        {
          y: 25,
          autoAlpha: 0,
          duration: 0.7,
          ease: easeMain,
          clearProps: "visibility",
        },
        "-=0.35"
      );

    if (document.querySelector(".contact-footer")) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact-footer",
            start: "top 75%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        })
        .from(".footer-left", {
          x: -60,
          autoAlpha: 0,
          duration: 1,
          ease: easeMain,
          clearProps: "visibility",
        })
        .from(
          ".footer-right",
          {
            x: 60,
            autoAlpha: 0,
            duration: 1,
            ease: easeMain,
            clearProps: "visibility",
          },
          "-=0.75"
        )
        .from(
          ".menu-footer",
          {
            x: -20,
            autoAlpha: 0,
            duration: 0.75,
            ease: easeMain,
            clearProps: "visibility",
          },
          "-=0.5"
        )
        .from(
          ".map-container",
          {
            y: 40,
            autoAlpha: 0,
            scale: 0.96,
            duration: 0.9,
            ease: "power4.out",
            clearProps: "visibility",
          },
          "-=0.45"
        );
    }

    // ===============================
    // HOVER ANIMATION
    // ===============================
    gsap.utils
      .toArray(
        ".expertise-card .img-wrap, .about-section .img-wrap, .testimonial-image, .map-container"
      )
      .forEach((wrap) => {
        const img = wrap.querySelector("img, iframe");

        wrap.style.overflow = "hidden";
        wrap.style.willChange = "transform";

        if (img) img.style.willChange = "transform";

        const mouseEnterHandler = () => {
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
        };

        const mouseLeaveHandler = () => {
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
        };

        wrap.addEventListener("mouseenter", mouseEnterHandler);
        wrap.addEventListener("mouseleave", mouseLeaveHandler);

        hoverHandlers.push({
          wrap,
          mouseEnterHandler,
          mouseLeaveHandler,
        });
      });

    // ===============================
    // IMAGE LOAD FIX
    // Important: do not force header/footer images to lazy-load.
    // Only observe images inside this component.
    // ===============================
    document.querySelectorAll("#site-root img").forEach((img) => {
      img.decoding = "async";

      const refreshAfterImage = () => {
        if (img.decode) {
          img
            .decode()
            .catch(() => { })
            .finally(() => {
              safeRefresh();
            });
        } else {
          safeRefresh();
        }
      };

      if (img.complete) {
        refreshAfterImage();
      } else {
        img.addEventListener("load", refreshAfterImage, {
          once: true,
        });

        img.addEventListener("error", refreshAfterImage, {
          once: true,
        });

        imageLoadHandlers.push({
          img,
                    y: 60,
        });
      }
    });

    // Extra refresh passes for normal refresh/cache cases
    const refreshTimer1 = window.setTimeout(() => {
      safeRefresh();
    }, 300);

    const refreshTimer2 = window.setTimeout(() => {
      safeRefresh();
    }, 900);

    const refreshTimer3 = window.setTimeout(() => {
      safeRefresh();
    }, 1600);

    // ===============================
    // CLEANUP
    // ===============================
    return () => {
      preloaderTl?.kill();
      heroTl?.kill();

      window.clearTimeout(typingTimer);
      window.clearTimeout(preloaderFallbackTimer);
      window.clearTimeout(refreshTimer1);
      window.clearTimeout(refreshTimer2);
      window.clearTimeout(refreshTimer3);

      resizeCleanup?.();
      threeCleanup?.();

      expertiseSwiper?.destroy(true, true);
      patientSwiper?.destroy(true, true);

      faqHandlers.forEach(({ question, handler }) => {
        question.removeEventListener("click", handler);
      });

      tabHandlers.forEach(({ tab, handleTabClick }) => {
        tab.removeEventListener("click", handleTabClick);
      });

      hoverHandlers.forEach(
        ({ wrap, mouseEnterHandler, mouseLeaveHandler }) => {
          wrap.removeEventListener("mouseenter", mouseEnterHandler);
          wrap.removeEventListener("mouseleave", mouseLeaveHandler);
        }
      );

      imageLoadHandlers.forEach(({ img, onImageLoad }) => {
        img.removeEventListener("load", onImageLoad);
        img.removeEventListener("error", onImageLoad);
      });

      document.documentElement.classList.remove("is-loading");
      document.body.classList.remove("is-loading");
      document.body.style.overflow = "";

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <div id="site-root" dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}