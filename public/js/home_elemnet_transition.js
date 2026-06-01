function initHomeElementTransition() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;

  if (!gsap || !ScrollTrigger) {
    console.warn("home_elemnet_transition.js: GSAP or ScrollTrigger not available yet.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ===============================
     THREE.JS SETUP
  ================================================ */
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );

  camera.position.set(1.8, 0, 5);

  const canvas = document.querySelector("#webgl");
  if (!canvas) {
    console.warn("home_elemnet_transition.js: #webgl canvas not found, skipping Three.js animation.");
    return;
  }

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;

  /* ===============================
     IMAGE (PNG)
  ================================================ */
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("/images/logo_banner.png");
  texture.colorSpace = THREE.SRGBColorSpace;

  const geometry = new THREE.PlaneGeometry(3, 3);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
  });

  const ring = new THREE.Mesh(geometry, material);
  scene.add(ring);

  /* ===============================
     INITIAL STATE (CENTER)
  ================================================ */
  gsap.set(ring.position, { x: -0.1, y: -0.2, z: 0 });
  gsap.set(ring.scale, { x: 1, y: 1, z: 1 });
  gsap.set(ring.rotation, { x: 0, y: 0, z: 0 });

  /* ===============================
     SCROLL MASTER TIMELINE
  ================================================ */
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
    },
    defaults: {
      ease: "none",
    },
  });

  tl.to(ring.rotation, {
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

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  /* ===============================
     ABOUT PARAGRAPH ANIMATION
  ================================================ */
  function wrapWords(element) {
    const text = element.textContent;
    const words = text.split(" ");
    element.innerHTML = words
      .map(
        (word) =>
          `<span class="word" style="display: inline-block; opacity: 0.3; margin: 0 0.15em;">${word}</span>`
      )
      .join(" ");
    return element.querySelectorAll(".word");
  }

  const para1 = document.querySelector(".paragraph.first");
  const para2 = document.querySelector(".paragraph.second");
  const scrollIndicator = document.getElementById("scrollIndicator");

  if (para1 && para2) {
    const words1 = wrapWords(para1);
    const words2 = wrapWords(para2);

    if (scrollIndicator) {
      gsap.to(scrollIndicator, {
        opacity: 0,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      });
    }

    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers: true // Uncomment to see scroll markers for debugging
      },
    });

    words1.forEach((word, index) => {
      const progress = index / words1.length;

      mainTimeline.to(
        word,
        {
          opacity: 1,
          color: "#60a5fa",
          duration: 0.01,
        },
        progress * 0.3
      );

      mainTimeline.to(
        word,
        {
          color: "#fff",
          duration: 0.01,
        },
        progress * 0.3 + 0.015
      );
    });

    mainTimeline.to({}, { duration: 0.05 }, 0.3);

    mainTimeline.to(
      para1,
      {
        opacity: 0,
        duration: 0.05,
      },
      0.35
    );

    mainTimeline.to(
      para2,
      {
        opacity: 1,
        duration: 0.05,
      },
      0.4
    );

    words2.forEach((word, index) => {
      const progress = index / words2.length;
      const startTime = 0.45 + progress * 0.55;

      mainTimeline.to(
        word,
        {
          opacity: 1,
          color: "#60a5fa",
          duration: 0.01,
        },
        startTime
      );

      mainTimeline.to(
        word,
        {
          color: "#fff",
          duration: 0.01,
        },
        startTime + 0.015
      );
    });

    gsap.to(".highlight-box", {
      borderColor: "#3b82f6",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }
}

function waitForGSAPReady() {
  if (window.gsap && window.ScrollTrigger) {
    initHomeElementTransition();
    return;
  }

  const intervalId = window.setInterval(() => {
    if (window.gsap && window.ScrollTrigger) {
      window.clearInterval(intervalId);
      initHomeElementTransition();
    }
  }, 50);

  window.setTimeout(() => window.clearInterval(intervalId), 5000);
}

window.initHomeElementTransition = initHomeElementTransition;

waitForGSAPReady();
