
const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

gsap.from(".nlink", {
    stagger: .1,
    y: 20,
    duration: 1,
    ease: Expo,
    opacity: 0,
  


})

Shery.textAnimate("#header1 h1" , {

    style: 2,
    y: 10,
    delay: 2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.2,
  });

  gsap.from("#imgplant", {
    y: 20,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1.5,
  });
// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate header text


// Animate #imgpink image
gsap.from("#imgpink img", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#imgpink",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// Animate #imgplant
gsap.from("#imgplant img", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#imgplant",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Animate #pd text
gsap.from("#pd p", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#pd",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Animate #imgsea and #imgcloud
gsap.from("#imgsea img, #imgcloud img", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#page3",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

gsap.from("#imgsea h1, #imgsea p, #imgcloud h1, #imgcloud p", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#page3",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Animate #bottleimg and #bottlepd
gsap.from("#bottleimg img", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#bottleimg",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

gsap.from("#bottlepd h1, #bottlepd p", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#bottlepd",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Animate video text
gsap.from("#videopd h3, #videopd button", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#lastpage",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});





  
