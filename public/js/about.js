// About Section GSAP Animation
document.addEventListener('DOMContentLoaded', () => {
    // Check if GSAP and ScrollTrigger are loaded
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.error('GSAP or ScrollTrigger not loaded');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Wrap each word in a span for animation
    function wrapWords(element) {
        const text = element.textContent;
        const words = text.split(' ');
        element.innerHTML = words.map(word => 
            `<span class="word">${word}</span>`
        ).join(' ');
        return element.querySelectorAll('.word');
    }

    const para1 = document.querySelector('.paragraph.first');
    const para2 = document.querySelector('.paragraph.second');

    // Check if elements exist
    if (!para1 || !para2) {
        console.error('Paragraph elements not found');
        return;
    }

    const words1 = wrapWords(para1);
    const words2 = wrapWords(para2);

    // Main timeline for the entire section
    const mainTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.about-section',
            start: '-10% 10%',
            end: 'bottom', // Scroll distance for animation
            scrub: 1,
            pin: true, // Pin the section while animating
            // markers: true // Uncomment for debugging
        }
    });

    // Phase 1: Reading animation for paragraph 1 (0-30%)
    words1.forEach((word, index) => {
        const progress = index / words1.length;
        
        // Highlight word in blue
        mainTimeline.to(word, {
            opacity: 1,
            color: '#60a5fa',
            duration: 0.01
        }, progress * 0.3);
        
        // Change to white after highlight
        mainTimeline.to(word, {
            color: '#fff',
            duration: 0.01
        }, (progress * 0.3) + 0.015);
    });

    // Small pause to let first paragraph finish
    mainTimeline.to({}, { duration: 0.05 }, 0.3);

    // Phase 2: Smooth fade out paragraph 1 (30-35%)
    mainTimeline.to(para1, {
        opacity: 0,
        duration: 0.1,
        ease: 'none'
    }, 0.30);

    // Phase 3: Smooth fade in paragraph 2 (35-40%)
    mainTimeline.fromTo(para2, 
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 0.1,
            ease: 'none'
        }, 
    0.35);

    // Phase 4: Reading animation for paragraph 2 (40-100%)
    words2.forEach((word, index) => {
        const progress = index / words2.length;
        const startTime = 0.40 + (progress * 0.60);
        
        // Highlight word in blue
        mainTimeline.to(word, {
            opacity: 1,
            color: '#60a5fa',
            duration: 0.01
        }, startTime);
        
        // Change to white after highlight
        mainTimeline.to(word, {
            color: '#fff',
            duration: 0.01
        }, startTime + 0.015);
    });

    // Optional: Add subtle border color animation
    gsap.to('.highlight-box', {
        borderColor: '#3b82f6',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top center',
            end: 'bottom center',
            scrub: true
        }
    });
});